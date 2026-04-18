const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  bannerImage: String,
  introHeading: String,
  introDescription: String,
  
  // Dynamic Array for Landmarks
  placesToVisit: [{
    image: String,
    heading: String,
    description: String,
    quickInfo: [String] // e.g., ["2 Days", "Entry Free"]
  }],
  
  // Logistics & SEO
  locationMap: String, // Google Maps iframe src
  address: String,
  nearbyAttractions: [{ name: String, distance: String }],
  gettingThere: [{ mode: { type: String, enum: ['Airport', 'Train', 'Road'] }, detail: String }]
}, { timestamps: true });

module.exports = mongoose.model('Destination', destinationSchema);