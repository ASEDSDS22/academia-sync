import asyncio
import asyncpg

async def test_region(region):
    host = f"aws-0-{region}.pooler.supabase.com"
    user = "postgres.iuacqnhnoelnemcbmmtm"
    password = "HEAVENLYBLADES18"
    database = "postgres"
    
    print(f"Testing {region}...")
    try:
        conn = await asyncpg.connect(
            user=user,
            password=password,
            database=database,
            host=host,
            port=6543,
            timeout=5
        )
        print(f"!!! SUCCESS in {region} !!!")
        await conn.close()
        return True
    except Exception as e:
        print(f"Failed {region}: {e}")
        return False

async def main():
    regions = [
        "ap-southeast-1", # Singapore
        "ap-northeast-1", # Tokyo
        "us-east-1",      # Virginia
        "eu-west-1",      # Ireland
        "ap-southeast-2", # Sydney
    ]
    for r in regions:
        if await test_region(r):
            break

if __name__ == "__main__":
    asyncio.run(main())
