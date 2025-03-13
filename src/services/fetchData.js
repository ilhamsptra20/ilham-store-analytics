import axios from "axios";

export async function fetchProductData() {
    try {
        const response = await axios.get("http://127.0.0.1:8000/api/productsAnalytics/raw-data");
        return response.data;
    } catch (error) {
        console.error("Gagal mengambil data dari API Laravel:", error.message);
        return [];
    }
}