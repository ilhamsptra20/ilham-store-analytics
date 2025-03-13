import express from "express";
import { fetchProductData } from "../services/fetchData.js";
import { callPythonScript } from "../services/callPython.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const products = await fetchProductData();
        const analysis = await callPythonScript(products);
        res.json(analysis);
    } catch (error) {
        res.status(500).json({ message: "Gagal memproses data", error: error.message });
    }
});

export default router;