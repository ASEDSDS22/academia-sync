import asyncio
import asyncpg

async def test_conn(host, user, port):
    password = "HEAVENLYBLADES18"
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
        print(f"Failed: {e}")
        return False

async def main():
    # Since we know the region is ap-northeast-1
    hosts = [
        "aws-0-ap-northeast-1.pooler.supabase.com",
    ]
    users = [
        "postgres.iuacqnhnoelnemcbmmtm",
        "postgres",
    ]
    ports = [6543, 5432]
    
    for h in hosts:
        for u in users:
            for p in ports:
                if await test_conn(h, u, p):
                    return

if __name__ == "__main__":
    asyncio.run(main())
