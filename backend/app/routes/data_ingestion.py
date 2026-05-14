"""
AcademiaSync - Data Ingestion Routes (CSV/Excel Upload)
"""

import os
import asyncio
from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, BackgroundTasks
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from typing import List

from app.core.database import get_db, AsyncSessionLocal
from app.core.security import require_librarian
from app.core.config import settings
from app.models.user import User, DatasetUpload
from app.schemas.schemas import IngestionStatusResponse
from app.services.ingestion_service import data_ingestion_service
from app.services.rag_service import rag_pipeline

router = APIRouter()


async def _run_ingestion(filepath: str, upload_id: int, user_id: int):
    """Background task: ingest file in a separate DB session."""
    async with AsyncSessionLocal() as db:
        await data_ingestion_service.ingest_file(
            filepath    = filepath,
            upload_id   = upload_id,
            uploaded_by = user_id,
            db_session  = db,
            rag_pipeline= rag_pipeline,
        )


@router.post("/upload", response_model=IngestionStatusResponse, status_code=202)
async def upload_dataset(
    background_tasks: BackgroundTasks,
    file: UploadFile = File(...),
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(require_librarian),
):
    """Upload a CSV or Excel thesis dataset. Processing runs in the background."""
    # Validate file
    file_bytes = await file.read()
    try:
        data_ingestion_service.validate_file(file.filename, len(file_bytes))
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

    # Save to disk
    os.makedirs(settings.UPLOAD_DIR, exist_ok=True)
    safe_name  = f"{current_user.id}_{file.filename}"
    filepath   = os.path.join(settings.UPLOAD_DIR, safe_name)
    with open(filepath, "wb") as f:
        f.write(file_bytes)

    # Create upload record
    upload = DatasetUpload(
        filename    = file.filename,
        uploaded_by = current_user.id,
        status      = "processing",
    )
    db.add(upload)
    await db.commit()
    await db.refresh(upload)

    # Kick off background ingestion
    background_tasks.add_task(_run_ingestion, filepath, upload.id, current_user.id)

    return upload


@router.get("/status/{upload_id}", response_model=IngestionStatusResponse)
async def ingestion_status(
    upload_id: int,
    db: AsyncSession = Depends(get_db),
    _: User = Depends(require_librarian),
):
    upload = await db.get(DatasetUpload, upload_id)
    if not upload:
        raise HTTPException(status_code=404, detail="Upload not found.")
    return upload


@router.get("/history", response_model=List[IngestionStatusResponse])
async def ingestion_history(
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(require_librarian),
):
    result = await db.execute(
        select(DatasetUpload)
        .where(DatasetUpload.uploaded_by == current_user.id)
        .order_by(DatasetUpload.created_at.desc())
        .limit(20)
    )
    return result.scalars().all()
