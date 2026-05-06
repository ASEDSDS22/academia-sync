"""
AcademiaSync - Core Configuration
Loads all settings from environment variables via pydantic-settings.
"""

from pydantic_settings import BaseSettings
from typing import List
import secrets


class Settings(BaseSettings):
    # ── App ──────────────────────────────────────────────────────────────────
    APP_NAME: str = "AcademiaSync"
    DEBUG: bool = False
    SECRET_KEY: str = secrets.token_urlsafe(32)

    # ── Database ─────────────────────────────────────────────────────────────
    DATABASE_URL: str = "sqlite+aiosqlite:///./academia_sync.db"
    # For PostgreSQL: postgresql+asyncpg://user:pass@localhost/academia_sync

    # ── JWT ──────────────────────────────────────────────────────────────────
    JWT_SECRET_KEY: str = secrets.token_urlsafe(32)
    JWT_ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60
    REFRESH_TOKEN_EXPIRE_DAYS: int = 7

    # ── CORS / Security ───────────────────────────────────────────────────────
    ALLOWED_ORIGINS: List[str] = ["http://localhost:3000", "http://localhost:5173"]
    ALLOWED_HOSTS: List[str] = ["localhost", "127.0.0.1", "*"]

    # ── AI / LLM ─────────────────────────────────────────────────────────────
    LLM_PROVIDER: str = "openai"          # "openai" | "anthropic" | "ollama"
    OPENAI_API_KEY: str = ""
    ANTHROPIC_API_KEY: str = ""
    OLLAMA_BASE_URL: str = "http://localhost:11434"
    LLM_MODEL: str = "gpt-4o-mini"

    # ── Embeddings ────────────────────────────────────────────────────────────
    EMBEDDING_MODEL: str = "sentence-transformers/all-MiniLM-L6-v2"
    # Options: "text-embedding-ada-002" (OpenAI), "all-mpnet-base-v2" (local)

    # ── Vector Store ──────────────────────────────────────────────────────────
    VECTOR_STORE_TYPE: str = "chroma"     # "chroma" | "faiss"
    CHROMA_PERSIST_DIR: str = "./vector_store/chroma"
    FAISS_INDEX_PATH: str = "./vector_store/faiss.index"

    # ── File Upload ───────────────────────────────────────────────────────────
    UPLOAD_DIR: str = "./data/uploads"
    MAX_FILE_SIZE_MB: int = 50
    ALLOWED_EXTENSIONS: List[str] = ["csv", "xlsx", "xls"]

    # ── Rate Limiting ─────────────────────────────────────────────────────────
    RATE_LIMIT_PER_MINUTE: int = 60
    AI_RATE_LIMIT_PER_MINUTE: int = 20

    # ── RAG Pipeline ─────────────────────────────────────────────────────────
    TOP_K_RESULTS: int = 5
    CHUNK_SIZE: int = 512
    CHUNK_OVERLAP: int = 64
    MIN_SIMILARITY_SCORE: float = 0.3

    class Config:
        env_file = ".env"
        case_sensitive = True


settings = Settings()
