import { login } from './auth';

export default async function handler(req, res) {
  const { usernameOrEmail, password } = req.body;
  try {
    const userId = await login(usernameOrEmail, password);
    logger.info(`User ${userId} logged in`);
    res.status(200).json({ success: true, userId });
  } catch (error) {
    logger.error(`Login failed: ${error.message}`);
    res.status(401).json({ success: false, message: 'Invalid username/email or password' });
  }
}
