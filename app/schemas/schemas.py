"""
AcademiaSync - Pydantic Schemas (Request/Response Validation)
"""

from pydantic import BaseModel, EmailStr, Field, field_validator
from typing import Optional, List, Any
from datetime import datetime
from app.models.user import UserRole, ThesisStatus


# ── Auth ──────────────────────────────────────────────────────────────────────
class UserRegister(BaseModel):
    email:     EmailStr
    username:  str      = Field(..., min_length=3, max_length=50, pattern=r"^[a-zA-Z0-9_]+$")
    full_name: str      = Field(..., min_length=2, max_length=255)
    password:  str      = Field(..., min_length=8, max_length=128)

    @field_validator("password")
    @classmethod
    def strong_password(cls, v: str) -> str:
        if not any(c.isupper() for c in v):
            raise ValueError("Password must contain at least one uppercase letter")
        if not any(c.isdigit() for c in v):
            raise ValueError("Password must contain at least one digit")
        return v


class UserLogin(BaseModel):
    email:    EmailStr
    password: str


class TokenResponse(BaseModel):
    access_token:  str
    refresh_token: str
    token_type:    str = "bearer"
    role:          UserRole


class UserOut(BaseModel):
    id:         int
    email:      str
    username:   str
    full_name:  str
    role:       UserRole
    is_active:  bool
    created_at: datetime

    model_config = {"from_attributes": True}


class UserUpdate(BaseModel):
    full_name: Optional[str] = None
    is_active: Optional[bool] = None
    role:      Optional[UserRole] = None


# ── Thesis ────────────────────────────────────────────────────────────────────
class ThesisOut(BaseModel):
    id:         int
    title:      str
    abstract:   Optional[str]
    authors:    Optional[str]
    keywords:   Optional[str]
    year:       Optional[int]
    department: Optional[str]
    status:     ThesisStatus
    created_at: datetime

    model_config = {"from_attributes": True}


class ThesisCreate(BaseModel):
    title:      str = Field(..., min_length=5, max_length=500)
    abstract:   Optional[str] = None
    authors:    Optional[str] = None
    keywords:   Optional[str] = None
    year:       Optional[int] = Field(None, ge=1900, le=2100)
    department: Optional[str] = None


class ThesisUpdate(BaseModel):
    title:      Optional[str] = None
    abstract:   Optional[str] = None
    authors:    Optional[str] = None
    keywords:   Optional[str] = None
    year:       Optional[int] = None
    department: Optional[str] = None
    status:     Optional[ThesisStatus] = None


# ── RAG / Search ──────────────────────────────────────────────────────────────
class SearchQuery(BaseModel):
    query:      str  = Field(..., min_length=3, max_length=500)
    top_k:      int  = Field(5, ge=1, le=20)
    department: Optional[str] = None
    year_from:  Optional[int] = None
    year_to:    Optional[int] = None


class SearchResult(BaseModel):
    thesis:          ThesisOut
    similarity_score: float
    snippet:         Optional[str]


class SearchResponse(BaseModel):
    query:   str
    results: List[SearchResult]
    total:   int


class ResearchGapRequest(BaseModel):
    topic:       str = Field(..., min_length=5, max_length=300)
    department:  Optional[str] = None


class ResearchGapResponse(BaseModel):
    topic:           str
    existing_works:  List[ThesisOut]
    identified_gaps: List[str]
    suggestions:     List[str]
    analysis:        str


class TitleSuggestionRequest(BaseModel):
    topic:      str = Field(..., min_length=5, max_length=300)
    department: Optional[str] = None
    keywords:   Optional[List[str]] = None
    count:      int = Field(5, ge=1, le=10)


class TitleSuggestionResponse(BaseModel):
    topic:       str
    suggestions: List[str]
    rationale:   str


# ── Chatbot ───────────────────────────────────────────────────────────────────
class ChatMessage(BaseModel):
    role:    str = Field(..., pattern=r"^(user|assistant)$")
    content: str = Field(..., min_length=1, max_length=4000)


class ChatRequest(BaseModel):
    message:    str              = Field(..., min_length=1, max_length=2000)
    session_id: Optional[int]   = None
    history:    List[ChatMessage] = []


class ChatResponse(BaseModel):
    reply:       str
    session_id:  int
    sources:     List[ThesisOut] = []
    tokens_used: Optional[int]   = None


# ── Data Ingestion ────────────────────────────────────────────────────────────
class IngestionStatusResponse(BaseModel):
    upload_id:     int
    filename:      str
    status:        str
    total_records: int
    processed:     int
    failed:        int
    error_log:     Optional[str]
    created_at:    datetime

    model_config = {"from_attributes": True}


# ── Pagination ────────────────────────────────────────────────────────────────
class PaginatedResponse(BaseModel):
    items:   List[Any]
    total:   int
    page:    int
    size:    int
    pages:   int
