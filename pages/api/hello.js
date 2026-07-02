import jwt from 'jsonwebtoken'
import { Product } from './lib/product'
import { parseCookies } from './lib/parsecookies'
import mongoose from 'mongoose'

export default async function handler (req, res) {
  const cookies = parseCookies(req.headers.cookie || '')
  const token = cookies.admin_token

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET)
  } catch {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  if (req.method === 'GET') {
    try {
      await mongoose.connect(process.env.url)
      const products = await Product.find({}).lean()
      return res.status(200).json(products)
    } catch (err) {
      console.error(err)
      return res.status(500).json({ message: 'Server error' })
    }
  }

  if (req.method === 'DELETE') {
    const { id } = req.query

    if (!id) {
      return res.status(400).json({ message: 'Missing id' })
    }

    try {
      const deleted = await Product.findByIdAndDelete(id)
      if (!deleted) {
        return res.status(404).json({ message: 'Lead not found' })
      }
      return res.status(200).json({ success: true })
    } catch (err) {
      console.error(err)
      return res.status(500).json({ message: 'Server error' })
    }
  }
}
