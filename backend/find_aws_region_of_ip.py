import urllib.request
import json
import ipaddress

# The target IPv6 address
target_ip = ipaddress.IPv6Address("2406:da14:311:1500:1fb7:19b0:20e3:61f")

url = "https://ip-ranges.amazonaws.com/ip-ranges.json"
print("Fetching AWS IP ranges...")
try:
    with urllib.request.urlopen(url) as response:
        data = json.loads(response.read().decode())
        
    found_region = None
    for prefix in data.get("ipv6_prefixes", []):
        net = ipaddress.IPv6Network(prefix["ipv6_prefix"])
        if target_ip in net:
            print(f"Match found!")
            print(f"Prefix: {prefix['ipv6_prefix']}")
            print(f"Region: {prefix['region']}")
            print(f"Service: {prefix['service']}")
            found_region = prefix["region"]
            break
            
    if not found_region:
        print("No matching AWS IPv6 prefix found in the range list.")
except Exception as e:
    print(f"Error: {e}")
