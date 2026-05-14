"""
AcademiaSync - Librarian Routes (Thesis CRUD, Review Queue)
"""

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from typing import List

from app.core.database import get_db
from app.core.security import require_librarian, get_current_user
from app.models.user import User, Thesis, ThesisStatus
from app.schemas.schemas import ThesisOut, ThesisCreate, ThesisUpdate
from app.services.rag_service import rag_pipeline

router = APIRouter()


@router.get("/queue", response_model=List[ThesisOut])
async def review_queue(
    db: AsyncSession = Depends(get_db),
    _: User = Depends(require_librarian),
):
    """Pending theses awaiting approval."""
    result = await db.execute(
        select(Thesis).where(Thesis.status == ThesisStatus.PENDING)
        .order_by(Thesis.created_at.desc())
    )
    return result.scalars().all()


@router.post("/theses", response_model=ThesisOut, status_code=201)
async def create_thesis(
    payload: ThesisCreate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(require_librarian),
):
    thesis = Thesis(**payload.model_dump(), uploaded_by=current_user.id, status=ThesisStatus.APPROVED)
    db.add(thesis)
    await db.flush()
    # Index in vector store
    vector_id = await rag_pipeline.index_thesis(
        thesis_id  = thesis.id,
        title      = thesis.title,
        abstract   = thesis.abstract or "",
        authors    = thesis.authors or "",
        keywords   = thesis.keywords or "",
        year       = thesis.year,
        department = thesis.department,
    )
    thesis.vector_id = vector_id
    await db.commit()
    await db.refresh(thesis)
    return thesis


@router.patch("/theses/{thesis_id}", response_model=ThesisOut)
async def update_thesis(
    thesis_id: int,
    payload: ThesisUpdate,
    db: AsyncSession = Depends(get_db),
    _: User = Depends(require_librarian),
):
    thesis = await db.get(Thesis, thesis_id)
    if not thesis:
        raise HTTPException(status_code=404, detail="Thesis not found.")
    for field, val in payload.model_dump(exclude_none=True).items():
        setattr(thesis, field, val)
    # Re-index if content changed
    if any(k in payload.model_dump(exclude_none=True) for k in ["title", "abstract", "keywords"]):
        if thesis.vector_id:
            await rag_pipeline.delete_thesis(thesis.vector_id)
        vector_id = await rag_pipeline.index_thesis(
            thesis_id  = thesis.id,
            title      = thesis.title,
            abstract   = thesis.abstract or "",
            authors    = thesis.authors or "",
            keywords   = thesis.keywords or "",
            year       = thesis.year,
            department = thesis.department,
        )
        thesis.vector_id = vector_id
    await db.commit()
    await db.refresh(thesis)
    return thesis


@router.delete("/theses/{thesis_id}")
async def delete_thesis(
    thesis_id: int,
    db: AsyncSession = Depends(get_db),
    _: User = Depends(require_librarian),
):
    thesis = await db.get(Thesis, thesis_id)
    if not thesis:
        raise HTTPException(status_code=404, detail="Thesis not found.")
    if thesis.vector_id:
        await rag_pipeline.delete_thesis(thesis.vector_id)
    await db.delete(thesis)
    await db.commit()
    return {"detail": "Thesis deleted."}


@router.post("/theses/{thesis_id}/approve", response_model=ThesisOut)
async def approve_thesis(
    thesis_id: int,
    db: AsyncSession = Depends(get_db),
    _: User = Depends(require_librarian),
):
    thesis = await db.get(Thesis, thesis_id)
    if not thesis:
        raise HTTPException(status_code=404, detail="Thesis not found.")
    thesis.status = ThesisStatus.APPROVED
    # Index if not yet indexed
    if not thesis.vector_id:
        vector_id = await rag_pipeline.index_thesis(
            thesis_id  = thesis.id,
            title      = thesis.title,
            abstract   = thesis.abstract or "",
            authors    = thesis.authors or "",
            keywords   = thesis.keywords or "",
            year       = thesis.year,
            department = thesis.department,
        )
        thesis.vector_id = vector_id
    await db.commit()
    await db.refresh(thesis)
    return thesis
