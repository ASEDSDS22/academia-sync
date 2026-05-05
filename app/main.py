"""
AcademiaSync - RAG-Based Semantic Thesis Retrieval System
Main FastAPI Application Entry Point
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
import logging

from app.core.config import settings
from app.core.database import engine, Base
from app.routes import auth, rag, chatbot_fixed as chatbot, admin, librarian, data_ingestion

# ── Logging ─────────────────────────────────────────────────────────────────
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
)
logger = logging.getLogger("academia_sync")

# ── Rate Limiter ─────────────────────────────────────────────────────────────
limiter = Limiter(key_func=get_remote_address)

# ── App Init ─────────────────────────────────────────────────────────────────
app = FastAPI(
    title="AcademiaSync API",
    description="RAG-Based Semantic Thesis Retrieval System",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# ── CORS ──────────────────────────────────────────────────────────────────────
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Trusted Hosts ─────────────────────────────────────────────────────────────
app.add_middleware(
    TrustedHostMiddleware,
    allowed_hosts=settings.ALLOWED_HOSTS,
)

# ── Database Init ─────────────────────────────────────────────────────────────
@app.on_event("startup")
async def startup():
    logger.info("Starting AcademiaSync API...")
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    logger.info("Database tables initialized.")

@app.on_event("shutdown")
async def shutdown():
    logger.info("Shutting down AcademiaSync API.")

# ── Routes ────────────────────────────────────────────────────────────────────
app.include_router(auth.router,            prefix="/auth",           tags=["Authentication"])
app.include_router(rag.router,             prefix="/rag",            tags=["RAG & Search"])
app.include_router(chatbot.router,         prefix="/chatbot",        tags=["AI Chatbot"])
app.include_router(admin.router,           prefix="/admin",          tags=["Admin"])
app.include_router(librarian.router,       prefix="/librarian",      tags=["Librarian"])
app.include_router(data_ingestion.router,  prefix="/data-ingestion", tags=["Data Ingestion"])

@app.get("/health", tags=["System"])
async def health_check():
    return {"status": "ok", "service": "AcademiaSync"}
