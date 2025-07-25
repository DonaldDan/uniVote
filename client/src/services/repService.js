// client/src/services/repService.js
import api from "./api";

const getAllReps = async () => {
  const response = await api.get("/representatives");
  return response.data;
};

const createRep = async (formData) => {
  const response = await api.post("/representatives", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export default { getAllReps, createRep };
