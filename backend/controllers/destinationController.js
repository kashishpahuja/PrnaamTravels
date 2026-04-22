const Destination = require('../models/Destination');
const Hotel = require('../models/Hotel');

// POST /user/destinations/sync
exports.syncDestination = async (req, res) => {
  try {
    // 1. Parse the stringified JSON data from the frontend
    const { destData, hotels } = JSON.parse(req.body.data);
    const files = req.files || [];

    // 2. Map Master Banner Image
    const bannerFile = files.find(f => f.fieldname === 'bannerImage');
    if (bannerFile) destData.bannerImage = `/uploads/${bannerFile.filename}`;

    // 3. Map Place Images
    if (destData.placesToVisit) {
      destData.placesToVisit = destData.placesToVisit.map((place, index) => {
        // Strip temporary frontend IDs
        const cleanPlace = {
          heading: place.heading,
          description: place.description,
          quickInfo: typeof place.quickInfo === 'string' ? place.quickInfo.split(',').map(s => s.trim()) : place.quickInfo
        };

        const placeFile = files.find(f => f.fieldname === `placeImage_${index}`);
        if (placeFile) cleanPlace.image = `/uploads/${placeFile.filename}`;
        
        return cleanPlace;
      });
    }

    // 4. Create or Update the Core Destination
    const savedDestination = await Destination.findOneAndUpdate(
      { slug: destData.slug },
      destData,
      { upsert: true, new: true }
    );

    // 5. Handle Hotels & Rooms
    const validHotels = (hotels || []).filter(h => h.name && h.name.trim() !== '');

    if (validHotels.length > 0) {
      // Clear out old hotels for this destination
      await Hotel.deleteMany({ destinationId: savedDestination._id });

      const processedHotels = validHotels.map((hotel, hIdx) => {
        // Build a fresh object to strip out frontend temporary 'id'
        const cleanHotel = {
          destinationId: savedDestination._id,
          name: hotel.name,
          rating: hotel.rating || 5,
          pricePerNight: hotel.pricePerNight,
          about: hotel.about,
          facilities: hotel.facilities,
          images: [],
          rooms: []
        };

        // Map Hotel Gallery Images
        const hotelImages = files.filter(f => f.fieldname === `hotel_${hIdx}_images`);
        if (hotelImages.length > 0) {
          cleanHotel.images = hotelImages.map(f => `/uploads/${f.filename}`);
        }

        // Map Room Images & Strip Room IDs
        if (hotel.rooms && hotel.rooms.length > 0) {
          cleanHotel.rooms = hotel.rooms.map((room, rIdx) => {
            const cleanRoom = {
              type: room.type,
              bedType: room.bedType,
              capacity: room.capacity,
              description: room.description,
              images: []
            };

            const roomImages = files.filter(f => f.fieldname === `hotel_${hIdx}_room_${rIdx}_images`);
            if (roomImages.length > 0) {
              cleanRoom.images = roomImages.map(f => `/uploads/${f.filename}`);
            }
            return cleanRoom;
          });
        }
        
        return cleanHotel;
      });

      // Insert the newly processed, valid, and clean hotels
      await Hotel.insertMany(processedHotels);
      
    } else {
      await Hotel.deleteMany({ destinationId: savedDestination._id });
    }

    // 6. Send success response
    res.json({ success: true, destination: savedDestination });
    
  } catch (error) {
    console.error("Sync Error:", error);
    res.status(500).json({ message: "Sync failed", error: error.message });
  }
};

