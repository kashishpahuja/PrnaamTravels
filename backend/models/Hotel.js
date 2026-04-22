const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  destinationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Destination', required: true },
  name: { type: String, required: true },
  rating: Number,
  pricePerNight: String,
  about: String,
  images: [String],
  facilities: [String],
  
  // Dynamic Array for Rooms
  rooms: [{
    type: { type: String }, // FIX: This is how you allow a field named "type" in Mongoose
    bedType: String,
    description: String,
    capacity: String,
    images: [String]
  }]
}, { timestamps: true });

module.exports = mongoose.model('Hotel', hotelSchema);