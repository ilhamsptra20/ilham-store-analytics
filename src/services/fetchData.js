import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API_BASE_URL = process.env.API_BASE_URL;

export async function fetchProductData() {
    try {
        const response = await axios.get(`${API_BASE_URL}/productsAnalytics/raw-data`);
        return response.data;
    } catch (error) {
        console.error("Gagal mengambil data dari API Laravel:", error.message);
        return [];
    }
}