import mongoose from "mongoose";

const repSchema = new mongoose.Schema({
  name: String,
  party: String,
  ward: String,
  manifesto: String,
  image: String, // new field
  votes: {
    type: Number,
    default: 0,
},
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
  
});



export default mongoose.model("Representative", repSchema);
