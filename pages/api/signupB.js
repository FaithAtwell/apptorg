import { signup } from './auth';

export default async function handler(req, res) {
    const { username, email, password } = req.body; // Extract email from req.body
    try {
        const userId = await signup(username, email, password); // Pass email to signup function
        res.status(200).json({ success: true, userId });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}
