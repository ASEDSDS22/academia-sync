"""
AcademiaSync - Data Ingestion Service
Handles CSV/Excel upload, preprocessing, embedding, and vector store indexing.
"""

import logging
import os
import uuid
from typing import List, Optional
from pathlib import Path
import asyncio

logger = logging.getLogger(__name__)


REQUIRED_FIELDS = {"title"}
OPTIONAL_FIELDS = {"abstract", "authors", "keywords", "year", "department"}
ALL_FIELDS = REQUIRED_FIELDS | OPTIONAL_FIELDS

# Field aliases to handle varied CSV column names
FIELD_ALIASES = {
    "title":      ["title", "thesis_title", "name", "subject"],
    "abstract":   ["abstract", "summary", "description", "overview"],
    "authors":    ["authors", "author", "researcher", "researchers", "writer"],
    "keywords":   ["keywords", "keyword", "tags", "topics"],
    "year":       ["year", "publication_year", "date", "year_published"],
    "department": ["department", "dept", "college", "faculty", "school", "program"],
}


def normalize_columns(df_columns: List[str]) -> dict:
    """Map actual column names to our canonical field names."""
    col_lower = {c.lower().strip(): c for c in df_columns}
    mapping = {}
    for field, aliases in FIELD_ALIASES.items():
        for alias in aliases:
            if alias in col_lower:
                mapping[field] = col_lower[alias]
                break
    return mapping


def clean_text(value) -> Optional[str]:
    """Sanitize and normalize a string value from CSV."""
    if value is None:
        return None
    val = str(value).strip()
    if val.lower() in {"nan", "none", "null", "", "n/a", "na"}:
        return None
    return val


def parse_year(value) -> Optional[int]:
    """Parse a year value safely."""
    try:
        year = int(float(str(value)))
        if 1900 <= year <= 2100:
            return year
    except (ValueError, TypeError):
        pass
    return None


def load_dataframe(filepath: str):
    """Load CSV or Excel file into a pandas DataFrame."""
    ext = Path(filepath).suffix.lower()
    try:
        import pandas as pd
        if ext == ".csv":
            return pd.read_csv(filepath, encoding="utf-8", on_bad_lines="skip")
        elif ext in {".xlsx", ".xls"}:
            return pd.read_excel(filepath, engine="openpyxl" if ext == ".xlsx" else "xlrd")
        else:
            raise ValueError(f"Unsupported file type: {ext}")
    except Exception as e:
        raise RuntimeError(f"Failed to load file: {e}")


