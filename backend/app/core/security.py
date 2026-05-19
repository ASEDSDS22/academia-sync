"""
AcademiaSync - JWT & Password Security Utilities
"""

from datetime import datetime, timedelta, timezone
from typing import Optional, Any
from jose import JWTError, jwt
from passlib.context import CryptContext
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from app.core.config import settings
from app.core.database import get_db
from app.models.user import User, UserRole

# ── Password Hashing ─────────────────────────────────────────────────────────
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
security = HTTPBearer()


def hash_password(password: str) -> str:
    return pwd_context.hash(password)


def verify_password(plain: str, hashed: str) -> bool:
    return pwd_context.verify(plain, hashed)


# ── JWT Tokens ────────────────────────────────────────────────────────────────
def create_access_token(data: dict, expires_delta: Optional[timedelta] = None) -> str:
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + (
        expires_delta or timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    )
    to_encode.update({"exp": expire, "type": "access"})
    return jwt.encode(to_encode, settings.JWT_SECRET_KEY, algorithm=settings.JWT_ALGORITHM)


def create_refresh_token(data: dict) -> str:
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + timedelta(days=settings.REFRESH_TOKEN_EXPIRE_DAYS)
    to_encode.update({"exp": expire, "type": "refresh"})
    return jwt.encode(to_encode, settings.JWT_SECRET_KEY, algorithm=settings.JWT_ALGORITHM)


def decode_token(token: str) -> dict[str, Any]:
    try:
        payload = jwt.decode(token, settings.JWT_SECRET_KEY, algorithms=[settings.JWT_ALGORITHM])
        return payload
    except JWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or expired token",
            headers={"WWW-Authenticate": "Bearer"},
        )


# ── Current User Dependencies ─────────────────────────────────────────────────
security_optional = HTTPBearer(auto_error=False)


async def get_user_department_optional(
    credentials: HTTPAuthorizationCredentials = Depends(security_optional),
) -> Optional[str]:
    """
    Optional: Get user's department from JWT payload.
    Returns None if no token is provided.
    """
    if not credentials:
        return None
    try:
        payload = decode_token(credentials.credentials)
        dept = payload.get("department")
        if dept in ("IT", "EDUC"):
            return dept
    except Exception:
        pass
    return None


async def get_current_user_optional(
    credentials: HTTPAuthorizationCredentials = Depends(security_optional),
    db: AsyncSession = Depends(get_db),
) -> Optional[User]:
    """
    Optional: Get current logged-in user from JWT payload.
    Returns None if no token is provided or invalid.
    """
    if not credentials:
        return None
    try:
        payload = decode_token(credentials.credentials)
        user_id = payload.get("sub") or payload.get("id")
        if not user_id:
            return None
        result = await db.execute(select(User).where(User.id == int(user_id)))
        user = result.scalar_one_or_none()
        if user and user.is_active:
            return user
    except Exception:
        pass
    return None


async def get_user_department(
    credentials: HTTPAuthorizationCredentials = Depends(security),
) -> str:
    """
    Get user's department from JWT payload (legacy: IT/EDUC).
    """
    payload = decode_token(credentials.credentials)
    dept = payload.get("department")
    if not dept or dept not in ("IT", "EDUC"):
        raise HTTPException(status_code=400, detail="Invalid department in token")
    return dept


async def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db: AsyncSession = Depends(get_db),
) -> User:
    payload = decode_token(credentials.credentials)
    user_id: int = payload.get("sub")
    if not user_id:
        raise HTTPException(status_code=401, detail="Invalid token payload")

    result = await db.execute(select(User).where(User.id == int(user_id)))
    user = result.scalar_one_or_none()
    if not user or not user.is_active:
        raise HTTPException(status_code=401, detail="User not found or inactive")
    return user


def require_role(*roles: UserRole):
    """Dependency factory: ensures the current user has one of the given roles."""
    async def role_checker(current_user: User = Depends(get_current_user)) -> User:
        if current_user.role not in roles:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail=f"Access denied. Required roles: {[r.value for r in roles]}",
            )
        return current_user
    return role_checker


# Convenience shortcuts
require_admin      = require_role(UserRole.ADMIN)
require_librarian  = require_role(UserRole.ADMIN, UserRole.LIBRARIAN)
require_any        = require_role(UserRole.ADMIN, UserRole.LIBRARIAN, UserRole.USER)

