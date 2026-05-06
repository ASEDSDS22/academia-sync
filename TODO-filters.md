# Department-Based Thesis Filtering - COMPLETE ✅

All steps done:
- [x] security.py: get_user_department dep
- [x] rag.py: auto-filter search/research-gaps/suggest-titles/list_theses
- [x] rag_service.py: chat() accepts filters
- [x] chatbot.py: passes dept filter to chat
- [x] Ingestion preserves dept metadata

Test:
1. Login IT student → /rag/search or /chat → only IT theses
2. Login EDUC → only EDUC theses
3. Payload department=ALL overrides.

Live demo: `cd backend && uvicorn app.main:app --reload`


