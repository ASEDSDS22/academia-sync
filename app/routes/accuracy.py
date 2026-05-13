import csv
import json
import os
from dataclasses import dataclass
from typing import List, Optional

# pyrefly: ignore [missing-import]
from fastapi import APIRouter, HTTPException

from app.services.rag_service import rag_pipeline

router = APIRouter(prefix="/accuracy", tags=["Accuracy"])


@dataclass
class ThesisPaper:
    title: str
    abstract: str
    author: str = ""
    year: str = ""


@dataclass
class AccuracyResult:
    title: str
    overall_score: int
    match_label: str  # "High match", "Moderate match", "Low match"
    rationale: str


def get_match_label(score: int) -> str:
    if score >= 70:
        return "High match"
    if score >= 40:
        return "Moderate match"
    return "Low match"


def _safe_json_loads_array(raw: str) -> list[dict]:
    """Extract and parse a JSON array from model output."""
    import re

    raw = (raw or "").strip()
    match = re.search(r"\[.*\]", raw, flags=re.DOTALL)
    if not match:
        raise ValueError("Model did not return a JSON array")
    return json.loads(match.group(0))


async def score_theses_async(search_query: str, papers: List[ThesisPaper]) -> List[AccuracyResult]:
    """Score thesis papers against a query using the backend's configured LLM."""

    papers_text = "\n\n".join(
        [f"[Paper {i+1}]\nTitle: {p.title}\nAbstract: {p.abstract}" for i, p in enumerate(papers)]
    )

    system = "You are a thesis relevance evaluator for an academic library system."
    user_prompt = f"""A user searched for: "{search_query}".

Evaluate each thesis paper below and score its relevance to the search topic on a scale of 0–100.
Also provide a 1-sentence rationale explaining the score.

{papers_text}

Respond ONLY with a valid JSON array (no markdown, no preamble) in this exact schema:
[
{{
    "paper_index": 1,
    "overall_score": 87,
    "rationale": "This paper directly investigates..."
}}
]
"""

    raw = await rag_pipeline.llm.generate(
        system_prompt=system,
        user_prompt=user_prompt,
        max_tokens=1024,
    )

    # LLMs may occasionally return extra text; try to extract JSON array.
    try:
        scores = _safe_json_loads_array(raw)
    except Exception:
        # Fallback: if we can't parse JSON, return an empty result rather than 500.
        scores = []


    results: List[AccuracyResult] = []
    for item in scores:
        idx = int(item["paper_index"]) - 1
        score = int(item["overall_score"])
        if idx < 0 or idx >= len(papers):
            continue
        paper = papers[idx]
        results.append(
            AccuracyResult(
                title=paper.title,
                overall_score=score,
                match_label=get_match_label(score),
                rationale=item.get("rationale", ""),
            )
        )

    results.sort(key=lambda r: r.overall_score, reverse=True)
    return results


def load_sample_theses(csv_path: Optional[str] = None) -> List[ThesisPaper]:
    """Load and normalize thesis rows from `data/sample_theses.csv`."""
    csv_path = csv_path or os.path.join(os.getcwd(), "data", "sample_theses.csv")
    if not os.path.exists(csv_path):
        raise FileNotFoundError(f"Sample thesis CSV not found: {csv_path}")

    rows: List[ThesisPaper] = []
    with open(csv_path, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for r in reader:
            rows.append(
                ThesisPaper(
                    title=(r.get("title") or "").strip(),
                    abstract=(r.get("abstract") or "").strip(),
                    author=(r.get("authors") or "").strip(),
                    year=str((r.get("year") or "")).strip(),
                )
            )
    return rows


@router.post("/score-sample-theses")
async def score_sample_theses(payload: dict):
    """Score `data/sample_theses.csv` against a search query."""
    query = (payload.get("query") or "").strip()
    top_n = int(payload.get("top_n") or payload.get("top_k") or 10)

    if not query:
        raise HTTPException(status_code=400, detail="query is required")

    try:
        papers = load_sample_theses()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    results = await score_theses_async(search_query=query, papers=papers)
    results = results[: max(0, top_n)]

    return {
        "query": query,
        "total_papers": len(papers),
        "results": [
            {
                "title": r.title,
                "overall_score": r.overall_score,
                "match_label": r.match_label,
                "rationale": r.rationale,
            }
            for r in results
        ],
    }

