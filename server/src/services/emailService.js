const transporter = require('../config/mailConfig');

const sendEmail = async ({ userEmail, message }) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // You receive the message
    subject: `New message from ${userEmail}`,
    text: message,
  };

  return await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };