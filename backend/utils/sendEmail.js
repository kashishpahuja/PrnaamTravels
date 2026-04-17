const nodemailer = require('nodemailer');

const sendOTP = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { 
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS 
    }
  });

  try {
    // Check if the credentials are accepted before trying to send
    await transporter.verify();

    await transporter.sendMail({
      from: `"Prnaam Travels Admin" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Admin Login OTP",
      text: `Your OTP for login is: ${otp}. Valid for 10 minutes.`,
      html: `
        <div style="font-family: serif; padding: 20px; border: 1px solid #144487; border-radius: 10px;">
          <h2 style="color: #144487; font-style: italic;">Prnaam Travels Admin Access</h2>
          <p>Your verification code is:</p>
          <h1 style="letter-spacing: 5px; color: #d8841a;">${otp}</h1>
          <p style="font-size: 12px; color: #666;">Valid for 10 minutes. If you didn't request this, please ignore.</p>
        </div>
      `
    });
    console.log(`✅ OTP sent successfully to ${email}`);
  } catch (error) {
    console.error("❌ Nodemailer Error:", error.message);
    throw new Error("Failed to send email. Check App Password.");
  }
};

module.exports = sendOTP;