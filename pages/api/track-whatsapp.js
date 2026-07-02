import { connectToDatabase } from './lib/db'
import whatsappSchema from './lib/whatsappSchema'

export default async function handler (req, res) {
  try {
    await connectToDatabase()

    const ip =
      req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
      req.socket.remoteAddress
    const userAgent = req.headers['user-agent']
    const referrer = req.headers.referer || ''
    const page = req.body.page

    const result = await whatsappSchema.findOneAndUpdate(
      { ip },
      {
        $setOnInsert: {
          ip,
          userAgent,
          referrer,
          page,
          clickedAt: new Date()
        }
      },
      { upsert: true, new: false } // new: false -> null if it just inserted
    )

    const alreadyExisted = result !== null

    res.json({ success: true, saved: !alreadyExisted })
  } catch (err) {
    console.error(err)
    res.status(500).json({ success: false })
  }
}
