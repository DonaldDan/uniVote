// src/services/api.js
import axios from "axios"

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
})

// Attach token if available
API.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("user"))
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`
  }
  return config
})

export default API
