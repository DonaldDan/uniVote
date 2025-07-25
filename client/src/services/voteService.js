// src/services/voteService.js
import API from "./api"

const submitVote = async (pollId, voteData) => {
  const res = await API.post(`/votes/${pollId}`, voteData)
  return res.data
}

const voteService = {
  submitVote,
}

export default voteService
