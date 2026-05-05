"""
Auth routes - FastAPI Migration
POST /auth/login    — returns JWT token (supports legacy student_id)
POST /auth/register — create new student account (legacy fields)
GET  /auth/me       — current user info
"""

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import text
from sqlalchemy.ext.asyncio import AsyncSession
from pydantic import BaseModel, Field


from app.core.database import get_db
from app.core.security import (
    create_access_token, verify_password, get_current_user
)
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
from app.core.config import settings
from app.models.user import User

router = APIRouter(prefix="/auth", tags=["Authentication"])

# ── Legacy Schemas ────────────────────────────────────────────────────────────
class LegacyLogin(BaseModel):
    student_id: str = Field(..., min_length=1)
    password: str = Field(..., min_length=1)

class LegacyRegister(BaseModel):
    student_id: str = Field(..., min_length=1)
    name: str = Field(..., min_length=1)
    password: str = Field(..., min_length=6)
    department: str = Field(..., min_length=1)

class LegacyUserOut(BaseModel):
    id: int
    student_id: str
    name: str
    department: str
    role: str

    model_config = {"from_attributes": True}

# ── Routes ────────────────────────────────────────────────────────────────────
@router.post("/login")
async def login(
    form_data: LegacyLogin,
    db: AsyncSession = Depends(get_db)
):
    # Legacy SQL query for student_id
    result = await db.execute(
        text("SELECT * FROM users WHERE student_id = :student_id"),
        {"student_id": form_data.student_id}
    )
    user_row = result.fetchone()
    
    if not user_row:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    # Verify password (assumes legacy 'password' field, hashed with bcrypt)
    if not verify_password(form_data.password, user_row.password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    # Legacy fields (no email/username mapping)
    identity = {
        "id": user_row.id,
        "student_id": user_row.student_id,
        "department": getattr(user_row, 'department', 'UNKNOWN'),
        "role": getattr(user_row, 'role', 'user'),
    }
    
    token = create_access_token(identity)
    
    return {
        "token": token,
        "user": {
            "id": user_row.id,
            "student_id": user_row.student_id,
            "name": getattr(user_row, 'name', 'Unknown'),
            "department": getattr(user_row, 'department', 'UNKNOWN'),
            "role": getattr(user_row, 'role', 'user'),
        }
    }

@router.post("/register", status_code=201)
async def register(
    form_data: LegacyRegister,
    db: AsyncSession = Depends(get_db)
):
    if form_data.department not in ("IT", "EDUC"):
        raise HTTPException(status_code=400, detail="department must be IT or EDUC")
    
    hashed_password = pwd_context.hash(form_data.password)
    
    try:
        result = await db.execute(
            text("""
                INSERT INTO users (student_id, name, password, department, role) 
                VALUES (:student_id, :name, :hashed_password, :department, 'user')
            """),
            {
                "student_id": form_data.student_id,
                "name": form_data.name,
                "hashed_password": hashed_password,
                "department": form_data.department,
            }
        )
        await db.commit()
        
        # Fetch created user
        user_id = result.lastrowid
        user_result = await db.execute(
            text("SELECT * FROM users WHERE id = :id"),
            {"id": user_id}
        )
        user_row = user_result.fetchone()
        
    except Exception as e:
        await db.rollback()
        if "UNIQUE" in str(e):
            raise HTTPException(status_code=409, detail="student_id already exists")
        raise HTTPException(status_code=500, detail="Could not create account")
    
    identity = {
        "id": user_row.id,
        "student_id": user_row.student_id,
        "department": user_row.department,
        "role": user_row.role,
    }
    token = create_access_token(identity)
    
    return {
        "message": "Account created successfully",
        "token": token,
        "user": {
            "id": user_row.id,
            "student_id": user_row.student_id,
            "name": user_row.name,
            "department": user_row.department,
            "role": user_row.role,
        }
    }

@router.get("/me")
async def me(
    current_user: User = Depends(get_current_user)
):
    # Returns new User model info; may not match legacy exactly
    return {
        "id": current_user.id,
        "email": current_user.email,
        "username": current_user.username,
        "full_name": current_user.full_name,
        "department": getattr(current_user, 'department', None),  # Legacy compat
        "role": current_user.role,
        "is_active": current_user.is_active,
    }

