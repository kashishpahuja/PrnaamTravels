const nodemailer = require('nodemailer');

const sendOTP = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
  });

  await transporter.sendMail({
    from: '"Prnaam Travels Admin" <no-reply@prnaamtravels.com>',
    to: email,
    subject: "Your Admin Login OTP",
    text: `Your OTP for login is: ${otp}. Valid for 10 minutes.`
  });
};

module.exports = sendOTP;