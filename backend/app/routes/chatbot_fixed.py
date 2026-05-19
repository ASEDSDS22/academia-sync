"""
AcademiaSync - Chatbot Routes (RAG-powered conversational AI)
"""

from fastapi import APIRouter, Depends, Request
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from slowapi import Limiter
from slowapi.util import get_remote_address
from datetime import datetime, timezone

from typing import Optional
from app.core.database import get_db
from app.core.security import get_current_user, get_current_user_optional
from app.models.user import User, ChatSession
from app.schemas.schemas import ChatRequest, ChatResponse, ThesisOut
from app.services.rag_service import rag_pipeline

router = APIRouter()
limiter = Limiter(key_func=get_remote_address)


@router.post("/chat", response_model=ChatResponse)
@limiter.limit("20/minute")
async def chat(
    request: Request,
    payload: ChatRequest,
    db: AsyncSession = Depends(get_db),
    current_user: Optional[User] = Depends(get_current_user_optional),
):
    """RAG-powered chat, filtered by dept."""
    if current_user:
        # Load or create session for authenticated user
        session = None
        if payload.session_id:
            result = await db.execute(
                select(ChatSession).where(ChatSession.id == payload.session_id)
            )
            session = result.scalar_one_or_none()
        
        if not session:
            session = ChatSession(user_id=current_user.id, history=[])
            db.add(session)
            await db.flush()

        history = session.history or []
        filters = {"department": current_user.department} if current_user.department else None
        reply, sources = await rag_pipeline.chat(
            payload.message, 
            history, 
            filters=filters
        )

        # Append to history
        history.append({"role": "user", "content": payload.message})
        history.append({"role": "assistant", "content": reply})
        session.history = history
        session.updated_at = datetime.now(timezone.utc)
        if not session.title or session.title == "New Chat":
            session.title = payload.message[:60]
        await db.commit()
        session_id = session.id
    else:
        # Guest user: build chat history array from payload
        history_list = []
        for h in payload.history:
            history_list.append({"role": h.role, "content": h.content})
        
        reply, sources = await rag_pipeline.chat(
            payload.message, 
            history_list, 
            filters=None
        )
        session_id = -1

    source_theses = []
    from app.models.user import Thesis
    for s in sources[:3]:
        result = await db.execute(select(Thesis).where(Thesis.id == s.thesis_id))
        t = result.scalar_one_or_none()
        if t:
            source_theses.append(ThesisOut.model_validate(t))

    return ChatResponse(
        reply=reply,
        session_id=session_id,
        sources=source_theses,
    )


@router.get("/sessions")
async def list_sessions(
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    result = await db.execute(
        select(ChatSession).where(ChatSession.user_id == current_user.id)
        .order_by(ChatSession.updated_at.desc()).limit(20)
    )
    sessions = result.scalars().all()
    return [{"id": s.id, "title": s.title, "updated_at": s.updated_at} for s in sessions]

