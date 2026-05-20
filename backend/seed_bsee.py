"""
Standalone seeder for bsee_research_dataset_300.csv
Run from the backend/ directory:
    python seed_bsee.py
"""

import asyncio
import csv
import os
import sys
import logging

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[logging.StreamHandler(sys.stdout)],
)
logger = logging.getLogger("bsee_seeder")

# ── Path to the dataset ───────────────────────────────────────────────────────
CSV_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data", "bsee_research_dataset_300.csv")


async def seed_bsee():
    # Import app internals (must be inside async to avoid event-loop issues)
    from app.core.database import AsyncSessionLocal
    from app.models.user import Thesis, ThesisStatus
    from app.services.rag_service import rag_pipeline
    from sqlalchemy import select

    if not os.path.exists(CSV_PATH):
        logger.error(f"CSV not found: {CSV_PATH}")
        return

    logger.info(f"Loading {CSV_PATH} ...")

    with open(CSV_PATH, mode="r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        rows = list(reader)

    logger.info(f"Total rows in CSV: {len(rows)}")

    # Keywords that indicate an Education department
    education_keywords = [
        "learning", "education", "student", "teacher", "class", "school",
        "literacy", "numeracy", "teaching", "pedagogy", "curriculum",
        "grade", "academic", "university", "college", "children",
        "older adults", "kindergarten", "classroom", "learner", "lesson",
        "educ", "literacy",
    ]

    added = 0
    skipped_dup = 0
    skipped_empty = 0

    async with AsyncSessionLocal() as session:
        try:
            for idx, row in enumerate(rows):
                title   = row.get("title",   "").strip()
                journal = row.get("journal", "").strip()
                authors = row.get("authors", "").strip()
                keyword = row.get("keyword", "").strip()
                year_str = row.get("year",   "").strip()
                doi     = row.get("doi",     "").strip()

                if not title:
                    skipped_empty += 1
                    continue

                # ── Year ──────────────────────────────────────────────────────
                try:
                    year = int(float(year_str))
                    if not (1900 <= year <= 2100):
                        year = 2025
                except (ValueError, TypeError):
                    year = 2025

                # ── Authors ───────────────────────────────────────────────────
                if not authors:
                    authors = "Unknown Author"

                authors_list = (
                    [a.strip() for a in authors.split(";")]
                    if ";" in authors
                    else [a.strip() for a in authors.split(",")]
                    if "," in authors
                    else [authors]
                )
                authors_formatted = (
                    ", ".join(authors_list[:-1]) + " and " + authors_list[-1]
                    if len(authors_list) > 1
                    else authors_list[0]
                )

                # ── Abstract (generated) ─────────────────────────────────────
                journal_label = journal if journal else "Academic Repository"
                abstract = (
                    f"This research, authored by {authors_formatted}, explores the "
                    f"development and application of advanced systems in '{title}'. "
                    f"Published in '{journal_label}' in {year}, the study investigates "
                    f"key methodologies, frameworks, and practical implications within "
                    f"the field, providing critical insights and recommendations for "
                    f"future academic and professional endeavors."
                )

                # ── Keywords ──────────────────────────────────────────────────
                raw_keywords = []
                if keyword:
                    raw_keywords.append(keyword.lower())
                title_words = [w.strip(".,;:?!()\"'").lower() for w in title.split()]
                skip_words = {
                    "about", "their", "there", "would", "could", "should",
                    "using", "based", "through", "under", "between",
                }
                for w in title_words:
                    if len(w) > 4 and w not in skip_words:
                        raw_keywords.append(w)

                unique_kws = []
                for k in raw_keywords:
                    if k not in unique_kws:
                        unique_kws.append(k)
                keywords = ";".join(unique_kws[:8])

                # ── Department ────────────────────────────────────────────────
                title_lower   = title.lower()
                keyword_lower = keyword.lower()
                is_ed = False
                for kw in education_keywords:
                    if kw in title_lower or kw in keyword_lower:
                        # Guard against ML/AI terms being mis-classified as Education
                        it_flags = [
                            "machine learning", "deep learning", "learning algorithm",
                            "learning model", "learning framework", "learning method",
                            "learning approach", "learning rule", "learning system",
                            "federated", "transfer learning", "reinforcement",
                            "supervised", "meta-learning", "active learning",
                        ]
                        is_it = any(f in title_lower or f in keyword_lower for f in it_flags)
                        other_ed = any(
                            et in title_lower
                            for et in [
                                "school", "classroom", "teacher", "pedagogy",
                                "curriculum", "student", "literacy", "numeracy",
                                "kindergarten",
                            ]
                        )
                        if is_it and not other_ed:
                            continue
                        is_ed = True
                        break
                department = "Education" if is_ed else "Information Technology"

                # ── Duplicate check ───────────────────────────────────────────
                existing = await session.execute(
                    select(Thesis).where(Thesis.title == title)
                )
                if existing.scalar_one_or_none():
                    logger.debug(f"Row {idx}: duplicate '{title[:60]}' — skipped")
                    skipped_dup += 1
                    continue

                # ── Insert thesis ─────────────────────────────────────────────
                thesis = Thesis(
                    title=title,
                    abstract=abstract,
                    authors=authors,
                    keywords=keywords,
                    year=year,
                    department=department,
                    status=ThesisStatus.APPROVED,
                    source_file="bsee_research_dataset_300.csv",
                )
                session.add(thesis)
                await session.flush()  # get thesis.id before indexing

                # ── Index into vector store ───────────────────────────────────
                try:
                    vector_id = await rag_pipeline.index_thesis(
                        thesis_id=thesis.id,
                        title=title,
                        abstract=abstract,
                        authors=authors,
                        keywords=keywords,
                        year=year,
                        department=department,
                    )
                    thesis.vector_id = vector_id
                except Exception as ve:
                    logger.warning(f"Row {idx}: vector indexing failed — {ve}")

                added += 1

                if added % 50 == 0:
                    await session.commit()
                    logger.info(f"  Progress: {added} inserted so far ...")

            await session.commit()
            logger.info(
                f"\n✅ Done! Added: {added} | Duplicates skipped: {skipped_dup} | "
                f"Empty rows skipped: {skipped_empty}"
            )

        except Exception as e:
            await session.rollback()
            logger.error(f"Seeding failed: {e}", exc_info=True)


if __name__ == "__main__":
    asyncio.run(seed_bsee())
