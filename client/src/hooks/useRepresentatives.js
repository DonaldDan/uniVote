// src/hooks/useRepresentatives.js
import { useEffect, useState } from "react"
import { getRepresentativesByUser } from "@/services/repService"
import { toast } from "sonner"

export function useRepresentatives() {
  const [representatives, setRepresentatives] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchReps = async () => {
      try {
        const data = await getRepresentativesByUser()
        setRepresentatives(data)
      } catch (err) {
        setError(err)
        toast.error("Failed to load representatives")
      } finally {
        setLoading(false)
      }
    }

    fetchReps()
  }, [])

  return { representatives, loading, error }
}
