const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const { 
  syncDestination, 
  getDestinationBySlug, 
  getAllDestinations 
} = require('../controllers/destinationController');

// GET all destinations
router.get('/', getAllDestinations);

// GET single destination with hotels
router.get('/content/:slug', getDestinationBySlug);

router.delete('/:id', require('../controllers/destinationController').deleteDestination);

// POST create/update destination with form-data images
router.post('/sync', upload.any(), syncDestination);

module.exports = router;

// // backend/routes/destinations.js
// const express = require('express');
// const router = express.Router();
// const Destination = require('../models/Destination');
// const Hotel = require('../models/Hotel');

// // GET destination by slug
// router.get('/content/:slug', async (req, res) => {
//   try {
//     const destination = await Destination.findOne({ slug: req.params.slug });
//     if (!destination) return res.status(404).json({ message: "Destination not found" });

//     // Find all hotels linked to this specific destination ID
//     const hotels = await Hotel.find({ destinationId: destination._id });

//     res.json({ success: true, destination, hotels });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // GET all destinations for the grid
// router.get('/', async (req, res) => {
//   try {
//     const destinations = await Destination.find().select('name slug bannerImage');
//     res.json({ success: true, destinations });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // POST / SAVE (Admin Sync)
// router.post('/sync', async (req, res) => {
//     // Implementation for saving/updating logic...
// });

// module.exports = router;