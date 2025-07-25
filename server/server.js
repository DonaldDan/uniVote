import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import repRoutes from "./routes/representative.routes.js";

dotenv.config();
const app = express();
connectDB();

// CORS configuration
const allowedOrigins = [
  "http://localhost:5173", // React app
  "https://uni-vote-iota.vercel.app", // Production URL
];

app.use(
  cors({
    origin: (origin, cb) =>{
      if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
    },
    credentials: true,
    methodes: 'GET,PUT,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`);
});
