import User from "../models/User.js";
import jwt from "jsonwebtoken";

const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.create({ name, email, password });
    const token = generateToken(user);
    res.status(201).json({ user, token });
  } catch (err) {
    res.status(400).json({ error: "User already exists or invalid data" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    const isMatch = await user?.comparePassword(password);

    if (!user || !isMatch) return res.status(401).json({ error: "Invalid credentials" });

    const token = generateToken(user);
    res.status(200).json({ user, token });
  } catch {
    res.status(500).json({ error: "Server error" });
  }
};
