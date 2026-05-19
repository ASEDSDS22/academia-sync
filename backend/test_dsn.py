import asyncio
import asyncpg

async def test_dsn():
    # Use the full DSN string
    dsn = "postgresql://postgres.iuacqnhnoelnemcbmmtm:HEAVENLYBLADES18@aws-0-ap-northeast-1.pooler.supabase.com:6543/postgres"
    print(f"Testing DSN: {dsn.replace('HEAVENLYBLADES18', '****')}")
    try:
        conn = await asyncpg.connect(dsn, timeout=5)
        print("!!! SUCCESS !!!")
        await conn.close()
    except Exception as e:
        print(f"Failed: {e}")

if __name__ == "__main__":
    asyncio.run(test_dsn())
