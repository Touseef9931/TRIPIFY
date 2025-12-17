import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();

const app = express();

// ✅ CORS ENABLE
app.use(
  cors({
    origin: "http://localhost:5173", // React / Vite URL
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Error Handler (LAST MIDDLEWARE)
app.use(errorHandler);

// DB
connectDB();

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
