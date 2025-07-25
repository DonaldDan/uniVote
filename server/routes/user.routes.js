// server/routes/user.routes.js

import express from "express";
const router = express.Router();

// Example route (you can add more later)
router.get("/", (req, res) => {
  res.json({ message: "User route working" });
});

export default router;
