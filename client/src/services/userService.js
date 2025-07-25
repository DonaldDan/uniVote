// src/services/userService.js
import API from "./api"

const getAllUsers = async () => {
  const res = await API.get("/users")
  return res.data
}

const getUserById = async (id) => {
  const res = await API.get(`/users/${id}`)
  return res.data
}

const updateUser = async (id, data) => {
  const res = await API.put(`/users/${id}`, data)
  return res.data
}

const userService = {
  getAllUsers,
  getUserById,
  updateUser,
}

export default userService
