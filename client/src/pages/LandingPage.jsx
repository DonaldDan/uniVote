// src/pages/LandingPage.jsx
import { useEffect, useState } from "react";
import axios from "axios";

export default function LandingPage() {
  const [reps, setReps] = useState([]);


  // hardcoded user data for testing
    // hardcode for testing
  useEffect(() => {
  setReps([
    {
      _id: "1",
      name: "Janet Ongera",
      party: "UDA",
      ward: "Molo South",
      manifesto: "Improve education.",
      image: "janet.jpg"
    },
    {
      _id: "2",
      name: "Mogambi Victor",
      party: "ANC",
      ward: "Bobasi North",
      manifesto: "Food justice at the top of the agenda.",
      image: "Manu.jpg"
    },
    {
      _id: "1",
      name: "Osoro Were",
      party: "ODM",
      ward: "South",
      manifesto: "Lead the fight against corporate tax avoidance.",
      image: "Osoro.jpg"
    },
    {
      _id: "1",
      name: "Kebagendi Mokoro",
      party: "KANU",
      ward: "Nyacheki",
      manifesto: "Rebuild a fairer local economy.",
      image: "Keba.jpg"
    },
    {
      _id: "1",
      name: "Donya Toto",
      party: "Green Party",
      ward: "South Bogetaorio",
      manifesto: "Encourage co-operative models in your local area.",
      image: "donya.jpg"
    },
    {
      _id: "1",
      name: "Shahidi Jander",
      party: "NARC",
      ward: "Roinsoti",
      manifesto: "Unlock your high streets.",
      image: "jander.jpg"
    }
  ]);
}, []);

  // // Fetch representatives from the server
  // useEffect(() => {
  //   const fetchReps = async () => {
  //     try {
  //       const res = await axios.get("/api/reps");
  //       setReps(res.data);
  //     } catch (err) {
  //       console.error("Failed to fetch reps", err);
  //     }
  //   };
  //   fetchReps();
  // }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center"> Meet Your Candidate </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reps.map((rep) => (
          <div key={rep._id} className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center">
            <img
              src={`assets/${rep.image}`}
              alt={rep.name}
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <div className="text-center mb-2">
              <h2 className="text-xl font-semibold">{rep.name}</h2>
              <p className="text-sm text-gray-600">{rep.party}</p>
              <p className="text-sm text-gray-500 italic">Ward: {rep.ward}</p>
            </div>
            <p className="text-sm text-gray-700 mb-4">{rep.manifesto}</p>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                Vote
              </button>
              <button className="px-4 py-2 border border-gray-400 rounded-full hover:bg-gray-100 transition">
                View Candidate
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const handleVote = async (repId) => {
  try {
    const token = localStorage.getItem("token");
    await axios.post(`/api/votes/${repId}`, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    alert("Vote submitted!");
  } catch (err) {
    alert("Failed to vote. You must be logged in.");
  }
};
