// src/hooks/usePolls.js
import { useEffect, useState } from "react"
import { getPollsByRepId } from "@/services/pollService"
import { toast } from "sonner"

export function usePolls(repId) {
  const [polls, setPolls] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!repId) return

    const fetchPolls = async () => {
      try {
        const data = await getPollsByRepId(repId)
        setPolls(data)
      } catch (err) {
        setError(err)
        toast.error("Failed to fetch polls")
      } finally {
        setLoading(false)
      }
    }

    fetchPolls()
  }, [repId])

  return { polls, loading, error }
}
