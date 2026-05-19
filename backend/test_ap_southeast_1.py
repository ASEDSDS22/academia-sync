import asyncio
import asyncpg

async def main():
    host = "aws-0-ap-southeast-1.pooler.supabase.com"
    user = "postgres.iuacqnhnoelnemcbmmtm"
    password = "HEAVENLYBLADES18"
    database = "postgres"
    
    ports = [5432, 6543]
    for port in ports:
        print(f"Testing connection to {host}:{port} with user {user}...")
        try:
            conn = await asyncpg.connect(
                user=user,
                password=password,
                database=database,
                host=host,
                port=port,
                timeout=10
            )
            print("!!! SUCCESS !!!")
            await conn.close()
            return
        except Exception as e:
            print(f"Failed: {type(e).__name__}: {e}")

if __name__ == "__main__":
    asyncio.run(main())
