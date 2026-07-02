export default function handler (req, res) {
  res.setHeader(
    'Set-Cookie',
    `admin_token=; HttpOnly; Path=/; Max-Age=0; SameSite=Strict${
      process.env.NODE_ENV === 'production' ? '; Secure' : ''
    }`
  )
  res.status(200).json({ success: true })
}
