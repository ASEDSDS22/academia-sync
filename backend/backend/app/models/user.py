"""
AcademiaSync - SQLAlchemy ORM Models
"""

from datetime import datetime, timezone
from enum import Enum as PyEnum
from sqlalchemy import (
    String, Text, Integer, Boolean, DateTime,
    Enum, ForeignKey, Float, JSON
)
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.core.database import Base


# ── Enums ─────────────────────────────────────────────────────────────────────
class UserRole(str, PyEnum):
    ADMIN     = "admin"
    LIBRARIAN = "librarian"
    USER      = "user"


class ThesisStatus(str, PyEnum):
    PENDING  = "pending"
    APPROVED = "approved"
    REJECTED = "rejected"


# ── User ──────────────────────────────────────────────────────────────────────
class User(Base):
    __tablename__ = "users"

    id:         Mapped[int]      = mapped_column(Integer, primary_key=True, index=True)
    email:      Mapped[str]      = mapped_column(String(255), unique=True, index=True, nullable=False)
    username:   Mapped[str]      = mapped_column(String(100), unique=True, index=True, nullable=False)
    full_name:  Mapped[str]      = mapped_column(String(255), nullable=False)
    hashed_pw:  Mapped[str]      = mapped_column(String(255), nullable=False)
    role:       Mapped[UserRole] = mapped_column(Enum(UserRole), default=UserRole.USER)
    is_active:  Mapped[bool]     = mapped_column(Boolean, default=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))

    audit_logs: Mapped[list["AuditLog"]] = relationship("AuditLog", back_populates="user")


# ── Thesis ────────────────────────────────────────────────────────────────────
class Thesis(Base):
    __tablename__ = "theses"

    id:           Mapped[int]          = mapped_column(Integer, primary_key=True, index=True)
    title:        Mapped[str]          = mapped_column(String(500), nullable=False, index=True)
    abstract:     Mapped[str | None]   = mapped_column(Text)
    authors:      Mapped[str | None]   = mapped_column(String(500))
    keywords:     Mapped[str | None]   = mapped_column(Text)
    year:         Mapped[int | None]   = mapped_column(Integer, index=True)
    department:   Mapped[str | None]   = mapped_column(String(255), index=True)
    status:       Mapped[ThesisStatus] = mapped_column(Enum(ThesisStatus), default=ThesisStatus.PENDING)
    vector_id:    Mapped[str | None]   = mapped_column(String(255), unique=True)  # ChromaDB/FAISS ID
    source_file:  Mapped[str | None]   = mapped_column(String(500))
    uploaded_by:  Mapped[int | None]   = mapped_column(Integer, ForeignKey("users.id"))
    created_at:   Mapped[datetime]     = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))


# ── Dataset Upload Log ────────────────────────────────────────────────────────
class DatasetUpload(Base):
    __tablename__ = "dataset_uploads"

    id:             Mapped[int]      = mapped_column(Integer, primary_key=True, index=True)
    filename:       Mapped[str]      = mapped_column(String(500))
    uploaded_by:    Mapped[int]      = mapped_column(Integer, ForeignKey("users.id"))
    total_records:  Mapped[int]      = mapped_column(Integer, default=0)
    processed:      Mapped[int]      = mapped_column(Integer, default=0)
    failed:         Mapped[int]      = mapped_column(Integer, default=0)
    status:         Mapped[str]      = mapped_column(String(50), default="processing")
    error_log:      Mapped[str|None] = mapped_column(Text)
    created_at:     Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))


# ── Chat Session ──────────────────────────────────────────────────────────────
class ChatSession(Base):
    __tablename__ = "chat_sessions"

    id:         Mapped[int]      = mapped_column(Integer, primary_key=True, index=True)
    user_id:    Mapped[int]      = mapped_column(Integer, ForeignKey("users.id"))
    title:      Mapped[str]      = mapped_column(String(255), default="New Chat")
    history:    Mapped[dict]     = mapped_column(JSON, default=list)  # [{role, content}]
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))


# ── Audit Log ─────────────────────────────────────────────────────────────────
class AuditLog(Base):
    __tablename__ = "audit_logs"

    id:         Mapped[int]      = mapped_column(Integer, primary_key=True, index=True)
    user_id:    Mapped[int|None] = mapped_column(Integer, ForeignKey("users.id"))
    action:     Mapped[str]      = mapped_column(String(255))
    resource:   Mapped[str|None] = mapped_column(String(255))
    details:    Mapped[str|None] = mapped_column(Text)
    ip_address: Mapped[str|None] = mapped_column(String(50))
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))

    user: Mapped["User"] = relationship("User", back_populates="audit_logs")
