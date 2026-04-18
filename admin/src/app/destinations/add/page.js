'use client';
import React, { useState } from 'react';
import { 
  ArrowLeft, UploadCloud, Plus, Trash2, Save, 
  MapPin, Plane, Train, Hotel, Bed, 
  ImageIcon
} from 'lucide-react';
import Link from 'next/link';
import { toast } from 'react-toastify';

export default function AddDestinationPage() {
  // --- STATE MANAGEMENT ---
  const [destData, setDestData] = useState({
    name: '', slug: '', introHeading: '', introDescription: '',
    placesToVisit: [{ id: Date.now(), heading: '', description: '', quickInfo: '' }],
    gettingThere: [{ id: Date.now(), mode: 'Airport', detail: '' }],
    nearbyAttractions: [{ id: Date.now(), name: '', distance: '' }],
    locationMap: ''
  });

  const [hotels, setHotels] = useState([{
    id: Date.now(), name: '', rating: 5, pricePerNight: '', about: '', facilities: '',
    rooms: [{ id: Date.now(), type: 'Deluxe Double Room', bedType: 'Double Bed', capacity: '3', description: '' }]
  }]);

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

  const addPlace = () => setDestData({ ...destData, placesToVisit: [...destData.placesToVisit, { id: Date.now(), heading: '', description: '', quickInfo: '' }] });
  const addHotel = () => setHotels([...hotels, { id: Date.now(), name: '', rating: 5, pricePerNight: '', about: '', facilities: '', rooms: [] }]);
  const addRoom = (hotelId) => {
    setHotels(hotels.map(h => h.id === hotelId ? { ...h, rooms: [...h.rooms, { id: Date.now(), type: '', bedType: '', capacity: '', description: '' }] } : h));
  };

  const handleSave = () => {
    console.log("Saving Destination:", destData);
    console.log("Saving Hotels:", hotels);
    toast.success("Destination & Hotels Saved Successfully!");
  };

  return (
    <div className="w-full min-h-screen pb-24 text-slate-800 font-sans">
      
      {/* --- HEADER --- */}
      <div className="px-8 py-5 flex items-center justify-between border-b border-slate-200 sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <Link href="/destinations" className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            <ArrowLeft size={18} className="text-slate-600" />
          </Link>
          <h1 className="text-2xl font-bold text-[#1a2b49]">New Destination</h1>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* ========================================== */}
          {/* LEFT COLUMN: CONTENT & DATA                */}
          {/* ========================================== */}
          <div className="flex-1 space-y-8">
            
            {/* 1. Destination Description */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="text-sm font-bold text-[#1a2b49] mb-5 uppercase tracking-wide">Destination Details</h2>
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">Destination Name</label>
                  <input type="text" name="name" value={destData.name} onChange={handleDestChange} placeholder="e.g. Haridwar" className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">URL Slug</label>
                  <input type="text" name="slug" value={destData.slug} readOnly className="w-full p-3 border border-slate-200 rounded-lg bg-slate-50 text-slate-400 text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">Intro Heading</label>
                  <input type="text" name="introHeading" value={destData.introHeading} onChange={handleDestChange} placeholder="Gateway to the Gods" className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="block text-xs font-medium text-slate-500">Editorial Description</label>
                  </div>
                  <textarea name="introDescription" value={destData.introDescription} onChange={handleDestChange} rows={4} className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm resize-none" placeholder="Write a compelling introduction..." />
                </div>
              </div>
            </div>

            {/* 2. Places to Visit */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-sm font-bold text-[#1a2b49] uppercase tracking-wide">Places to Visit</h2>
              </div>
              <div className="space-y-6">
                {destData.placesToVisit.map((place, i) => (
                  <div key={place.id} className="p-5 border border-slate-100 bg-slate-50/50 rounded-xl space-y-4">
                    <input type="text" placeholder="Place Heading (e.g. Har Ki Pauri)" className="w-full p-3 border border-slate-200 rounded-lg text-sm outline-none focus:border-blue-500" />
                    <textarea placeholder="Description..." rows={3} className="w-full p-3 border border-slate-200 rounded-lg text-sm outline-none focus:border-blue-500 resize-none" />
                    <input type="text" placeholder="Bullet Points (Comma separated, e.g. 2 Days, Entry Free)" className="w-full p-3 border border-slate-200 rounded-lg text-sm outline-none focus:border-blue-500" />
                  </div>
                ))}
                <button onClick={addPlace} className="text-sm font-semibold text-blue-600 flex items-center gap-1 hover:underline">
                  <Plus size={16}/> Add Another Place
                </button>
              </div>
            </div>

            {/* 3. Hotels & Rooms */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-sm font-bold text-[#1a2b49] uppercase tracking-wide">Linked Hotels</h2>
              </div>
              
              <div className="space-y-8">
                {hotels.map((hotel, hIdx) => (
                  <div key={hotel.id} className="p-5 border border-slate-200 rounded-xl space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-500 mb-1">Hotel Name</label>
                        <input type="text" placeholder="e.g. Ganga Lahari" className="w-full p-3 border border-slate-200 rounded-lg text-sm outline-none focus:border-blue-500" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-500 mb-1">Price Per Night</label>
                        <input type="text" placeholder="e.g. ₹5,000" className="w-full p-3 border border-slate-200 rounded-lg text-sm outline-none focus:border-blue-500" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1">About Hotel</label>
                      <textarea rows={2} placeholder="Brief description..." className="w-full p-3 border border-slate-200 rounded-lg text-sm outline-none focus:border-blue-500 resize-none" />
                    </div>
                    
                    {/* Nested Rooms */}
                    <div className="bg-white border border-slate-100 p-4 rounded-lg shadow-sm">
                      <h3 className="text-xs font-bold text-slate-600 uppercase mb-4 flex justify-between">
                        Room Types <button onClick={() => addRoom(hotel.id)} className="text-blue-500 flex items-center gap-1"><Plus size={12}/> Add Room</button>
                      </h3>
                      <div className="space-y-4">
                        {hotel.rooms.map((room, rIdx) => (
                          <div key={room.id} className="grid grid-cols-1 md:grid-cols-3 gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                             <div className="col-span-1 space-y-3">
                               <input type="text" placeholder="Type (e.g. Suite)" className="w-full p-2 border border-slate-200 rounded text-xs outline-none" />
                               <input type="text" placeholder="Bed (e.g. Double)" className="w-full p-2 border border-slate-200 rounded text-xs outline-none" />
                             </div>
                             <div className="col-span-2">
                               <textarea placeholder="Room Description..." rows={3} className="w-full p-2 border border-slate-200 rounded text-xs outline-none resize-none h-full" />
                             </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
                <button onClick={addHotel} className="w-full py-3 border-2 border-dashed border-blue-200 rounded-xl text-blue-600 font-semibold text-sm hover:bg-blue-50 transition-colors">
                  + Add New Hotel to {destData.name || 'Destination'}
                </button>
              </div>
            </div>

          </div>

          {/* ========================================== */}
          {/* RIGHT COLUMN: IMAGES, LOGISTICS & PUBLISH  */}
          {/* ========================================== */}
          <div className="w-full lg:w-[400px] space-y-8">

            {/* 1. Master Media Upload (Matches Reference Image) */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="text-sm font-bold text-[#1a2b49] mb-5 uppercase tracking-wide">Destination Images</h2>
              
              <div className="grid grid-cols-3 gap-3">
                {/* Main Large Image Slot */}
                <div className="col-span-1 bg-slate-100 rounded-lg h-32 flex items-center justify-center overflow-hidden">
                   <div className="text-center p-2">
                     <ImageIcon className="mx-auto text-slate-400 mb-1" size={20} />
                     <p className="text-[9px] text-slate-500 font-medium">Banner</p>
                   </div>
                </div>
                
                {/* Dashed Upload Box */}
                <div className="col-span-1 border-2 border-dashed border-slate-300 bg-slate-50 rounded-lg h-32 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors">
                   <UploadCloud className="text-slate-400 mb-2" size={24} />
                   <p className="text-[9px] text-slate-500 text-center px-2">Drop images or click to browse</p>
                </div>

                {/* Small Thumbnail Slots */}
                <div className="col-span-1 flex flex-col gap-3 h-32">
                  <div className="flex-1 bg-slate-100 rounded-lg flex items-center justify-center border border-slate-200">
                     <ImageIcon size={14} className="text-slate-300" />
                  </div>
                  <div className="flex-1 bg-slate-100 rounded-lg flex items-center justify-center border border-slate-200">
                     <ImageIcon size={14} className="text-slate-300" />
                  </div>
                </div>
              </div>
              <p className="text-[10px] text-slate-400 mt-3 text-center">First image will be used as the hero banner.</p>
            </div>

            {/* 2. Logistics & Map */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="text-sm font-bold text-[#1a2b49] mb-5 uppercase tracking-wide">Logistics</h2>
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">Getting There</label>
                  <div className="flex gap-2">
                    <select className="w-1/3 p-3 border border-slate-200 rounded-lg text-sm outline-none">
                      <option>Airport</option>
                      <option>Train</option>
                    </select>
                    <input type="text" placeholder="Detail (e.g. 34km)" className="w-2/3 p-3 border border-slate-200 rounded-lg text-sm outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">Nearby Attractions</label>
                  <div className="flex gap-2">
                    <input type="text" placeholder="Name" className="w-2/3 p-3 border border-slate-200 rounded-lg text-sm outline-none" />
                    <input type="text" placeholder="KM" className="w-1/3 p-3 border border-slate-200 rounded-lg text-sm outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">Google Maps Iframe</label>
                  <textarea rows={3} placeholder="<iframe src='...'></iframe>" className="w-full p-3 border border-slate-200 rounded-lg text-sm outline-none focus:border-blue-500 resize-none font-mono text-[10px]" />
                </div>
              </div>
            </div>

            {/* 3. Action Buttons (Matches Reference) */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-3">
               <button onClick={handleSave} className="w-full py-3 bg-[#1a2b49] text-white rounded-lg text-sm font-semibold hover:bg-blue-900 transition-colors">
                 Add Destination
               </button>
               <button className="w-full py-3 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors">
                 Save as Draft
               </button>
               <button className="w-full py-3 text-red-500 text-sm font-semibold hover:underline">
                 Discard
               </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}