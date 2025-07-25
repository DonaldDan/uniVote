// src/services/authService.js
import API from "./api"
const API = "http://localhost:5000/api/auth";

const login = async (credentials) => {
  const res = await API.post("/auth/login", credentials)
  return res.data
}

const register = async (data) => {
  const res = await API.post("/auth/register", data)
  return res.data
}

const authService = {
  login,
  register,
}

export default authService
