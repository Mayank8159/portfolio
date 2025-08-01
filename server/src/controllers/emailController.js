const { sendEmail } = require('../services/emailService');

const sendEmailController = async (req, res) => {
  const { email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ error: 'Email and message are required' });
  }

  try {
    const info = await sendEmail({ userEmail: email, message });
    res.status(200).json({ message: 'Message sent successfully', info });
  } catch (error) {
    console.error('Email sending failed:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
};

module.exports = { sendEmailController };