import mongoose from 'mongoose'

const WhatsappClickSchema = new mongoose.Schema({
  ip: { type: String, required: true, unique: true }, // unique index on ip
  userAgent: String,
  referrer: String,
  page: String,
  clickedAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.models.WhatsappClick ||
  mongoose.model('WhatsappClick', WhatsappClickSchema)
