// server/controllers/vote.controller.js
import Representative from "../models/Representative.js";

export const voteForRep = async (req, res) => {
  const repId = req.params.id;
  try {
    const rep = await Representative.findById(repId);
    if (!rep) return res.status(404).json({ error: "Representative not found" });

    rep.votes = (rep.votes || 0) + 1;
    await rep.save();

    res.status(200).json({ message: "Vote recorded", votes: rep.votes });
  } catch (err) {
    res.status(500).json({ error: "Vote failed" });
  }
};
