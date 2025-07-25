import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to VoteSmart
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          A modern, secure, and transparent voting platform for real-time decisions, polls, and elections.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Section 1: Purpose */}
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-2xl font-semibold text-blue-600 mb-3">Why VoteSmart?</h2>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>Empowers communities and organizations with real-time voting tools.</li>
              <li>Ensures transparency with verifiable results.</li>
              <li>Secure authentication and user access control.</li>
              <li>Ideal for elections, surveys, and group decisions.</li>
            </ul>
          </div>

          {/* Section 2: How it Works */}
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-2xl font-semibold text-green-600 mb-3">How it Works</h2>
            <ul className="list-decimal ml-5 text-gray-700 space-y-2">
              <li>Register or log in to your secure account.</li>
              <li>Join or create a voting session.</li>
              <li>Cast your vote and see live results update in real time.</li>
              <li>View results and analytics after polls close.</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex justify-center space-x-4">
          <Button onClick={() => navigate("/login")}>Login</Button>
          <Button variant="outline" onClick={() => navigate("/register")}>
            Register
          </Button>
        </div>
      </div>
    </div>
  )
}
