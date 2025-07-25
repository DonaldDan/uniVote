// server/routes/vote.routes.js
import express from "express";
import { protect } from "../middleware/auth.js";
import { voteForRep } from "../controllers/vote.controller.js";

const router = express.Router();

router.post("/:id", protect, voteForRep);

export default router;
