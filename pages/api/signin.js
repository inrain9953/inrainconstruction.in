import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { username, password } = req.body;

    if (username === process.env.inrainusername && password === process.env.inrainpassword) {
        const token = jwt.sign(
            { username }, // payload
            process.env.key, // secret
            { expiresIn: '24h' } // expiration
        );

        return res.status(200).json({ token });
    } else {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
}
