const express = require('express');
const dotenv = require('dotenv');
const emailRoutes = require('./src/routes/emailRoutes');
const cors = require('cors');
const transporter = require('./src/config/mailConfig');
dotenv.config();
const app = express();

const allowedOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(",").map((origin) => origin.trim())
  : [
      "https://www.codewizarded.me",
      "http://localhost:5173",
      "http://localhost:3000",
    ];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "OPTIONS"],
  })
);
app.use(express.json());
app.use('/api', emailRoutes);

transporter.verify((error) => {
  if (error) {
    console.error('SMTP verify failed:', error);
  } else {
    console.log('SMTP ready');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});