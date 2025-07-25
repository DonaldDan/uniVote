import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import repRoutes from "./routes/representative.routes.js";

dotenv.config();
const app = express();

app.use(cors({
  origin: "http://localhost:5173", // Your React frontend
  credentials: true
}))

// ✅ Simple root route for browser testing
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/representatives", repRoutes);
app.use("/uploads", express.static("uploads"));


connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`);
});
