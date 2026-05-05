"""
AcademiaSync - RAG Routes (Search, Research Gaps, Title Suggestions)
"""

from fastapi import APIRouter, Depends, HTTPException, Request
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from slowapi import Limiter
from slowapi.util import get_remote_address
from typing import List

from app.core.database import get_db
from app.core.security import get_user_department, get_current_user
from app.models.user import User, Thesis
from app.schemas.schemas import (
    SearchQuery, SearchResponse, SearchResult, ThesisOut,
    ResearchGapRequest, ResearchGapResponse,
    TitleSuggestionRequest, TitleSuggestionResponse,
)
from app.services.rag_service import rag_pipeline

router = APIRouter()
limiter = Limiter(key_func=get_remote_address)


@router.post("/search", response_model=SearchResponse)
@limiter.limit("30/minute")
async def semantic_search(
    request: Request,
    payload: SearchQuery,
    db: AsyncSession = Depends(get_db),
    user_dept: str = Depends(get_user_department),
):
    """
    Semantic search auto-filtered by user's department (IT/EDUC).
    Payload 'department=ALL' to override.
    """
    filters = {"department": user_dept}
    if payload.department and payload.department.upper() == "ALL":
        filters = None
    elif payload.department:
        filters["department"] = payload.department

    retrieved = await rag_pipeline.retrieve(
        query   = payload.query,
        top_k   = payload.top_k,
        filters = filters or None,
    )

    # Load full DB records for response
    results = []
    for r in retrieved:
        result = await db.execute(select(Thesis).where(Thesis.id == r.thesis_id))
        thesis_obj = result.scalar_one_or_none()
        if thesis_obj:
            results.append(SearchResult(
                thesis            = ThesisOut.model_validate(thesis_obj),
                similarity_score  = r.similarity_score,
                snippet           = r.snippet,
            ))

    return SearchResponse(query=payload.query, results=results, total=len(results))


@router.post("/research-gaps", response_model=ResearchGapResponse)
@limiter.limit("10/minute")
async def find_research_gaps(
    request: Request,
    payload: ResearchGapRequest,
    db: AsyncSession = Depends(get_db),
    user_dept: str = Depends(get_user_department),
):
    """Analyze existing theses filtered by dept and identify research gaps."""
    retrieved = await rag_pipeline.retrieve(payload.topic, top_k=8, filters={"department": user_dept})
    if not retrieved:
        raise HTTPException(status_code=404, detail="No relevant theses found for your department.")

    gap_data = await rag_pipeline.generate_research_gaps(payload.topic, retrieved)

    existing = []
    for r in retrieved[:5]:
        result = await db.execute(select(Thesis).where(Thesis.id == r.thesis_id))
        t = result.scalar_one_or_none()
        if t:
            existing.append(ThesisOut.model_validate(t))

    return ResearchGapResponse(
        topic            = payload.topic,
        existing_works   = existing,
        identified_gaps  = gap_data.get("gaps", []),
        suggestions      = gap_data.get("suggestions", []),
        analysis         = gap_data.get("analysis", ""),
    )


@router.post("/suggest-titles", response_model=TitleSuggestionResponse)
@limiter.limit("10/minute")
async def suggest_titles(
    request: Request,
    payload: TitleSuggestionRequest,
    user_dept: str = Depends(get_user_department),
):
    """Generate titles based on dept-filtered existing works."""
    retrieved = await rag_pipeline.retrieve(payload.topic, top_k=6, filters={"department": user_dept})
    title_data = await rag_pipeline.suggest_titles(
        topic    = payload.topic,
        results  = retrieved,
        count    = payload.count,
        keywords = payload.keywords,
    )
    return TitleSuggestionResponse(
        topic       = payload.topic,
        suggestions = title_data.get("titles", []),
        rationale   = title_data.get("rationale", ""),
    )


@router.get("/theses", response_model=List[ThesisOut])
async def list_theses(
    page: int = 1,
    size: int = 20,
    department: str = None,
    year: int = None,
    db: AsyncSession = Depends(get_db),
    user_dept: str = Depends(get_user_department),
):
    """List approved theses, auto-filtered by user dept unless override."""
    from app.models.user import ThesisStatus
    query = select(Thesis).where(Thesis.status == ThesisStatus.APPROVED)
    
    dept_filter = department or user_dept
    if dept_filter:
        query = query.where(Thesis.department == dept_filter)
    if year:
        query = query.where(Thesis.year == year)
    
    query = query.offset((page - 1) * size).limit(size)
    result = await db.execute(query)
    return result.scalars().all()

