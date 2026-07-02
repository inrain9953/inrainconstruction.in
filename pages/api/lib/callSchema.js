import mongoose from 'mongoose'

const CallClickSchema = new mongoose.Schema({
  ip: { type: String, required: true, unique: true }, // unique index on ip
  userAgent: String,
  referrer: String,
  page: String,
  clickedAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.models.CallButtonPress ||
  mongoose.model('CallButtonPress', CallClickSchema)
