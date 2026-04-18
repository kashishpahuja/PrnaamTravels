const Destination = require('../models/Destination');
const Hotel = require('../models/Hotel');

exports.getDestinationBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const destination = await Destination.findOne({ slug });
    if (!destination) return res.status(404).json({ message: "Corridor not found" });

    // Fetch hotels linked to this destination
    const hotels = await Hotel.find({ destinationId: destination._id });

    res.json({
      success: true,
      data: {
        destination,
        hotels
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};