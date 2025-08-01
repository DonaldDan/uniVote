import Representative from "../models/Representative.js";

// Create Representative (Admin Only)
export const createRep = async (req, res) => {
  try {
    const { name, party, ward, manifesto } = req.body;
    const image = req.file?.filename; // only if using multer for image upload

    const rep = new Representative({
      name,
      party,
      ward,
      manifesto,
      image,
      createdBy: req.user._id,
    });

    await rep.save();
    res.status(201).json(rep);
  } catch (err) {
    console.error("Error creating representative:", err);
    res.status(500).json({ error: "Failed to create representative" });
  }
};

// getUser rEPS
export const getUserReps = async (req, res) => {
  try {
    // Option 1: If user's ward is stored in their profile (preferred)
    const user = await user.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const reps = await Representative.find({ ward: user.ward });
    res.status(200).json(reps);

  } 
  catch (err) {
    console.error("Failed to fetch user reps:", err);
    res.status(500).json({ error: "Server error while fetching your representatives" });
  }
};

// Get All Representatives (for Users Public)
export const getAllReps = async (req, res) => {
  try {
    const reps = await Representative.find().populate("createdBy", "name role");
    res.json(reps);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch representatives" });
  }
};

// votting
export const voteForRep = async (req, res) => {
  try {
    const rep = await Representative.findById(req.params.id);
    if (!rep) {
      return res.status(404).json({ error: "Representative not found" });
    }

    rep.votes = (rep.votes || 0) + 1;
    await rep.save();

    res.status(200).json({ message: "Vote recorded", votes: rep.votes });
  } catch (error) {
    console.error("Vote error:", error);
    res.status(500).json({ error: "Failed to vote" });
  }
};
