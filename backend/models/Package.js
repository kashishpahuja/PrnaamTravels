// backend/models/Package.js
const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, unique: true, required: true },
  category: { type: String, enum: ['char-dham-road', 'helicopter', 'kedarnath', 'standard'], required: true },
  subCategory: String,
  duration: String,
  price: Number,
  overview: String,
  itinerary: [{ day: Number, title: String, description: String }],
  inclusions: [String],
  exclusions: [String],
  heroImage: String,
  gallery: [String],
  destinationsCovered: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Destination' }],
  featured: { type: Boolean, default: false },
  popular: { type: Boolean, default: false },
  seo: { metaTitle: String, metaDescription: String }
}, { timestamps: true });

module.exports = mongoose.model('Package', packageSchema);