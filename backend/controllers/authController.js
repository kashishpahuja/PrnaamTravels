// backend/controllers/authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { sendOTP } = require('../utils/email');

exports.requestOTP = async (req, res) => {
  const { email } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const otpExpires = Date.now() + 10 * 60 * 1000; // 10 mins

  let user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "Admin not found" });

  user.otp = otp;
  user.otpExpires = otpExpires;
  await user.save();

  await sendOTP(email, otp);
  res.json({ message: "OTP sent to email" });
};

exports.verifyOTP = async (req, res) => {
  const { email, otp } = req.body;
  const user = await User.findOne({ email, otp, otpExpires: { $gt: Date.now() } });

  if (!user) return res.status(400).json({ message: "Invalid or expired OTP" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
  
  res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
  res.json({ message: "Login successful", admin: { name: user.name, email: user.email } });
};