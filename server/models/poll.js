import mongoose from "mongoose"

const pollSchema = new mongoose.Schema({
  startTime: {
    type: Date,
    required: true,
  },
})

export const Poll = mongoose.model("Poll", pollSchema)