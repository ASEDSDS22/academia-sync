"""
AcademiaSync - Admin Routes (User Management, System Stats)
"""

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func
from typing import List

from app.core.database import get_db
from app.core.security import require_admin, get_current_user
from app.models.user import User, Thesis, DatasetUpload, AuditLog
from app.schemas.schemas import UserOut, UserUpdate, ThesisOut

router = APIRouter()


@router.get("/users", response_model=List[UserOut])
async def list_users(
    page: int = 1,
    size: int = 50,
    db: AsyncSession = Depends(get_db),
    _: User = Depends(require_admin),
):
    result = await db.execute(select(User).offset((page - 1) * size).limit(size))
    return result.scalars().all()


@router.patch("/users/{user_id}", response_model=UserOut)
async def update_user(
    user_id: int,
    payload: UserUpdate,
    db: AsyncSession = Depends(get_db),
    _: User = Depends(require_admin),
):
    user = await db.get(User, user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found.")
    for field, val in payload.model_dump(exclude_none=True).items():
        setattr(user, field, val)
    await db.commit()
    await db.refresh(user)
    return user


@router.delete("/users/{user_id}")
async def delete_user(
    user_id: int,
    db: AsyncSession = Depends(get_db),
    current_admin: User = Depends(require_admin),
):
    if user_id == current_admin.id:
        raise HTTPException(status_code=400, detail="Cannot delete yourself.")
    user = await db.get(User, user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found.")
    await db.delete(user)
    await db.commit()
    return {"detail": "User deleted."}


@router.get("/stats")
async def system_stats(
    db: AsyncSession = Depends(get_db),
    _: User = Depends(require_admin),
):
    total_users   = (await db.execute(select(func.count(User.id)))).scalar()
    total_theses  = (await db.execute(select(func.count(Thesis.id)))).scalar()
    total_uploads = (await db.execute(select(func.count(DatasetUpload.id)))).scalar()
    return {
        "total_users":   total_users,
        "total_theses":  total_theses,
        "total_uploads": total_uploads,
    }


@router.get("/audit-logs")
async def audit_logs(
    page: int = 1,
    size: int = 50,
    db: AsyncSession = Depends(get_db),
    _: User = Depends(require_admin),
):
    result = await db.execute(
        select(AuditLog).order_by(AuditLog.created_at.desc())
        .offset((page - 1) * size).limit(size)
    )
    logs = result.scalars().all()
    return [
        {
            "id": l.id, "action": l.action, "resource": l.resource,
            "user_id": l.user_id, "ip_address": l.ip_address, "created_at": l.created_at,
        }
        for l in logs
    ]
