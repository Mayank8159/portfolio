const express = require('express');
const dotenv = require('dotenv');
const emailRoutes = require('./src/routes/emailRoutes');
const cors = require('cors');
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', emailRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});