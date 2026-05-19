import asyncio
import asyncpg

async def main():
    # Use the resolved IPv6 address in brackets for IPv6 connection
    host = "2406:da14:311:1500:1fb7:19b0:20e3:61f"
    user = "postgres"
    password = "HEAVENLYBLADES18"
    database = "postgres"
    
    print(f"Testing direct IPv6 connection to [{host}]:5432...")
    try:
        conn = await asyncpg.connect(
            user=user,
            password=password,
            database=database,
            host=host,
            port=5432,
            timeout=10
        )
        print("!!! SUCCESS DIRECT IPv6 !!!")
        await conn.close()
        return
    except Exception as e:
        print(f"Failed direct IPv6: {type(e).__name__}: {e}")

if __name__ == "__main__":
    asyncio.run(main())
