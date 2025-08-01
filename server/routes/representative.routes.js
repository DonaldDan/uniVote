import express from "express";
import upload from "../middleware/upload.js";
import { voteForRep } from "../controllers/representative.controller.js";

import {
  createRep,
  getAllReps,
  getUserReps,
} from "../controllers/representative.controller.js";
import { protect, adminOnly } from "../middleware/auth.js";

const router = express.Router();

router.post("/", protect, adminOnly, upload.single("image"), createRep);
router.post("/:id/vote", protect, voteForRep);
router.get("/", getAllReps); // open to public
router.get("/", getUserReps); // Admin

export default router;
