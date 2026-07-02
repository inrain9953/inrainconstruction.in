import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { serialize } from 'cookie'

// Very basic in-memory rate limiter (resets on redeploy/restart).
// For production, use a proper store like Redis/Upstash.
const attempts = new Map()
const MAX_ATTEMPTS = 5
const WINDOW_MS = 60 * 60 * 1000 // 15 minutes

function isRateLimited (ip) {
  const now = Date.now()
  const record = attempts.get(ip)
  if (!record) return false
  if (now - record.firstAttempt > WINDOW_MS) {
    attempts.delete(ip)
    return false
  }
  return record.count >= MAX_ATTEMPTS
}

function recordAttempt (ip) {
  const now = Date.now()
  const record = attempts.get(ip)
  if (!record || now - record.firstAttempt > WINDOW_MS) {
    attempts.set(ip, { count: 1, firstAttempt: now })
  } else {
    record.count += 1
  }
}

export default async function handler (req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const ip =
    req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    req.socket.remoteAddress

  if (isRateLimited(ip)) {
    return res
      .status(429)
      .json({ message: 'Too many attempts. Try again later.' })
  }

  const { username, password } = req.body

  if (!username || !password) {
    return res.status(400).json({ message: 'Missing credentials' })
  }

  const validUsername = username === process.env.inrainusername
  const validPassword = password === process.env.inrainpassword

  if (!validUsername || !validPassword) {
    recordAttempt(ip)
    return res.status(401).json({ message: 'Invalid credentials' })
  }

  const token = jwt.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: '24h'
  })

  res.setHeader(
    'Set-Cookie',
    `admin_token=${token}; HttpOnly; Path=/; Max-Age=${
      60 * 60 * 24
    }; SameSite=Strict${
      process.env.NODE_ENV === 'production' ? '; Secure' : ''
    }`
  )

  return res.status(200).json({ success: true })
}
