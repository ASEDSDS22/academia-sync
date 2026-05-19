import asyncio
from sqlalchemy import select, func
from app.core.database import AsyncSessionLocal, engine
from app.models.user import User, Thesis

async def count_records():
    async with AsyncSessionLocal() as session:
        try:
            user_count = await session.scalar(select(func.count()).select_from(User))
            thesis_count = await session.scalar(select(func.count()).select_from(Thesis))
            print(f"Users in database: {user_count}")
            print(f"Theses in database: {thesis_count}")
        except Exception as e:
            print(f"Error checking records: {e}")

if __name__ == "__main__":
    asyncio.run(count_records())
