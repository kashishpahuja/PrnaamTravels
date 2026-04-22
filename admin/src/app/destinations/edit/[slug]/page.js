'use client';
import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, UploadCloud, Plus, Trash2, 
  ImageIcon, CheckCircle, Loader2
} from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function EditDestinationPage() {
  const params = useParams();
  const router = useRouter();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

  const [loading, setLoading] = useState(true);
  const [bannerFile, setBannerFile] = useState(null);
  
  const [destData, setDestData] = useState({
    name: '', slug: '', introHeading: '', introDescription: '', locationMap: '', bannerImage: '',
    placesToVisit: [], gettingThere: [], nearbyAttractions: []
  });
  const [hotels, setHotels] = useState([]);

  // --- FETCH EXISTING DATA ---
  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const res = await fetch(`${apiUrl}/user/destinations/content/${params.slug}`);
        const data = await res.json();
        
        if (data.success) {
          const d = data.destination;
          
          // Helper to safely convert old string entries to arrays for the new UI
          const ensureArray = (val) => {
            if (Array.isArray(val)) return val.length > 0 ? val : [''];
            if (typeof val === 'string' && val.trim() !== '') return [val];
            return [''];
          };

          // Map backend data to frontend state structure
          setDestData({
            name: d.name || '',
            slug: d.slug || '',
            introHeading: d.introHeading || '',
            introDescription: d.introDescription || '',
            locationMap: d.locationMap || '',
            bannerImage: d.bannerImage || '',
            placesToVisit: d.placesToVisit?.map(p => ({ 
              ...p, 
              id: p._id || Date.now() + Math.random(), 
              description: ensureArray(p.description),
              quickInfo: ensureArray(p.quickInfo), 
              imageFiles: [] 
            })) || [],
            gettingThere: d.gettingThere?.map(g => ({ ...g, id: g._id || Date.now() + Math.random() })) || [],
            nearbyAttractions: d.nearbyAttractions?.map(n => ({ ...n, id: n._id || Date.now() + Math.random() })) || []
          });

          setHotels(data.hotels?.map(h => ({
            ...h, 
            id: h._id || Date.now() + Math.random(),
            about: ensureArray(h.about),
            facilities: ensureArray(h.facilities),
            imageFiles: [],
            rooms: h.rooms?.map(r => ({ 
              ...r, 
              id: r._id || Date.now() + Math.random(), 
              description: ensureArray(r.description),
              amenities: ensureArray(r.amenities),
              imageFiles: [] 
            })) || []
          })) || []);

        } else {
          toast.error("Destination not found");
          router.push('/destinations');
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchDestination();
  }, [params.slug]);

  // --- HANDLERS ---
  const handleDestChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      const slug = value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
      setDestData({ ...destData, name: value, slug });
    } else {
      setDestData({ ...destData, [name]: value });
    }
  };

  const updateArrayItem = (arrayName, id, field, value) => {
    setDestData(prev => ({
      ...prev,
      [arrayName]: prev[arrayName].map(item => item.id === id ? { ...item, [field]: value } : item)
    }));
  };

  const addPlace = () => setDestData({ ...destData, placesToVisit: [...destData.placesToVisit, { id: Date.now(), heading: '', description: [''], quickInfo: [''], imageFiles: [] }] });
  const removePlace = (id) => setDestData({ ...destData, placesToVisit: destData.placesToVisit.filter(p => p.id !== id) });
  const addGettingThere = () => setDestData({ ...destData, gettingThere: [...destData.gettingThere, { id: Date.now(), mode: 'Airport', detail: '' }] });
  const addAttraction = () => setDestData({ ...destData, nearbyAttractions: [...destData.nearbyAttractions, { id: Date.now(), name: '', distance: '' }] });

  const addHotel = () => setHotels([...hotels, { id: Date.now(), name: '', rating: 5, pricePerNight: '', about: [''], facilities: [''], imageFiles: [], rooms: [] }]);
  const removeHotel = (id) => setHotels(hotels.filter(h => h.id !== id));
  const updateHotel = (id, field, value) => setHotels(hotels.map(h => h.id === id ? { ...h, [field]: value } : h));
  
  const addRoom = (hotelId) => setHotels(hotels.map(h => h.id === hotelId ? { ...h, rooms: [...h.rooms, { id: Date.now(), type: '', bedType: '', capacity: '', description: [''], amenities: [''], imageFiles: [] }] } : h));
  const removeRoom = (hotelId, roomId) => setHotels(hotels.map(h => h.id === hotelId ? { ...h, rooms: h.rooms.filter(r => r.id !== roomId) } : h));
  const updateRoom = (hotelId, roomId, field, value) => setHotels(hotels.map(h => h.id === hotelId ? { ...h, rooms: h.rooms.map(r => r.id === roomId ? { ...r, [field]: value } : r) } : h));

  // --- API SUBMISSION ---
  const handleSave = async () => {
    if (!destData.name) return toast.error("Destination name is required");

    const formData = new FormData();
    formData.append('data', JSON.stringify({ destData, hotels }));
    if (bannerFile) formData.append('bannerImage', bannerFile);

    destData.placesToVisit.forEach((place, index) => {
      if (place.imageFiles) Array.from(place.imageFiles).forEach(file => formData.append(`placeImage_${index}`, file));
    });

    hotels.forEach((hotel, hIdx) => {
      if (hotel.imageFiles) Array.from(hotel.imageFiles).forEach(file => formData.append(`hotel_${hIdx}_images`, file));
      hotel.rooms.forEach((room, rIdx) => {
        if (room.imageFiles) Array.from(room.imageFiles).forEach(file => formData.append(`hotel_${hIdx}_room_${rIdx}_images`, file));
      });
    });

    try {
      const res = await fetch(`${apiUrl}/user/destinations/sync`, {
        method: 'POST', body: formData,
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Destination Updated Successfully!");
        router.push('/destinations');
      } else {
        toast.error(data.message || "Failed to update");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while saving.");
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin text-[#1a2b49]" size={40} /></div>;

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen pb-24 text-slate-800 font-sans">
      <div className="bg-white px-8 py-5 flex items-center justify-between border-b border-slate-200 sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <Link href="/destinations" className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            <ArrowLeft size={18} className="text-slate-600" />
          </Link>
          <h1 className="text-2xl font-bold text-[#1a2b49]">Edit Destination</h1>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className="flex-1 space-y-8">
            {/* DESTINATION DETAILS */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="text-sm font-bold text-[#1a2b49] mb-5 uppercase tracking-wide">Destination Details</h2>
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">Destination Name</label>
                  <input type="text" name="name" value={destData.name} onChange={handleDestChange} className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">URL Slug</label>
                  <input type="text" name="slug" value={destData.slug} readOnly className="w-full p-3 border border-slate-200 rounded-lg bg-slate-50 text-slate-400 text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">Intro Heading</label>
                  <input type="text" name="introHeading" value={destData.introHeading} onChange={handleDestChange} className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">Editorial Description</label>
                  <textarea name="introDescription" value={destData.introDescription} onChange={handleDestChange} rows={4} className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm resize-none" />
                </div>
              </div>
            </div>

            {/* PLACES TO VISIT */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="text-sm font-bold text-[#1a2b49] mb-5 uppercase tracking-wide">Places to Visit</h2>
              <div className="space-y-6">
                {destData.placesToVisit.map((place) => (
                  <div key={place.id} className="p-5 border border-slate-100 bg-slate-50/50 rounded-xl relative group">
                    <button onClick={() => removePlace(place.id)} className="absolute top-4 right-4 text-slate-400 hover:text-red-500 hidden group-hover:block transition-colors"><Trash2 size={16}/></button>
                    
                    <div className="flex flex-col lg:flex-row gap-5">
                      {/* Place Images */}
                      <div className="relative w-full lg:w-40 h-32 border-2 border-dashed border-slate-300 bg-white rounded-lg flex flex-col items-center justify-center hover:border-blue-500 transition-colors flex-shrink-0 overflow-hidden">
                        <input type="file" multiple onChange={(e) => updateArrayItem('placesToVisit', place.id, 'imageFiles', e.target.files)} className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                        {place.imageFiles?.length > 0 ? (
                           <><CheckCircle className="text-green-500 mb-2" size={20} /><span className="text-[10px] text-green-600 font-medium text-center px-2">New Files Added</span></>
                        ) : place.image ? (
                           <img src={`${apiUrl}${place.image}`} className="w-full h-full object-cover" alt="" />
                        ) : (
                           <><UploadCloud className="text-slate-400 mb-2" size={20} /><span className="text-[10px] text-slate-500 font-medium">Upload Photos</span></>
                        )}
                      </div>
                      
                      {/* Place Details */}
                      <div className="flex-1 space-y-4">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Heading</label>
                          <input type="text" value={place.heading} onChange={(e) => updateArrayItem('placesToVisit', place.id, 'heading', e.target.value)} placeholder="Place Heading (e.g. Har Ki Pauri)" className="w-full p-2.5 border border-slate-200 rounded-lg text-sm outline-none focus:border-blue-500" />
                        </div>
                        
                        {/* Dynamic Description Paragraphs */}
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Description Paragraphs</label>
                          <div className="space-y-2">
                            {place.description.map((para, idx) => (
                              <div key={idx} className="flex gap-2">
                                <textarea value={para} onChange={(e) => {
                                  const newArr = [...place.description]; newArr[idx] = e.target.value;
                                  updateArrayItem('placesToVisit', place.id, 'description', newArr);
                                }} placeholder={`Paragraph ${idx + 1}...`} rows={2} className="w-full p-2.5 border border-slate-200 rounded-lg text-sm outline-none focus:border-blue-500 resize-none" />
                                {place.description.length > 1 && (
                                  <button type="button" onClick={() => updateArrayItem('placesToVisit', place.id, 'description', place.description.filter((_, i) => i !== idx))} className="text-slate-400 hover:text-red-500"><Trash2 size={16}/></button>
                                )}
                              </div>
                            ))}
                            <button type="button" onClick={() => updateArrayItem('placesToVisit', place.id, 'description', [...place.description, ''])} className="text-[10px] font-semibold text-blue-600 hover:underline flex items-center gap-1"><Plus size={12}/> Add Paragraph</button>
                          </div>
                        </div>

                        {/* Dynamic Quick Info Bullets */}
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Quick Info Bullets</label>
                          <div className="space-y-2">
                            {place.quickInfo.map((bullet, idx) => (
                              <div key={idx} className="flex gap-2">
                                <input type="text" value={bullet} onChange={(e) => {
                                  const newArr = [...place.quickInfo]; newArr[idx] = e.target.value;
                                  updateArrayItem('placesToVisit', place.id, 'quickInfo', newArr);
                                }} placeholder={`Bullet ${idx + 1} (e.g. 2 Days)`} className="w-full p-2 border border-slate-200 rounded-lg text-sm outline-none focus:border-blue-500" />
                                {place.quickInfo.length > 1 && (
                                  <button type="button" onClick={() => updateArrayItem('placesToVisit', place.id, 'quickInfo', place.quickInfo.filter((_, i) => i !== idx))} className="text-slate-400 hover:text-red-500"><Trash2 size={16}/></button>
                                )}
                              </div>
                            ))}
                            <button type="button" onClick={() => updateArrayItem('placesToVisit', place.id, 'quickInfo', [...place.quickInfo, ''])} className="text-[10px] font-semibold text-blue-600 hover:underline flex items-center gap-1"><Plus size={12}/> Add Bullet Point</button>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                ))}
                <button onClick={addPlace} className="text-sm font-semibold text-blue-600 flex items-center gap-1 hover:underline">
                  <Plus size={16}/> Add Place
                </button>
              </div>
            </div>

            {/* HOTELS & ROOMS */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="text-sm font-bold text-[#1a2b49] mb-5 uppercase tracking-wide">Linked Hotels</h2>
              <div className="space-y-8">
                {hotels.map((hotel) => (
                  <div key={hotel.id} className="p-5 border border-slate-200 rounded-xl space-y-5 relative group">
                    <button onClick={() => removeHotel(hotel.id)} className="absolute top-4 right-4 text-slate-400 hover:text-red-500 hidden group-hover:block transition-colors"><Trash2 size={16}/></button>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                      {/* Hotel Images */}
                      <div className="col-span-1 relative">
                        <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Hotel Images</label>
                        <div className="h-32 border-2 border-dashed border-slate-300 bg-slate-50 rounded-lg flex flex-col items-center justify-center hover:border-blue-500 transition-colors relative overflow-hidden">
                          <input type="file" multiple onChange={(e) => updateHotel(hotel.id, 'imageFiles', e.target.files)} className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                          {hotel.imageFiles?.length > 0 ? (
                            <><CheckCircle className="text-green-500 mb-2" size={24} /><p className="text-[10px] text-green-600 text-center px-2">New Files Ready</p></>
                          ) : hotel.images?.length > 0 ? (
                            <img src={`${apiUrl}${hotel.images[0]}`} className="w-full h-full object-cover" alt="" />
                          ) : (
                            <><UploadCloud className="text-slate-400 mb-2" size={24} /><p className="text-[10px] text-slate-500 text-center px-2">Upload photos</p></>
                          )}
                        </div>
                      </div>
                      
                      {/* Hotel Details */}
                      <div className="col-span-2 space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Hotel Name</label>
                            <input type="text" value={hotel.name} onChange={(e) => updateHotel(hotel.id, 'name', e.target.value)} placeholder="e.g. Ganga Lahari" className="w-full p-2 border border-slate-200 rounded-lg text-sm outline-none focus:border-blue-500" />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Price Per Night</label>
                            <input type="text" value={hotel.pricePerNight} onChange={(e) => updateHotel(hotel.id, 'pricePerNight', e.target.value)} placeholder="e.g. ₹5,000" className="w-full p-2 border border-slate-200 rounded-lg text-sm outline-none focus:border-blue-500" />
                          </div>
                        </div>

                        {/* Dynamic Hotel About Paragraphs */}
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">About Hotel</label>
                          <div className="space-y-2">
                            {hotel.about.map((para, idx) => (
                              <div key={idx} className="flex gap-2">
                                <textarea value={para} onChange={(e) => {
                                  const newArr = [...hotel.about]; newArr[idx] = e.target.value;
                                  updateHotel(hotel.id, 'about', newArr);
                                }} placeholder={`Paragraph ${idx + 1}...`} rows={2} className="w-full p-2 border border-slate-200 rounded-lg text-sm outline-none focus:border-blue-500 resize-none" />
                                {hotel.about.length > 1 && (
                                  <button type="button" onClick={() => updateHotel(hotel.id, 'about', hotel.about.filter((_, i) => i !== idx))} className="text-slate-400 hover:text-red-500"><Trash2 size={16}/></button>
                                )}
                              </div>
                            ))}
                            <button type="button" onClick={() => updateHotel(hotel.id, 'about', [...hotel.about, ''])} className="text-[10px] font-semibold text-blue-600 hover:underline flex items-center gap-1"><Plus size={12}/> Add Paragraph</button>
                          </div>
                        </div>

                        {/* Dynamic Hotel Facilities Bullets */}
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Facilities / Highlights</label>
                          <div className="space-y-2">
                            {hotel.facilities.map((bullet, idx) => (
                              <div key={idx} className="flex gap-2">
                                <input type="text" value={bullet} onChange={(e) => {
                                  const newArr = [...hotel.facilities]; newArr[idx] = e.target.value;
                                  updateHotel(hotel.id, 'facilities', newArr);
                                }} placeholder={`Facility ${idx + 1} (e.g. Free Wi-Fi)`} className="w-full p-2 border border-slate-200 rounded-lg text-sm outline-none focus:border-blue-500" />
                                {hotel.facilities.length > 1 && (
                                  <button type="button" onClick={() => updateHotel(hotel.id, 'facilities', hotel.facilities.filter((_, i) => i !== idx))} className="text-slate-400 hover:text-red-500"><Trash2 size={16}/></button>
                                )}
                              </div>
                            ))}
                            <button type="button" onClick={() => updateHotel(hotel.id, 'facilities', [...hotel.facilities, ''])} className="text-[10px] font-semibold text-blue-600 hover:underline flex items-center gap-1"><Plus size={12}/> Add Facility</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Nested Rooms */}
                    <div className="bg-white border border-slate-100 p-4 rounded-lg shadow-sm">
                      <h3 className="text-xs font-bold text-slate-600 uppercase mb-4 flex justify-between">
                        Room Types <button onClick={() => addRoom(hotel.id)} className="text-blue-500 flex items-center gap-1"><Plus size={12}/> Add Room</button>
                      </h3>
                      <div className="space-y-4">
                        {hotel.rooms.map((room) => (
                          <div key={room.id} className="flex flex-col lg:flex-row gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100 relative group/room">
                             <button onClick={() => removeRoom(hotel.id, room.id)} className="absolute top-2 right-2 text-slate-400 hover:text-red-500 hidden group-hover/room:block transition-colors"><Trash2 size={14}/></button>
                             
                             <div className="relative w-full lg:w-24 h-24 border-2 border-dashed border-slate-300 bg-white rounded-lg flex flex-col items-center justify-center hover:border-blue-500 transition-colors flex-shrink-0 overflow-hidden">
                                <input type="file" multiple onChange={(e) => updateRoom(hotel.id, room.id, 'imageFiles', e.target.files)} className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                                {room.imageFiles?.length > 0 ? (
                                    <><CheckCircle className="text-green-500 mb-1" size={16} /><span className="text-[8px] text-green-600 text-center">Ready</span></>
                                ) : room.images?.length > 0 ? (
                                    <img src={`${apiUrl}${room.images[0]}`} className="w-full h-full object-cover" alt="" />
                                ) : (
                                    <><ImageIcon size={16} className="text-slate-400 mb-1" /><span className="text-[8px] text-slate-500 text-center">Room Photo</span></>
                                )}
                             </div>

                             <div className="flex-1 space-y-4">
                               <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                 <input type="text" value={room.type} onChange={(e) => updateRoom(hotel.id, room.id, 'type', e.target.value)} placeholder="Room Type (e.g. Suite)" className="w-full p-2 border border-slate-200 rounded text-xs outline-none focus:border-blue-500" />
                                 <input type="text" value={room.bedType} onChange={(e) => updateRoom(hotel.id, room.id, 'bedType', e.target.value)} placeholder="Bed (e.g. Double)" className="w-full p-2 border border-slate-200 rounded text-xs outline-none focus:border-blue-500" />
                                 <input type="text" value={room.capacity} onChange={(e) => updateRoom(hotel.id, room.id, 'capacity', e.target.value)} placeholder="Capacity (e.g. 3)" className="w-full p-2 border border-slate-200 rounded text-xs outline-none focus:border-blue-500" />
                               </div>

                               {/* Dynamic Room Description */}
                               <div className="space-y-2">
                                  {room.description.map((para, idx) => (
                                    <div key={idx} className="flex gap-2">
                                      <textarea value={para} onChange={(e) => {
                                        const newArr = [...room.description]; newArr[idx] = e.target.value;
                                        updateRoom(hotel.id, room.id, 'description', newArr);
                                      }} placeholder={`Room Description Paragraph ${idx + 1}...`} rows={2} className="w-full p-2 border border-slate-200 rounded text-xs outline-none focus:border-blue-500 resize-none" />
                                      {room.description.length > 1 && (
                                        <button type="button" onClick={() => updateRoom(hotel.id, room.id, 'description', room.description.filter((_, i) => i !== idx))} className="text-slate-400 hover:text-red-500"><Trash2 size={14}/></button>
                                      )}
                                    </div>
                                  ))}
                                  <button type="button" onClick={() => updateRoom(hotel.id, room.id, 'description', [...room.description, ''])} className="text-[10px] font-semibold text-blue-600 hover:underline flex items-center gap-1"><Plus size={10}/> Add Paragraph</button>
                               </div>

                               {/* Dynamic Room Amenities */}
                               <div className="space-y-2">
                                  {room.amenities.map((bullet, idx) => (
                                    <div key={idx} className="flex gap-2">
                                      <input type="text" value={bullet} onChange={(e) => {
                                        const newArr = [...room.amenities]; newArr[idx] = e.target.value;
                                        updateRoom(hotel.id, room.id, 'amenities', newArr);
                                      }} placeholder={`Amenity ${idx + 1} (e.g. Ocean View)`} className="w-full p-2 border border-slate-200 rounded text-xs outline-none focus:border-blue-500" />
                                      {room.amenities.length > 1 && (
                                        <button type="button" onClick={() => updateRoom(hotel.id, room.id, 'amenities', room.amenities.filter((_, i) => i !== idx))} className="text-slate-400 hover:text-red-500"><Trash2 size={14}/></button>
                                      )}
                                    </div>
                                  ))}
                                  <button type="button" onClick={() => updateRoom(hotel.id, room.id, 'amenities', [...room.amenities, ''])} className="text-[10px] font-semibold text-blue-600 hover:underline flex items-center gap-1"><Plus size={10}/> Add Amenity</button>
                               </div>
                             </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
                <button onClick={addHotel} className="w-full py-3 border-2 border-dashed border-blue-200 rounded-xl text-blue-600 font-semibold text-sm hover:bg-blue-50 transition-colors">
                  + Add Hotel
                </button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[400px] space-y-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="text-sm font-bold text-[#1a2b49] mb-5 uppercase tracking-wide">Destination Banner</h2>
              <div className="relative border-2 border-dashed border-slate-300 bg-slate-50 rounded-lg h-32 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors overflow-hidden">
                <input type="file" onChange={(e) => setBannerFile(e.target.files[0])} className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                {bannerFile ? (
                   <><CheckCircle className="text-green-500 mb-2" size={24} /><p className="text-[10px] text-green-600 font-medium px-2">{bannerFile.name}</p></>
                ) : destData.bannerImage ? (
                   <img src={`${apiUrl}${destData.bannerImage}`} className="w-full h-full object-cover" alt="" />
                ) : (
                   <><UploadCloud className="text-slate-400 mb-2" size={24} /><p className="text-[9px] text-slate-500 text-center px-2">Update banner image</p></>
                )}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="text-sm font-bold text-[#1a2b49] mb-5 uppercase tracking-wide">Logistics</h2>
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">Getting There</label>
                  {destData.gettingThere.map(item => (
                    <div key={item.id} className="flex gap-2 mb-2">
                      <select value={item.mode} onChange={(e) => updateArrayItem('gettingThere', item.id, 'mode', e.target.value)} className="w-1/3 p-3 border border-slate-200 rounded-lg text-sm outline-none focus:border-blue-500">
                        <option value="Airport">Airport</option><option value="Train">Train</option><option value="Road">Road</option>
                      </select>
                      <input type="text" value={item.detail} onChange={(e) => updateArrayItem('gettingThere', item.id, 'detail', e.target.value)} className="w-2/3 p-3 border border-slate-200 rounded-lg text-sm outline-none focus:border-blue-500" />
                    </div>
                  ))}
                  <button onClick={addGettingThere} className="text-[10px] font-semibold text-blue-600 hover:underline">+ Add Option</button>
                </div>
                
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">Nearby Attractions</label>
                  {destData.nearbyAttractions.map(item => (
                    <div key={item.id} className="flex gap-2 mb-2">
                      <input type="text" value={item.name} onChange={(e) => updateArrayItem('nearbyAttractions', item.id, 'name', e.target.value)} className="w-2/3 p-3 border border-slate-200 rounded-lg text-sm outline-none focus:border-blue-500" />
                      <input type="text" value={item.distance} onChange={(e) => updateArrayItem('nearbyAttractions', item.id, 'distance', e.target.value)} className="w-1/3 p-3 border border-slate-200 rounded-lg text-sm outline-none focus:border-blue-500" />
                    </div>
                  ))}
                  <button onClick={addAttraction} className="text-[10px] font-semibold text-blue-600 hover:underline">+ Add Attraction</button>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">Map Iframe</label>
                  <textarea name="locationMap" value={destData.locationMap} onChange={handleDestChange} rows={3} className="w-full p-3 border border-slate-200 rounded-lg text-sm outline-none focus:border-blue-500 resize-none font-mono text-[10px]" />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-3">
               <button onClick={handleSave} className="w-full py-3 bg-[#1a2b49] text-white rounded-lg text-sm font-semibold hover:bg-[#111c33] transition-colors">
                 Update Destination
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}