class DataIngestionService:
    """
    Handles the full pipeline:
    load → clean → deduplicate → embed → store in DB + vector store
    """

    async def ingest_file(
        self,
        filepath: str,
        upload_id: int,
        uploaded_by: int,
        db_session,
        rag_pipeline,
    ) -> dict:
        """
        Main entry: load file, process each row, index into vector store and DB.
        Returns summary: {total, processed, failed, errors}
        """
        from app.models.user import Thesis, ThesisStatus, DatasetUpload
        from sqlalchemy import select

        errors = []
        processed = 0
        failed = 0

        try:
            df = load_dataframe(filepath)
        except RuntimeError as e:
            return {"total": 0, "processed": 0, "failed": 0, "errors": [str(e)]}

        column_map = normalize_columns(list(df.columns))
        if "title" not in column_map:
            return {
                "total": len(df),
                "processed": 0,
                "failed": len(df),
                "errors": ["No 'title' column found. Please include a title column."],
            }

        total = len(df)
        batch_size = 32  # Embed in batches for efficiency

        # ── Process rows ──────────────────────────────────────────────────────
        for idx, row in df.iterrows():
            try:
                title = clean_text(row.get(column_map.get("title", ""), None))
                if not title or len(title) < 3:
                    errors.append(f"Row {idx}: Empty or invalid title — skipped.")
                    failed += 1
                    continue

                abstract   = clean_text(row.get(column_map.get("abstract", "__x"), None))
                authors    = clean_text(row.get(column_map.get("authors",  "__x"), None))
                keywords   = clean_text(row.get(column_map.get("keywords", "__x"), None))
                department = clean_text(row.get(column_map.get("department", "__x"), None))
                year       = parse_year(row.get(column_map.get("year", "__x"), None))

                if year is None:
                    year = 2025

                # Auto-enrich missing fields
                if not authors:
                    authors = "Unknown Author"

                if not keywords:
                    keyword_col = clean_text(row.get("keyword", ""))
                    raw_kws = [keyword_col] if keyword_col else []
                    title_words = [w.strip(".,;:?!()\"'").lower() for w in title.split()]
                    for w in title_words:
                        if len(w) > 4 and w not in ["about", "their", "there", "would", "could", "should", "using", "based", "through", "under", "between"]:
                            raw_kws.append(w)
                    unique_kws = []
                    for k in raw_kws:
                        if k not in unique_kws:
                            unique_kws.append(k)
                    keywords = ";".join(unique_kws[:8])

                if not abstract:
                    journal = clean_text(row.get("journal", "Academic Repository")) or "Academic Repository"
                    authors_list = [a.strip() for a in authors.split(";")] if ";" in authors else [a.strip() for a in authors.split(",")] if "," in authors else [authors]
                    authors_formatted = ", ".join(authors_list[:-1]) + " and " + authors_list[-1] if len(authors_list) > 1 else authors_list[0]
                    abstract = f"This research, authored by {authors_formatted}, explores the development and application of advanced systems in '{title}'. Published in '{journal}' in {year}, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors."

                if not department:
                    education_keywords = [
                        "learning", "education", "student", "teacher", "class", "school", 
                        "literacy", "numeracy", "teaching", "pedagogy", "curriculum", 
                        "grade", "academic", "university", "college", "children", 
                        "older adults", "kindergarten", "classroom", "learner", "lesson",
                        "educ", "literacy"
                    ]
                    is_ed = False
                    title_lower = title.lower()
                    kw_lower = keywords.lower() if keywords else ""
                    for kw in education_keywords:
                        if kw in title_lower or kw in kw_lower:
                            is_machine_learning = "machine learning" in title_lower or "machine learning" in kw_lower
                            is_deep_learning = "deep learning" in title_lower or "deep learning" in kw_lower
                            is_learning_alg = "learning algorithm" in title_lower or "learning algorithm" in kw_lower
                            is_learning_model = "learning model" in title_lower or "learning model" in kw_lower
                            is_learning_framework = "learning framework" in title_lower or "learning framework" in kw_lower
                            is_learning_method = "learning method" in title_lower or "learning method" in kw_lower
                            is_learning_approach = "learning approach" in title_lower or "learning approach" in kw_lower
                            is_learning_rule = "learning rule" in title_lower or "learning rule" in kw_lower
                            is_learning_system = "learning system" in title_lower or "learning system" in kw_lower
                            is_federated_learning = "federated" in title_lower or "federated" in kw_lower
                            is_transfer_learning = "transfer learning" in title_lower or "transfer learning" in kw_lower
                            is_reinforcement = "reinforcement" in title_lower or "reinforcement" in kw_lower
                            is_self_supervised = "supervised" in title_lower or "supervised" in kw_lower
                            is_meta_learning = "meta-learning" in title_lower or "meta-learning" in kw_lower
                            is_active_learning = "active learning" in title_lower or "active learning" in kw_lower
                            
                            is_it_learning = (is_machine_learning or is_deep_learning or is_learning_alg or 
                                               is_learning_model or is_learning_framework or is_learning_method or 
                                               is_learning_approach or is_learning_rule or is_learning_system or 
                                               is_federated_learning or is_transfer_learning or is_reinforcement or 
                                               is_self_supervised or is_meta_learning or is_active_learning)
                            
                            has_other_ed_terms = any(et in title_lower for et in ["school", "classroom", "teacher", "pedagogy", "curriculum", "student", "literacy", "numeracy", "kindergarten"])
                            
                            if is_it_learning and not has_other_ed_terms:
                                continue
                            is_ed = True
                            break
                    department = "Education" if is_ed else "Information Technology"

                # Check for duplicate title in DB
                existing = await db_session.execute(
                    select(Thesis).where(Thesis.title == title)
                )
                if existing.scalar_one_or_none():
                    errors.append(f"Row {idx}: Duplicate title '{title[:60]}' — skipped.")
                    failed += 1
                    continue

                # Create thesis DB record
                thesis = Thesis(
                    title       = title,
                    abstract    = abstract,
                    authors     = authors,
                    keywords    = keywords,
                    year        = year,
                    department  = department,
                    status      = ThesisStatus.APPROVED,
                    source_file = os.path.basename(filepath),
                    uploaded_by = uploaded_by,
                )
                db_session.add(thesis)
                await db_session.flush()  # Get thesis.id

                # Index into vector store
                vector_id = await rag_pipeline.index_thesis(
                    thesis_id  = thesis.id,
                    title      = title,
                    abstract   = abstract or "",
                    authors    = authors or "",
                    keywords   = keywords or "",
                    year       = year,
                    department = department,
                )
                thesis.vector_id = vector_id
                processed += 1

                # Update progress every 50 rows
                if processed % 50 == 0:
                    upload_rec = await db_session.get(DatasetUpload, upload_id)
                    if upload_rec:
                        upload_rec.processed = processed
                        upload_rec.failed    = failed
                    await db_session.commit()
                    logger.info(f"Ingestion progress: {processed}/{total}")

            except Exception as e:
                logger.error(f"Row {idx} error: {e}")
                errors.append(f"Row {idx}: {str(e)[:100]}")
                failed += 1

        # ── Final commit ──────────────────────────────────────────────────────
        await db_session.commit()

        # Update upload record
        upload_rec = await db_session.get(DatasetUpload, upload_id)
        if upload_rec:
            upload_rec.total_records = total
            upload_rec.processed     = processed
            upload_rec.failed        = failed
            upload_rec.status        = "completed"
            upload_rec.error_log     = "\n".join(errors[:50]) if errors else None
        await db_session.commit()

        # Cleanup temp file
        try:
            os.remove(filepath)
        except Exception:
            pass

        logger.info(f"Ingestion complete: {processed}/{total} processed, {failed} failed.")
        return {
            "total":     total,
            "processed": processed,
            "failed":    failed,
            "errors":    errors[:20],
        }

    def validate_file(self, filename: str, file_size_bytes: int) -> None:
        """Raise ValueError if file type or size is invalid."""
        from app.core.config import settings
        ext = Path(filename).suffix.lstrip(".").lower()
        if ext not in settings.ALLOWED_EXTENSIONS:
            raise ValueError(f"File type '.{ext}' not allowed. Use: {settings.ALLOWED_EXTENSIONS}")
        max_bytes = settings.MAX_FILE_SIZE_MB * 1024 * 1024
        if file_size_bytes > max_bytes:
            raise ValueError(f"File too large. Max: {settings.MAX_FILE_SIZE_MB}MB.")


data_ingestion_service = DataIngestionService()
