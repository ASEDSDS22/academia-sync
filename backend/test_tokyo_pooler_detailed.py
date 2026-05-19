import asyncio
import asyncpg

async def test_conn(host, user, port):
    password = "ACADEMIA"
    database = "postgres"
    print(f"Testing host={host}, user={user}, port={port}...")
    try:
        conn = await asyncpg.connect(
            user=user,
            password=password,
            database=database,
            host=host,
            port=port,
            timeout=5
        )
        print(f"!!! SUCCESS !!!")
        await conn.close()
        return True
    except Exception as e:
        print(f"Failed: {type(e).__name__}: {e}")
        return False

async def main():
    host = "aws-1-ap-northeast-1.pooler.supabase.com"
    users = ["postgres.iuacqnhnoelnemcbmmtm"]
    ports = [6543]
    
    for u in users:
        for p in ports:
            if await test_conn(host, u, p):
                return

if __name__ == "__main__":
    asyncio.run(main())
