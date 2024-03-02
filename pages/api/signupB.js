import { signup } from './auth';
export default async function handler(req, res) {
    const { username, password } = req.body;
    try {
        const userId = await signup(username, password);
        res.status(200).json({ success: true, userId });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}