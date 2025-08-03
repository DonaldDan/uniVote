import { useState } from "react"

export default function SchedulePoll() {
  const [startTime, setStartTime] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch("http://localhost:5000/api/poll/schedule", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ startTime }),
    })

    const data = await res.json()
    setMessage(data.message || "Something went wrong")
  }

  return (
    <div className="p-6 max-w-md bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Schedule Poll</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="datetime-local"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-[#003049] text-white px-4 py-2 rounded"
        >
          Schedule
        </button>
      </form>
      {message && <p className="mt-2 text-sm text-green-700">{message}</p>}
    </div>
  )
}
