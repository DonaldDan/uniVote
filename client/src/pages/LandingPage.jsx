// src/pages/LandingPage.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";

export default function LandingPage() {
  const [representatives, setRepresentatives] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;

  // Fetch reps on mount
  useEffect(() => {
    const fetchReps = async () => {
      try {
        const res = await axios.get(`${API_URL}/representatives`);
        setRepresentatives(res.data);
      } catch (err) {
        console.error("Error fetching representatives:", err);
        toast.error("Failed to load representatives");
      }
    };

    fetchReps();
  }, [API_URL]);

  // Voting logic
  const handleVote = async (repId) => {
    try {
      await axios.post(
        `${API_URL}/representatives/${repId}/vote`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      toast.success("Vote cast successfully ✅");

      // Optionally: re-fetch to update vote count
      const updatedReps = await axios.get(`${API_URL}/representatives`);
      setRepresentatives(updatedReps.data);
    } catch (err) {
      console.error("Vote failed:", err);
      toast.error(
        err?.response?.status === 401
          ? "Unauthorized. Please log in first."
          : "Voting failed. Try again later."
      );
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {representatives.map((rep) => (
        <div
          key={rep._id}
          className="flex flex-col items-center text-center p-6 border rounded-2xl shadow-lg bg-white"
        >
          {rep.image && (
            <img
              src={`${API_URL.replace("/api", "")}/uploads/${rep.image}`}
              alt={rep.name}
              className="w-32 h-32 object-cover rounded-full mb-6"
            />
          )}
          <h2 className="text-lg font-bold">{rep.name}</h2>
          <p>
            <strong>Party:</strong> {rep.party}
          </p>
          <p>
            <strong>Ward:</strong> {rep.ward}
          </p>
          <p className="mt-2 text-sm text-gray-600">{rep.manifesto}</p>
          <div className="flex gap-4 mt-4">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              onClick={() => handleVote(rep._id)}
            >
              Vote
            </button>
            <button className="px-4 py-2 border border-gray-400 rounded-full hover:bg-gray-100 transition">
              View Candidate
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Total Votes: {rep.votes || 0}
          </p>
        </div>
      ))}
    </div>
  );
}
