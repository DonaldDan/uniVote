// routes/pollRoutes.js
import express from "express"
import { Poll } from "../models/poll.js"

const router = express.Router()

// Log incoming requests for debugging
router.use((req, res, next) => {
  console.log(`[PollRoute] ${req.method} ${req.originalUrl}`)
  next()
})

// POST /api/poll/schedule
router.post("/schedule", async (req, res) => {
  try {
    const { startTime } = req.body
    if (!startTime) {
      return res.status(400).json({ message: "Start time required" })
    }

    // Remove previous polls if needed
    await Poll.deleteMany({})

    const poll = new Poll({ startTime })
    await poll.save()

    res.status(201).json({ message: "Poll scheduled", poll })
  } catch (err) {
    console.error("Error scheduling poll:", err)
    res.status(500).json({ message: "Server error" })
  }
})

// GET /api/poll/next
router.get("/next", async (_req, res) => {
  try {
    const poll = await Poll.findOne().sort({ startTime: -1 })
    if (!poll) {
      return res.status(404).json({ message: "No upcoming poll" })
    }
    res.json({ startTime: poll.startTime })
  } catch (err) {
    console.error("Error fetching next poll:", err)
    res.status(500).json({ message: "Failed to fetch poll time" })
  }
})

export default router
