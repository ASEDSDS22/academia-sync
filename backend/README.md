# AcademiaSync 🎓
### RAG-Based Semantic Thesis Retrieval System

AcademiaSync is a production-ready full-stack AI system that uses Retrieval-Augmented Generation (RAG) to semantically search thesis documents, identify research gaps, suggest titles, and enable conversational academic research assistance.

---

## 🏗️ Project Structure

```
academia-sync/
├── backend/
│   ├── app/
│   │   ├── main.py                    # FastAPI app entry point
│   │   ├── core/
│   │   │   ├── config.py              # Pydantic settings (env vars)
│   │   │   ├── database.py            # Async SQLAlchemy setup
│   │   │   └── security.py            # JWT, bcrypt, RBAC
│   │   ├── models/
│   │   │   └── user.py                # ORM: User, Thesis, ChatSession, AuditLog
│   │   ├── schemas/
│   │   │   └── schemas.py             # Pydantic request/response models
│   │   ├── routes/
│   │   │   ├── auth.py                # /auth - login, register, me
│   │   │   ├── rag.py                 # /rag - search, gaps, titles
│   │   │   ├── chatbot.py             # /chatbot - conversational AI
│   │   │   ├── admin.py               # /admin - user management
│   │   │   ├── librarian.py           # /librarian - thesis CRUD
│   │   │   └── data_ingestion.py      # /data-ingestion - file upload
│   │   └── services/
│   │       ├── rag_service.py         # Embeddings + VectorDB + LLM
│   │       └── ingestion_service.py   # CSV/Excel processing pipeline
│   ├── requirements.txt
│   └── .env.example
├── frontend/
│   └── (React + Tailwind - see Frontend section)
├── data/
│   └── sample_theses.csv              # 18 sample thesis records
└── vector_store/                      # Auto-created by ChromaDB/FAISS
```

---

## ⚡ Quick Start

### 1. Clone and Setup

```bash
git clone https://github.com/yourorg/academia-sync.git
cd academia-sync/backend

python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 2. Configure Environment

```bash
cp ../.env.example .env
# Edit .env with your API keys and settings
nano .env
```

**Minimum required config:**
```env
LLM_PROVIDER=openai
OPENAI_API_KEY=sk-your-key-here
# OR use Ollama for free local inference:
# LLM_PROVIDER=ollama
# LLM_MODEL=llama3
```

### 3. Run the API

```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

API docs: http://localhost:8000/docs

---

## 🧠 AI Configuration

### LLM Providers

| Provider | Config | Cost | Notes |
|----------|--------|------|-------|
| OpenAI | `LLM_PROVIDER=openai` + `OPENAI_API_KEY` | Paid | Best quality |
| Anthropic | `LLM_PROVIDER=anthropic` + `ANTHROPIC_API_KEY` | Paid | Claude models |
| Ollama | `LLM_PROVIDER=ollama` | Free | Local, private |

### Embedding Models

| Model | Config | Dimension | Notes |
|-------|--------|-----------|-------|
| all-MiniLM-L6-v2 | Default | 384 | Fast, good quality, no API needed |
| all-mpnet-base-v2 | Change `EMBEDDING_MODEL` | 768 | Higher quality, slower |
| text-embedding-3-small | OpenAI API | 1536 | Best quality, requires key |

### Vector Stores

| Store | Config | Notes |
|-------|--------|-------|
| ChromaDB | `VECTOR_STORE_TYPE=chroma` | Default, persistent, easy |
| FAISS | `VECTOR_STORE_TYPE=faiss` | Fast, no server needed |

---

## 📡 API Reference

### Authentication

```bash
# Register
POST /auth/register
{
  "email": "student@university.edu",
  "username": "jsmith",
  "full_name": "John Smith",
  "password": "SecurePass123"
}

# Login
POST /auth/login
{ "email": "...", "password": "..." }
# Returns: { access_token, refresh_token, role }
```

### Semantic Search

```bash
POST /rag/search
Authorization: Bearer <token>
{
  "query": "machine learning for healthcare diagnosis",
  "top_k": 5,
  "department": "Computer Science"
}
```

### Research Gap Analysis

```bash
POST /rag/research-gaps
{
  "topic": "IoT applications in Philippine agriculture",
  "department": "Agricultural Engineering"
}
# Returns: gaps, suggestions, existing works, analysis
```

### Title Suggestions

```bash
POST /rag/suggest-titles
{
  "topic": "federated learning for privacy",
  "keywords": ["hospitals", "medical imaging"],
  "count": 5
}
```

### AI Chatbot

```bash
POST /chatbot/chat
{
  "message": "What theses exist about blockchain in the Philippines?",
  "session_id": null,
  "history": []
}
```

### Upload Dataset

```bash
POST /data-ingestion/upload
Authorization: Bearer <librarian-token>
Content-Type: multipart/form-data
file=@sample_theses.csv
```

---

## 👥 User Roles & Access

| Endpoint | User | Librarian | Admin |
|----------|------|-----------|-------|
| Search, Chat | ✅ | ✅ | ✅ |
| Research Gaps, Titles | ✅ | ✅ | ✅ |
| Upload CSV/Excel | ❌ | ✅ | ✅ |
| Thesis CRUD | ❌ | ✅ | ✅ |
| User Management | ❌ | ❌ | ✅ |
| Audit Logs | ❌ | ❌ | ✅ |
| System Stats | ❌ | ❌ | ✅ |

---

## 🖥️ Frontend (React + Tailwind)

```bash
npx create-react-app frontend --template typescript
cd frontend
npm install axios react-router-dom @headlessui/react lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm start
```

### Key Pages to Build:
- `/login` — Auth form
- `/dashboard` — Search + recent results
- `/search` — Advanced semantic search with filters
- `/chat` — AI chatbot interface
- `/gaps` — Research gap analyzer
- `/titles` — Title suggestion tool
- `/admin` — User & dataset management
- `/librarian` — Thesis review queue

---

## 🔒 Security Features

- **JWT** with access + refresh tokens
- **bcrypt** password hashing (cost factor 12)
- **RBAC** — 3-tier role system (user / librarian / admin)
- **Rate limiting** — 60 req/min general, 20 req/min for AI endpoints
- **Input validation** — Pydantic v2 with custom validators
- **CORS** — Configurable allowed origins
- **Secure file upload** — Extension + size validation, sanitized filenames
- **Audit logging** — All admin actions tracked

---

## 🐳 Docker (Optional)

```yaml
# docker-compose.yml
version: '3.9'
services:
  api:
    build: ./backend
    ports: ["8000:8000"]
    env_file: .env
    volumes:
      - ./data:/app/data
      - ./vector_store:/app/vector_store

  postgres:
    image: postgres:16
    environment:
      POSTGRES_DB: academia_sync
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: yourpassword
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:
```

---

## 🧪 Testing the System

1. Start the API: `uvicorn app.main:app --reload`
2. Open http://localhost:8000/docs
3. Register as admin: `POST /auth/register`
4. Login: `POST /auth/login` → copy token
5. Authorize in Swagger (click "Authorize" button)
6. Upload sample data: `POST /data-ingestion/upload` with `data/sample_theses.csv`
7. Search: `POST /rag/search` with query "machine learning healthcare"
8. Find gaps: `POST /rag/research-gaps` with topic "IoT agriculture Philippines"
9. Chat: `POST /chatbot/chat` with any academic question

---

## 📄 License

MIT License — Free for academic and commercial use.
