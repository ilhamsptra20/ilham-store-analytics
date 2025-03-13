import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import analyticsRoute from "./routes/analytics.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/analytics", analyticsRoute);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Microservice running on port ${PORT}`));