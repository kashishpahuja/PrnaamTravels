const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const path = require('path');

// Load environment variables
dotenv.config();

// Import Routes
const authRoutes = require('./routes/auth');
// const destinationRoutes = require('./routes/destinations');
// const packageRoutes = require('./routes/packages');
// const reviewRoutes = require('./routes/reviews');
// const pageRoutes = require('./routes/pages');
// const bookingRoutes = require('./routes/bookings');
// const adminRoutes = require('./routes/admin');

const app = express();

// --- MIDDLEWARE ---
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true // Crucial for 24-hour session cookies
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // Required to read the JWT token from cookies

// Static folder for local images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// --- ROUTES ---

// Linked to auth.js (handles request-otp, verify-otp, and /me)
// Path set to /user to match your frontend fetch calls
app.use('/user', authRoutes);

// Commented out routes until you link their controllers/models
/*
app.use('/api/destinations', destinationRoutes);
app.use('/api/packages', packageRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/pages', pageRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/admin', adminRoutes);
*/

// --- DATABASE CONNECTION ---
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Prnaam Travels Database Connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Root route for health check
app.get('/', (req, res) => {
  res.send('Prnaam Travels API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});