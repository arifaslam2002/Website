import express from 'express';
const router = express.Router();
const adminEmail = 'admin@example.com';
const adminPassword = 'admin123';
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === adminEmail && password === adminPassword) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});
export default router;
