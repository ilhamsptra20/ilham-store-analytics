import sys
import json

try:
    # Baca input dari Node.js
    data = json.load(sys.stdin)

    # Proses data
    total_products = len(data)
    total_price = sum(float(item['price']) for item in data)
    avg_price = sum(float(item['price']) for item in data) / total_products if total_products > 0 else 0

    # Hasilkan output JSON
    result = {
        "total_products": total_products,
        "total_price": total_price,
        "average_price": avg_price
    }
    
    # Cetak output sebagai JSON
    print(json.dumps(result))

except Exception as e:
    print(json.dumps({"error": str(e)}))