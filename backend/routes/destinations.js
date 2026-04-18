// backend/routes/destinations.js
const express = require('express');
const router = express.Router();
const Destination = require('../models/Destination');
const Hotel = require('../models/Hotel');

// GET destination by slug
router.get('/content/:slug', async (req, res) => {
  try {
    const destination = await Destination.findOne({ slug: req.params.slug });
    if (!destination) return res.status(404).json({ message: "Destination not found" });

    // Find all hotels linked to this specific destination ID
    const hotels = await Hotel.find({ destinationId: destination._id });

    res.json({ success: true, destination, hotels });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET all destinations for the grid
router.get('/', async (req, res) => {
  try {
    const destinations = await Destination.find().select('name slug bannerImage');
    res.json({ success: true, destinations });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST / SAVE (Admin Sync)
router.post('/sync', async (req, res) => {
    // Implementation for saving/updating logic...
});

module.exports = router;