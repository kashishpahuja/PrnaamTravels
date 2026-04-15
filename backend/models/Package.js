import mongoose from "mongoose";

const packageSchema = new mongoose.Schema({
  title: String,
  slug: String,
  category: String,
  subCategory: String,
  duration: String,
  price: Number,
  overview: String,
  itinerary: Array,
  inclusions: [String],
  exclusions: [String],
  heroImage: String,
  gallery: [String],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Package", packageSchema);