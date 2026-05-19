"""
AcademiaSync - RAG Pipeline Service
Handles embeddings, vector store, retrieval, and LLM generation.
"""

import logging
import uuid
from typing import List, Optional, Tuple
from dataclasses import dataclass

from app.core.config import settings

logger = logging.getLogger(__name__)


@dataclass
class RetrievedThesis:
    thesis_id: int
    title: str
    abstract: str
    authors: str
    keywords: str
    year: Optional[int]
    department: Optional[str]
    similarity_score: float
    snippet: str


class EmbeddingService:
    """
    Pluggable embedding service.
    Supports: SentenceTransformers (local), OpenAI (API).
    """

    def __init__(self):
        self._model = None
        self._provider = settings.LLM_PROVIDER

    def _load_model(self):
        if self._model is None:
            if settings.OPENAI_API_KEY and self._provider == "openai":
                from openai import AsyncOpenAI
                self._model = AsyncOpenAI(api_key=settings.OPENAI_API_KEY)
                logger.info("Using OpenAI embeddings.")
            else:
                from sentence_transformers import SentenceTransformer
                self._model = SentenceTransformer(settings.EMBEDDING_MODEL)
                logger.info(f"Using SentenceTransformer: {settings.EMBEDDING_MODEL}")

    def encode(self, texts: List[str]) -> List[List[float]]:
        """Synchronous encode for batch ingestion."""
        self._load_model()
        if isinstance(self._model, __import__("sentence_transformers").SentenceTransformer):
            embeddings = self._model.encode(texts, show_progress_bar=False)
            return embeddings.tolist()
        raise RuntimeError("Use encode_openai for async OpenAI embeddings.")

    async def encode_async(self, texts: List[str]) -> List[List[float]]:
        """Async encode — OpenAI or local."""
        self._load_model()
        try:
            # Try OpenAI async
            from openai import AsyncOpenAI
            if isinstance(self._model, AsyncOpenAI):
                response = await self._model.embeddings.create(
                    model="text-embedding-3-small",
                    input=texts,
                )
                return [item.embedding for item in response.data]
        except Exception:
            pass
        # Fall back to sync ST (run in threadpool in production)
        return self.encode(texts)