// GET /user/destinations/content/:slug
exports.getDestinationBySlug = async (req, res) => {
  try {
    const destination = await Destination.findOne({ slug: req.params.slug });
    if (!destination) return res.status(404).json({ message: "Destination not found" });

    const hotels = await Hotel.find({ destinationId: destination._id });

    res.json({ success: true, destination, hotels });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /user/destinations/
exports.getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find().select('name slug bannerImage introHeading');
    res.json({ success: true, destinations });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE /user/destinations/:id
exports.deleteDestination = async (req, res) => {
  try {
    const destination = await Destination.findByIdAndDelete(req.params.id);
    if (!destination) return res.status(404).json({ message: "Destination not found" });

    // Delete linked hotels as well
    await Hotel.deleteMany({ destinationId: req.params.id });

    res.json({ success: true, message: "Destination deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// const Destination = require('../models/Destination');
// const Hotel = require('../models/Hotel');

// // POST /user/destinations/sync
// exports.syncDestination = async (req, res) => {
//   try {
//     // 1. Parse the stringified JSON data from the frontend
//     const { destData, hotels } = JSON.parse(req.body.data);
//     const files = req.files || [];

//     // 2. Map Master Banner Image
//     const bannerFile = files.find(f => f.fieldname === 'bannerImage');
//     if (bannerFile) destData.bannerImage = `/uploads/${bannerFile.filename}`;

//     // 3. Map Place Images
//     if (destData.placesToVisit) {
//       destData.placesToVisit.forEach((place, index) => {
//         const placeFile = files.find(f => f.fieldname === `placeImage_${index}`);
//         if (placeFile) place.image = `/uploads/${placeFile.filename}`;
        
//         // Clean up quickInfo string to array if it's sent as a comma-separated string
//         if (typeof place.quickInfo === 'string') {
//           place.quickInfo = place.quickInfo.split(',').map(s => s.trim());
//         }
//       });
//     }

//     // 4. Create or Update the Core Destination
//     const savedDestination = await Destination.findOneAndUpdate(
//       { slug: destData.slug },
//       destData,
//       { upsert: true, new: true }
//     );

//     // 5. Handle Hotels & Rooms
//     // Filter out empty hotels where the user didn't enter a name
//     const validHotels = (hotels || []).filter(h => h.name && h.name.trim() !== '');

//     if (validHotels.length > 0) {
//       // Clear out old hotels for this destination
//       await Hotel.deleteMany({ destinationId: savedDestination._id });

//       const processedHotels = validHotels.map((hotel, hIdx) => {
//         hotel.destinationId = savedDestination._id;

//         // Map Hotel Gallery Images
//         const hotelImages = files.filter(f => f.fieldname === `hotel_${hIdx}_images`);
//         if (hotelImages.length > 0) {
//           hotel.images = hotelImages.map(f => `/uploads/${f.filename}`);
//         }

//         // Map Room Images
//         if (hotel.rooms) {
//           hotel.rooms.forEach((room, rIdx) => {
//             const roomImages = files.filter(f => f.fieldname === `hotel_${hIdx}_room_${rIdx}_images`);
//             if (roomImages.length > 0) {
//               room.images = roomImages.map(f => `/uploads/${f.filename}`);
//             }
//           });
//         }
//         return hotel;
//       });

//       // Insert the newly processed, valid hotels
//       await Hotel.insertMany(processedHotels);
      
//     } else {
//       // If there are no valid hotels (e.g., user deleted them all), just clear existing ones
//       await Hotel.deleteMany({ destinationId: savedDestination._id });
//     }

//     // 6. Send success response
//     res.json({ success: true, destination: savedDestination });
    
//   } catch (error) {
//     console.error("Sync Error:", error);
//     res.status(500).json({ message: "Sync failed", error: error.message });
//   }
// };

// // GET /user/destinations/content/:slug
// exports.getDestinationBySlug = async (req, res) => {
//   try {
//     const destination = await Destination.findOne({ slug: req.params.slug });
//     if (!destination) return res.status(404).json({ message: "Destination not found" });

//     const hotels = await Hotel.find({ destinationId: destination._id });

//     res.json({ success: true, destination, hotels });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // GET /user/destinations/
// exports.getAllDestinations = async (req, res) => {
//   try {
//     const destinations = await Destination.find().select('name slug bannerImage introHeading');
//     res.json({ success: true, destinations });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };