import mongoose from "mongoose"

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || process.env.LOCAL_MONGO_URI)
      console.log(`✅ MongoDB connected: ${conn.connection.host}`)
  } catch (error) {
    console.error("Mongo Error", error.message)
    process.exit(1)
  }
}

export default connectDB
