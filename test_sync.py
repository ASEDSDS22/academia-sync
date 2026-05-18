import psycopg2
import sys

def test_sync():
    dsn = "postgresql://postgres.iuacqnhnoelnemcbmmtm:HEAVENLYBLADES18@aws-0-ap-northeast-1.pooler.supabase.com:6543/postgres"
    print(f"Testing Sync DSN: {dsn.replace('HEAVENLYBLADES18', '****')}")
    try:
        conn = psycopg2.connect(dsn, connect_timeout=5)
        print("!!! SUCCESS !!!")
        conn.close()
    except Exception as e:
        print(f"Failed: {e}")

if __name__ == "__main__":
    test_sync()
