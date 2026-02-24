const express = require('express');
const { sendEmailController } = require('../controllers/emailController');

const router = express.Router();

router.post('/send-email', sendEmailController);
router.get('/health', (req, res) => {
	res.status(200).json({ status: 'ok' });
});

module.exports = router;