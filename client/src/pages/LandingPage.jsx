// src/pages/LandingPage.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import CandidateModal from "@/components/CandidateModal";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  const [representatives, setRepresentatives] = useState([]);
  const [selectedRep, setSelectedRep] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const baseURL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchReps = async () => {
      try {
        const res = await axios.get(`${baseURL}/representatives`);
        setRepresentatives(res.data);
      } catch (err) {
        console.error("Error fetching representatives:", err);
        toast.error("Failed to load representatives");
      }
    };

    fetchReps();
  }, [baseURL]);

  const handleVote = async (repId) => {
    try {
      const res = await axios.post(
        `${baseURL}/representatives/${repId}/vote`,
        {}, // Empty body unless needed
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      toast.success("Vote cast successfully ✅");

      // Optionally update the vote count immediately (optimistic update)
      setRepresentatives((prevReps) =>
        prevReps.map((rep) =>
          rep._id === repId ? { ...rep, votes: (rep.votes || 0) + 1 } : rep
        )
      );
    } catch (err) {
      console.error(err);
      toast.error("Voting failed. Are you logged in?");
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {representatives.map((rep) => (
          <div
            key={rep._id}
            className="flex flex-col items-center text-center p-6 border rounded-2xl shadow-lg bg-white dark:bg-muted"
          >
            {rep.image && (
              <img
                src={`${baseURL.replace(/\/api$/, "")}/uploads/${rep.image}`}
                alt={rep.name}
                className="w-32 h-32 object-cover rounded-full mb-6"
              />
            )}
            <h2 className="text-lg font-bold">{rep.name}</h2>
            <p><strong>Party:</strong> {rep.party}</p>
            <p><strong>Ward:</strong> {rep.ward}</p>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
              {rep.manifesto}
            </p>
  
            <div className="flex gap-4 mt-4">
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                onClick={() => handleVote(rep._id)}
              >
                Vote
              </button>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedRep(rep);
                  setIsModalOpen(true);
                }}
              >
                View Candidate
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Total Votes: {rep.votes || 0}
            </p>
          </div>
        ))}
      </div>
  
      {/* Candidate modal rendered outside the map */}
      <CandidateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        rep={selectedRep}
      />
    </>
  );
}  
