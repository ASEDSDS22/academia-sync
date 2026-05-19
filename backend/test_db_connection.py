import socket
import asyncio
import asyncpg
import sys

async def test_connection():
    host = "aws-0-ap-southeast-1.pooler.supabase.com"
    password = "HEAVENLYBLADES18"
    database = "postgres"
    
    # Try different username formats
    usernames = ["postgres", "postgres.iuacqnhnoelnemcbmmtm"]
    ports = [6543, 5432]
    
    for port in ports:
        for user in usernames:
            print(f"\n--- Testing asyncpg: user={user}, port={port} ---")
            try:
                conn = await asyncpg.connect(
                    user=user,
                    password=password,
                    database=database,
                    host=host,
                    port=port,
                    timeout=5
                )
                print(f"SUCCESS: Connected with user={user}, port={port}")
                await conn.close()
                return
            except Exception as e:
                print(f"Failed: {e}")

if __name__ == "__main__":
    asyncio.run(test_connection())
