// src/services/pollService.js
import API from "./api"

export const getPollsByRepId = async (repId) => {
  const res = await API.get(`/polls/representative/${repId}`)
  return res.data
}
