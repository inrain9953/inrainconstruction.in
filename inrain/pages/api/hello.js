import mongoose from 'mongoose';
import { Product } from './lib/product';

export default async function handler(req, res) {
  try {
    await mongoose.connect(process.env.url);


    if (req.method === 'GET') {
      const products = await Product.find();
      // console.log(products)
      res.status(200).send(products);
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
