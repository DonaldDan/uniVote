import express from "express";
import multer from "multer";
import path from "path";
import upload from "../middleware/upload.js";

import {
  createRep,
  getAllReps,
  getUserReps,
} from "../controllers/representative.controller.js";
import { protect, adminOnly } from "../middleware/auth.js";

const router = express.Router();


router.post("/", protect, adminOnly, upload.single("image"), createRep);
router.get("/", getAllReps); // open to public

export default router;
