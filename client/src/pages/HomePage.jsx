import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import React, { useState, useEffect } from "react";

export default function HomePage() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [remainingTime, setRemainingTime] = useState(null)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 })
  const [pollStarted, setPollStarted] = useState(false)

  useEffect(() => {
    const fetchPoll = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/poll/next`)
        const data = await res.json()
        const pollTime = new Date(data.startTime)

        const interval = setInterval(() => {
          const now = new Date()
          const diff = pollTime - now

          if (diff <= 0) {
            clearInterval(interval)
            setTimeLeft({ days: 0, hours: 0, minutes: 0 })
            return
          }

          const days = Math.floor(diff / (1000 * 60 * 60 * 24))
          const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
          const minutes = Math.floor((diff / (1000 * 60)) % 60)

          setTimeLeft({ days, hours, minutes })
        }, 1000)

        setLoading(false)
        return () => clearInterval(interval)
      } catch (err) {
        console.error("Error fetching poll:", err)
        setLoading(false)
      }
    }

    fetchPoll()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#003049] dark:text-white mb-4">
          Welcome to UniVote
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
          A modern, secure, and transparent voting platform for real-time Elections and Decisions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Section 1: Purpose */}
          <div className="bg-white dark:bg-[#1e1e1e] p-6 rounded-lg shadow-md border dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-[#F77F00] mb-3">Why UniVote?</h2>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Empowers communities and organizations with real-time voting tools.</li>
              <li>Ensures transparency with verifiable results.</li>
              <li>Secure authentication and user access control.</li>
              <li>Ideal for elections and decisions.</li>
            </ul>
          </div>

          {/* Section 2: How it Works */}
          <div className="bg-white dark:bg-[#1e1e1e] p-6 rounded-lg shadow-md border dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-[#F77F00] mb-3">How it Works</h2>
            <ul className="list-decimal ml-5 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Register or log in to your secure account.</li>
              <li>Join a voting session.</li>
              <li>Cast your vote and see live results update in real time.</li>
              <li>View results and analytics after polls close.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 text-white text-2xl mt-4">
        {loading ? (
          <div className="text-center text-gray-500">Loading countdown...</div>
        ) : (
          <>
            <div className="bg-gray-900 px-6 py-4 rounded-full shadow">
              <p>{timeLeft.days}</p>
              <span className="text-sm">Days</span>
            </div>
            <div className="bg-gray-900 px-6 py-4 rounded-full shadow">
              <p>{timeLeft.hours}</p>
              <span className="text-sm">Hours</span>
            </div>
            <div className="bg-gray-900 px-6 py-4 rounded-full shadow">
              <p>{timeLeft.minutes}</p>
              <span className="text-sm">Minutes</span>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
