const express = require('express');
const router = express.Router();
const { requestOTP, verifyOTP, getMe } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

// Matches: /user/request-otp
router.post('/request-otp', requestOTP);

// Matches: /user/verify-otp
router.post('/verify-otp', verifyOTP);


router.post('/logout', (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  });
  res.status(200).json({ success: true, message: "Logged out successfully" });
});
// Matches: /user/admin/me (Used by your layout.js checkAuth)
router.get('/admin/me', protect, getMe);

module.exports = router;