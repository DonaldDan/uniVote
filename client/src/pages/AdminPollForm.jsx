import React, { useState } from "react"

const AdminForm = () => {
  const [selectedDate, setSelectedDate] = useState("")
  const [statusMessage, setStatusMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!selectedDate) {
      setStatusMessage("Please select a date.")
      return
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/poll/schedule`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ startTime: selectedDate }),
      })

      if (!res.ok) {
        const text = await res.text()
        throw new Error(`Server responded with ${res.status}: ${text}`)
      }

      const data = await res.json()
      console.log("Poll scheduled:", data)
      setStatusMessage("✅ Poll successfully scheduled!")
    } catch (err) {
      console.error("Error scheduling poll:", err)
      setStatusMessage("❌ Failed to schedule poll. Check console or server.")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 max-w-md mx-auto bg-white shadow rounded"
    >
      <label className="font-medium">
        Select Start Time:
        <input
          type="datetime-local"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border p-2 rounded w-full mt-1"
          required
        />
      </label>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Schedule Poll
      </button>

      {statusMessage && (
        <div className="text-sm text-center text-gray-700 mt-2">{statusMessage}</div>
      )}
    </form>
  )
}

export default AdminForm
