import csv
import os
import logging
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.user import Thesis, ThesisStatus
from app.services.rag_service import rag_pipeline

logger = logging.getLogger("academia_sync.seeder")

# Path to the sample theses CSV relative to this core package
CSV_PATH = os.path.join(
    os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))),
    "data",
    "sample_theses.csv"
)

async def seed_theses_if_empty(session_factory):
    """Seed sample_theses.csv into database and vector store if database is empty."""
    async with session_factory() as session:
        try:
            # Check if we already have approved theses in the database
            result = await session.execute(select(Thesis).where(Thesis.status == ThesisStatus.APPROVED))
            existing_theses = result.scalars().all()
            if existing_theses:
                logger.info(f"Database already contains {len(existing_theses)} approved theses. Skipping seeding.")
                return

            if not os.path.exists(CSV_PATH):
                logger.error(f"Sample theses CSV not found at: {CSV_PATH}")
                return

            logger.info("Seeding database and vector store with sample_theses.csv...")
            with open(CSV_PATH, mode="r", encoding="utf-8") as f:
                reader = csv.DictReader(f)
                rows = list(reader)

            count = 0
            education_keywords = [
                "learning", "education", "student", "teacher", "class", "school", 
                "literacy", "numeracy", "teaching", "pedagogy", "curriculum", 
                "grade", "academic", "university", "college", "children", 
                "older adults", "kindergarten", "classroom", "learner", "lesson",
                "educ", "literacy"
            ]
            for row in rows:
                title = row.get("title", "").strip()
                journal = row.get("journal", "").strip()
                authors = row.get("authors", "").strip()
                keyword = row.get("keyword", "").strip()
                year_str = row.get("year", "").strip()

                if not title:
                    continue

                year = int(year_str) if year_str.isdigit() else 2025

                # Format authors for abstract
                authors_list = [a.strip() for a in authors.split(";")] if ";" in authors else [a.strip() for a in authors.split(",")] if "," in authors else [authors] if authors else ["Unknown Author"]
                authors_formatted = ", ".join(authors_list[:-1]) + " and " + authors_list[-1] if len(authors_list) > 1 else authors_list[0]
                
                # Generate abstract
                abstract = f"This research, authored by {authors_formatted}, explores the development and application of advanced systems in '{title}'. Published in '{journal}' in {year}, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors."
                
                # Build rich keywords list
                raw_keywords = []
                if keyword:
                    raw_keywords.append(keyword.lower())
                title_words = [w.strip(".,;:?!()\"'").lower() for w in title.split()]
                for w in title_words:
                    if len(w) > 4 and w not in ["about", "their", "there", "would", "could", "should", "using", "based", "through", "under", "between"]:
                        raw_keywords.append(w)
                
                # Deduplicate keywords
                unique_kws = []
                for k in raw_keywords:
                    if k not in unique_kws:
                        unique_kws.append(k)
                keywords = ";".join(unique_kws[:8])

                # Determine department
                is_ed = False
                title_lower = title.lower()
                keyword_lower = keyword.lower()
                for kw in education_keywords:
                    if kw in title_lower or kw in keyword_lower:
                        is_machine_learning = "machine learning" in title_lower or "machine learning" in keyword_lower
                        is_deep_learning = "deep learning" in title_lower or "deep learning" in keyword_lower
                        is_learning_alg = "learning algorithm" in title_lower or "learning algorithm" in keyword_lower
                        is_learning_model = "learning model" in title_lower or "learning model" in keyword_lower
                        is_learning_framework = "learning framework" in title_lower or "learning framework" in keyword_lower
                        is_learning_method = "learning method" in title_lower or "learning method" in keyword_lower
                        is_learning_approach = "learning approach" in title_lower or "learning approach" in keyword_lower
                        is_learning_rule = "learning rule" in title_lower or "learning rule" in keyword_lower
                        is_learning_system = "learning system" in title_lower or "learning system" in keyword_lower
                        is_federated_learning = "federated" in title_lower or "federated" in keyword_lower
                        is_transfer_learning = "transfer learning" in title_lower or "transfer learning" in keyword_lower
                        is_reinforcement = "reinforcement" in title_lower or "reinforcement" in keyword_lower
                        is_self_supervised = "supervised" in title_lower or "supervised" in keyword_lower
                        is_meta_learning = "meta-learning" in title_lower or "meta-learning" in keyword_lower
                        is_active_learning = "active learning" in title_lower or "active learning" in keyword_lower
                        
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
                dept = "Education" if is_ed else "Information Technology"

                thesis = Thesis(
                    title=title,
                    abstract=abstract,
                    authors=authors,
                    keywords=keywords,
                    year=year,
                    department=dept,
                    status=ThesisStatus.APPROVED
                )
                session.add(thesis)
                await session.flush() # Generate ID

                # Index in vector store (ChromaDB or FAISS)
                vector_id = await rag_pipeline.index_thesis(
                    thesis_id=thesis.id,
                    title=thesis.title,
                    abstract=thesis.abstract or "",
                    authors=thesis.authors or "",
                    keywords=thesis.keywords or "",
                    year=thesis.year,
                    department=thesis.department
                )

                thesis.vector_id = vector_id
                count += 1

            await session.commit()
            logger.info(f"Successfully seeded {count} theses from CSV and indexed them in vector store.")
        except Exception as e:
            await session.rollback()
            logger.error(f"Failed to seed theses: {e}", exc_info=True)
