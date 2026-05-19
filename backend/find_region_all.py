import asyncio
import asyncpg

regions = [
    "ap-southeast-1", "ap-southeast-2", "ap-northeast-1", "ap-northeast-2", "ap-northeast-3",
    "us-east-1", "us-east-2", "us-west-1", "us-west-2", "ca-central-1",
    "eu-west-1", "eu-west-2", "eu-west-3", "eu-central-1", "eu-central-2",
    "ap-south-1", "ap-southeast-3", "sa-east-1", "me-central-1", "af-south-1"
]

async def test_region(region):
    host = f"aws-0-{region}.pooler.supabase.com"
    user = "postgres.iuacqnhnoelnemcbmmtm"
    password = "HEAVENLYBLADES18"
    database = "postgres"
    
    try:
        conn = await asyncpg.connect(
            user=user,
            password=password,
            database=database,
            host=host,
            port=6543,
            timeout=3
        )
        print(f"!!! SUCCESS IN REGION: {region} !!!")
        await conn.close()
        return region
    except Exception as e:
        err_msg = str(e)
        if "tenant/user" not in err_msg and "Tenant or user not found" not in err_msg:
            # If the error is NOT "tenant not found", this might actually be the correct region!
            # For example, if it's password authentication failed or timeout/connection error, but the tenant IS found!
            print(f"Region {region} returned non-tenant error: {type(e).__name__}: {err_msg}")
            return region
        return None

async def main():
    print("Starting region scan...")
    tasks = [test_region(r) for r in regions]
    results = await asyncio.gather(*tasks)
    successful_regions = [r for r in results if r is not None]
    print(f"\nScan finished. Matching regions: {successful_regions}")

if __name__ == "__main__":
    asyncio.run(main())