class VectorStoreService:
    """
    Pluggable vector store.
    Supports: ChromaDB (default), FAISS.
    """

    def __init__(self):
        self._store = None
        self._collection = None

    def _init_chroma(self):
        import chromadb
        from chromadb.config import Settings as ChromaSettings
        client = chromadb.PersistentClient(
            path=settings.CHROMA_PERSIST_DIR,
            settings=ChromaSettings(anonymized_telemetry=False),
        )
        self._collection = client.get_or_create_collection(
            name="theses",
            metadata={"hnsw:space": "cosine"},
        )
        logger.info("ChromaDB initialized.")

    def _init_faiss(self):
        import faiss
        import numpy as np
        import os, pickle
        dim = 384  # all-MiniLM-L6-v2 dimension (adjust for other models)
        if os.path.exists(settings.FAISS_INDEX_PATH):
            self._faiss_index = faiss.read_index(settings.FAISS_INDEX_PATH)
            with open(settings.FAISS_INDEX_PATH + ".meta", "rb") as f:
                self._faiss_meta = pickle.load(f)
        else:
            self._faiss_index = faiss.IndexFlatIP(dim)  # Inner product (cosine after L2-norm)
            self._faiss_meta = {}
        logger.info("FAISS initialized.")

    def ensure_initialized(self):
        if self._store is None and self._collection is None:
            if settings.VECTOR_STORE_TYPE == "faiss":
                self._init_faiss()
                self._store = "faiss"
            else:
                self._init_chroma()
                self._store = "chroma"

    def upsert(self, ids: List[str], embeddings: List[List[float]], metadatas: List[dict], documents: List[str]):
        """Add or update documents in the vector store."""
        self.ensure_initialized()
        if self._store == "chroma":
            self._collection.upsert(
                ids=ids,
                embeddings=embeddings,
                metadatas=metadatas,
                documents=documents,
            )
        elif self._store == "faiss":
            import numpy as np, pickle
            import faiss
            vecs = np.array(embeddings, dtype="float32")
            faiss.normalize_L2(vecs)
            start_id = self._faiss_index.ntotal
            self._faiss_index.add(vecs)
            for i, (vid, meta, doc) in enumerate(zip(ids, metadatas, documents)):
                self._faiss_meta[start_id + i] = {"id": vid, "meta": meta, "doc": doc}
            faiss.write_index(self._faiss_index, settings.FAISS_INDEX_PATH)
            with open(settings.FAISS_INDEX_PATH + ".meta", "wb") as f:
                pickle.dump(self._faiss_meta, f)

    def query(
        self,
        query_embedding: List[float],
        top_k: int = 5,
        where: Optional[dict] = None,
    ) -> List[Tuple[str, float, dict, str]]:
        """
        Returns list of (id, score, metadata, document).
        Score is cosine similarity in [0, 1].
        """
        self.ensure_initialized()
        if self._store == "chroma":
            kwargs = {"query_embeddings": [query_embedding], "n_results": top_k, "include": ["metadatas", "documents", "distances"]}
            if where:
                kwargs["where"] = where
            results = self._collection.query(**kwargs)
            output = []
            for i in range(len(results["ids"][0])):
                vid      = results["ids"][0][i]
                dist     = results["distances"][0][i]
                score    = 1 - dist  # ChromaDB cosine returns distance
                meta     = results["metadatas"][0][i]
                doc      = results["documents"][0][i]
                output.append((vid, score, meta, doc))
            return output
        elif self._store == "faiss":
            import numpy as np, faiss
            vec = np.array([query_embedding], dtype="float32")
            faiss.normalize_L2(vec)
            scores, indices = self._faiss_index.search(vec, top_k)
            output = []
            for score, idx in zip(scores[0], indices[0]):
                if idx == -1:
                    continue
                entry = self._faiss_meta.get(idx)
                if entry:
                    output.append((entry["id"], float(score), entry["meta"], entry["doc"]))
            return output
        return []

    def delete(self, ids: List[str]):
        self.ensure_initialized()
        if self._store == "chroma":
            self._collection.delete(ids=ids)


class LLMService:
    """
    Pluggable LLM service.
    Supports: OpenAI, Anthropic, Ollama.
    """

    class LLMService:
        """
    Pluggable LLM service.
    Supports: OpenAI, Anthropic, Ollama, Groq.
    """

    async def generate(self, system_prompt: str, user_prompt: str, max_tokens: int = 1000) -> str:  # ✅ indented
        provider = settings.LLM_PROVIDER

        if provider == "groq" and settings.GROQ_API_KEY:
            return await self._groq(system_prompt, user_prompt, max_tokens)
        elif provider == "openai" and settings.OPENAI_API_KEY:
            return await self._openai(system_prompt, user_prompt, max_tokens)
        elif provider == "anthropic" and settings.ANTHROPIC_API_KEY:
            return await self._anthropic(system_prompt, user_prompt, max_tokens)
        # ... rest of your generate logic

    async def _groq(self, system: str, user: str, max_tokens: int) -> str:
        from groq import Groq          # Ensure you have the Groq SDK installed and configured

        client = Groq(api_key=settings.GROQ_API_KEY)

        def run():
            response = client.chat.completions.create(  
                model=settings.LLM_MODEL or "llama-3.1-8b-instant",
                messages=[
                    {"role": "system", "content": system},
                    {"role": "user", "content": user},
                ],
                max_tokens=max_tokens,
                temperature=0.7,
            )
            return response.choices[0].message.content

        return await asyncio.to_thread(run)

    async def _anthropic(self, system: str, user: str, max_tokens: int) -> str:
        import anthropic
        client = anthropic.AsyncAnthropic(api_key=settings.ANTHROPIC_API_KEY)
        resp = await client.messages.create(
            model="claude-opus-4-6",
            max_tokens=max_tokens,
            system=system,
            messages=[{"role": "user", "content": user}],
        )
        return resp.content[0].text

    async def _ollama(self, system: str, user: str, max_tokens: int) -> str:
        import httpx
        payload = {
            "model": settings.LLM_MODEL or "llama3",
            "messages": [
                {"role": "system", "content": system},
                {"role": "user", "content": user},
            ],
            "stream": False,
        }
        async with httpx.AsyncClient(timeout=60) as client:
            resp = await client.post(
                f"{settings.OLLAMA_BASE_URL}/api/chat",
                json=payload,
            )
            data = resp.json()
            return data["message"]["content"]

    class LLMService:
        """
    Pluggable LLM service.
    Supports: OpenAI, Anthropic, Ollama, Groq.
    """

    async def generate(self, system_prompt: str, user_prompt: str, max_tokens: int = 1000) -> str:
        provider = settings.LLM_PROVIDER

        if provider == "groq" and settings.GROQ_API_KEY:
            return await self._groq(system_prompt, user_prompt, max_tokens)
        elif provider == "openai" and settings.OPENAI_API_KEY:
            return await self._openai(system_prompt, user_prompt, max_tokens)
        elif provider == "anthropic" and settings.ANTHROPIC_API_KEY:
            return await self._anthropic(system_prompt, user_prompt, max_tokens)

    async def _openai(self, system: str, user: str, max_tokens: int) -> str:
        # ... your existing openai method
            from openai import AsyncOpenAI

    async def _groq(self, system: str, user: str, max_tokens: int) -> str:  # 👈 ADD HERE
        from groq import Groq
        import asyncio

        client = Groq(api_key=settings.GROQ_API_KEY)

        def run():
            response = client.chat.completions.create(
                model=settings.LLM_MODEL or "llama-3.1-8b-instant",
                messages=[
                    {"role": "system", "content": system},
                    {"role": "user", "content": user},
                ],
                max_tokens=max_tokens,
                temperature=0.7,
            )
            return response.choices[0].message.content

        return await asyncio.to_thread(run)


