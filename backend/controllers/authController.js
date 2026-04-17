const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');
const sendOTP = require('../utils/sendEmail');

exports.requestOTP = async (req, res) => {
  try {
    const { email } = req.body;
    // 1. Check if the email exists in the Admin collection
    let admin = await Admin.findOne({ email: email.toLowerCase() });
    
    if (!admin) {
      return res.status(401).json({ message: "Access Denied: Not a registered Admin." });
    }

    // 2. Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    admin.otp = otp;
    admin.otpExpires = Date.now() + 10 * 60 * 1000; // 10 mins
    await admin.save();

    // 3. Send Email
    await sendOTP(email, otp);
    
    res.json({ success: true, message: "OTP sent to email" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error while sending OTP" });
  }
};

exports.verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const admin = await Admin.findOne({ 
      email: email.toLowerCase(), 
      otp, 
      otpExpires: { $gt: Date.now() } 
    });

    if (!admin) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    // Clear OTP
    admin.otp = undefined;
    admin.otpExpires = undefined;
    await admin.save();

    // Create 24-hour Token
    const token = jwt.sign({ id: admin._id, role: admin.role }, process.env.JWT_SECRET, { expiresIn: '24h' });
    
    // Set HTTP-Only Cookie
    res.cookie('token', token, { 
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      sameSite: 'lax',
      path: '/',
    });

    res.json({ success: true, admin: { name: admin.name, email: admin.email } });
  } catch (error) {
    res.status(500).json({ message: "Server error during verification" });
  }
};

// Add this for your layout's checkAuth function
exports.getMe = async (req, res) => {
    try {
        const admin = await Admin.findById(req.user.id).select('-otp -otpExpires');
        res.json({ user: admin });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};