class RAGPipeline:   # 👈 RAGPipeline starts AFTER LLMService ends
    ...
class RAGPipeline:
    """
    Full RAG pipeline: retrieve → augment → generate.
    """

    def __init__(self):
        self.embedder     = EmbeddingService()
        self.vector_store = VectorStoreService()
        self.llm          = LLMService()

    async def retrieve(
        self,
        query: str,
        top_k: int = 5,
        filters: Optional[dict] = None,
    ) -> List[RetrievedThesis]:
        """Semantic search: embed query → find nearest neighbours."""
        embeddings = await self.embedder.encode_async([query])
        raw = self.vector_store.query(embeddings[0], top_k=top_k, where=filters)

        results = []
        for vid, score, meta, doc in raw:
            if score < settings.MIN_SIMILARITY_SCORE:
                continue
            results.append(RetrievedThesis(
                thesis_id       = int(meta.get("thesis_id", 0)),
                title           = meta.get("title", ""),
                abstract        = meta.get("abstract", ""),
                authors         = meta.get("authors", ""),
                keywords        = meta.get("keywords", ""),
                year            = meta.get("year"),
                department      = meta.get("department"),
                similarity_score= round(score, 4),
                snippet         = doc[:250] + "..." if len(doc) > 250 else doc,
            ))
        return results

    def _build_context(self, results: List[RetrievedThesis]) -> str:
        """Format retrieved theses as LLM context block."""
        if not results:
            return "No relevant theses found in the database."
        lines = []
        for i, r in enumerate(results, 1):
            lines.append(
                f"[{i}] Title: {r.title}\n"
                f"    Authors: {r.authors or 'N/A'} | Year: {r.year or 'N/A'} | Dept: {r.department or 'N/A'}\n"
                f"    Abstract: {r.abstract[:300] if r.abstract else 'N/A'}...\n"
                f"    Keywords: {r.keywords or 'N/A'}\n"
            )
        return "\n".join(lines)

    async def generate_research_gaps(self, topic: str, results: List[RetrievedThesis]) -> dict:
        context = self._build_context(results)
        system = (
            "You are an academic research advisor specializing in identifying research gaps. "
            "Analyze existing theses and identify unexplored areas, methodological gaps, and future research directions. "
            "Be specific, actionable, and scholarly in your analysis."
        )
        prompt = (
            f"Topic: {topic}\n\n"
            f"Existing theses in the database:\n{context}\n\n"
            "Please:\n"
            "1. Identify 3-5 specific research gaps not covered by existing works\n"
            "2. Suggest 3-5 future research directions\n"
            "3. Provide a brief analysis paragraph\n\n"
            "Format your response as JSON with keys: gaps (list), suggestions (list), analysis (string)"
        )
        raw = await self.llm.generate(system, prompt, max_tokens=1200)
        # Try to parse JSON, fall back to structured text
        try:
            import json, re
            match = re.search(r"\{.*\}", raw, re.DOTALL)
            if match:
                return json.loads(match.group())
        except Exception:
            pass
        return {
            "gaps":        [raw],
            "suggestions": [],
            "analysis":    raw,
        }

    async def suggest_titles(
        self,
        topic: str,
        results: List[RetrievedThesis],
        count: int = 5,
        keywords: Optional[List[str]] = None,
    ) -> dict:
        context = self._build_context(results)
        system = (
            "You are a thesis title specialist. Generate creative, specific, and academically rigorous thesis titles "
            "that address gaps in existing research. Titles should be clear, concise, and scholarly."
        )
        kw_hint = f"Keywords to consider: {', '.join(keywords)}" if keywords else ""
        prompt = (
            f"Topic: {topic}\n{kw_hint}\n\n"
            f"Existing theses for context:\n{context}\n\n"
            f"Generate {count} unique, compelling thesis titles that:\n"
            "- Address identified research gaps\n"
            "- Are specific and measurable\n"
            "- Would make strong academic contributions\n\n"
            "Format as JSON: {\"titles\": [...], \"rationale\": \"...\"}"
        )
        raw = await self.llm.generate(system, prompt, max_tokens=800)
        try:
            import json, re
            match = re.search(r"\{.*\}", raw, re.DOTALL)
            if match:
                return json.loads(match.group())
        except Exception:
            pass
        return {"titles": [raw], "rationale": ""}

    async def chat(
        self,
        message: str,
        history: List[dict],
        top_k: int = 3,
        filters: Optional[dict] = None,
    ) -> Tuple[str, List[RetrievedThesis]]:
        """RAG-powered conversational response with memory, dept filter."""
        retrieved = await self.retrieve(message, top_k=top_k, filters=filters)
        context = self._build_context(retrieved)

        history_text = "\n".join(
            [f"{m['role'].capitalize()}: {m['content']}" for m in history[-6:]]
        ) if history else ""

        system = (
            "You are AcademiaSync AI, an intelligent academic research assistant. "
            "You help researchers find theses, identify gaps, and generate research ideas. "
            "Use the provided thesis context to give accurate, helpful responses. "
            "If the context doesn't contain relevant information, say so honestly. "
            "Be conversational, scholarly, and helpful."
        )
        prompt = (
            f"Conversation history:\n{history_text}\n\n"
            f"Relevant theses from database:\n{context}\n\n"
            f"User question: {message}\n\n"
            "Provide a helpful, context-aware response referencing the relevant theses when appropriate."
        )
        reply = await self.llm.generate(system, prompt, max_tokens=1000)
        return reply, retrieved

    async def index_thesis(self, thesis_id: int, title: str, abstract: str, authors: str, keywords: str, year: Optional[int], department: Optional[str]) -> str:
        """Embed and store a thesis in the vector store."""
        text = f"{title}. {abstract or ''} {keywords or ''}"
        embeddings = await self.embedder.encode_async([text])
        vid = str(uuid.uuid4())
        self.vector_store.upsert(
            ids=[vid],
            embeddings=embeddings,
            metadatas=[{
                "thesis_id":  thesis_id,
                "title":      title,
                "abstract":   abstract or "",
                "authors":    authors or "",
                "keywords":   keywords or "",
                "year":       year or 0,
                "department": department or "",
            }],
            documents=[text],
        )
        return vid

    async def delete_thesis(self, vector_id: str):
        self.vector_store.delete([vector_id])


# ── Singleton ─────────────────────────────────────────────────────────────────
rag_pipeline = RAGPipeline()
