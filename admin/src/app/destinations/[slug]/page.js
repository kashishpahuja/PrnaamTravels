'use client';
import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, ImageIcon, Loader2, MapPin
} from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ViewDestinationPage() {
  const params = useParams();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

  const [loading, setLoading] = useState(true);
  const [destData, setDestData] = useState(null);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const res = await fetch(`${apiUrl}/user/destinations/content/${params.slug}`);
        const data = await res.json();
        
        if (data.success) {
          setDestData(data.destination);
          setHotels(data.hotels || []);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDestination();
  }, [params.slug]);

  if (loading || !destData) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin text-[#1a2b49]" size={40} /></div>;

  // Base styling for read-only inputs
  const readOnlyClass = "w-full p-3 border border-slate-200 rounded-lg text-sm bg-slate-50 cursor-not-allowed text-slate-600";

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen pb-24 text-slate-800 font-sans">
      <div className="bg-white px-8 py-5 flex items-center justify-between border-b border-slate-200 sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <Link href="/destinations" className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            <ArrowLeft size={18} className="text-slate-600" />
          </Link>
          <h1 className="text-2xl font-bold text-[#1a2b49]">Viewing: {destData.name}</h1>
        </div>
        <Link href={`/destinations/edit/${destData.slug}`} className="bg-amber-50 text-amber-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-amber-100 transition-colors">
          Edit Content
        </Link>
      </div>

      <div className="max-w-[1600px] mx-auto p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className="flex-1 space-y-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="text-sm font-bold text-[#1a2b49] mb-5 uppercase tracking-wide">Destination Details</h2>
              <div className="space-y-5">
                <div><label className="block text-xs font-medium text-slate-500 mb-1.5">Name</label><input type="text" value={destData.name} readOnly className={readOnlyClass} /></div>
                <div><label className="block text-xs font-medium text-slate-500 mb-1.5">Slug</label><input type="text" value={destData.slug} readOnly className={readOnlyClass} /></div>
                <div><label className="block text-xs font-medium text-slate-500 mb-1.5">Intro Heading</label><input type="text" value={destData.introHeading || ''} readOnly className={readOnlyClass} /></div>
                <div><label className="block text-xs font-medium text-slate-500 mb-1.5">Description</label><textarea value={destData.introDescription || ''} readOnly rows={4} className={`${readOnlyClass} resize-none`} /></div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="text-sm font-bold text-[#1a2b49] mb-5 uppercase tracking-wide">Places to Visit</h2>
              <div className="space-y-6">
                {destData.placesToVisit?.map((place, idx) => (
                  <div key={idx} className="p-5 border border-slate-100 bg-slate-50/50 rounded-xl">
                    <div className="flex flex-col md:flex-row gap-5">
                      <div className="w-full md:w-40 h-32 bg-slate-100 rounded-lg flex items-center justify-center overflow-hidden border border-slate-200 flex-shrink-0">
                        {place.image ? <img src={`${apiUrl}${place.image}`} className="w-full h-full object-cover" alt="" /> : <ImageIcon className="text-slate-300" />}
                      </div>
                      <div className="flex-1 space-y-3">
                        <input type="text" value={place.heading || ''} readOnly className={readOnlyClass} />
                        <textarea value={place.description || ''} readOnly rows={2} className={`${readOnlyClass} resize-none`} />
                        <input type="text" value={place.quickInfo?.join(', ') || ''} readOnly className={readOnlyClass} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="text-sm font-bold text-[#1a2b49] mb-5 uppercase tracking-wide">Linked Hotels</h2>
              <div className="space-y-8">
                {hotels.map((hotel, idx) => (
                  <div key={idx} className="p-5 border border-slate-200 rounded-xl space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      <div className="col-span-1 h-32 bg-slate-100 rounded-lg flex items-center justify-center overflow-hidden border border-slate-200">
                        {hotel.images?.length > 0 ? <img src={`${apiUrl}${hotel.images[0]}`} className="w-full h-full object-cover" alt="" /> : <ImageIcon className="text-slate-300" />}
                      </div>
                      <div className="col-span-2 space-y-3">
                        <div className="grid grid-cols-2 gap-3">
                          <div><label className="block text-xs font-medium text-slate-500 mb-1">Name</label><input type="text" value={hotel.name} readOnly className={readOnlyClass} /></div>
                          <div><label className="block text-xs font-medium text-slate-500 mb-1">Price</label><input type="text" value={hotel.pricePerNight || ''} readOnly className={readOnlyClass} /></div>
                        </div>
                        <div><label className="block text-xs font-medium text-slate-500 mb-1">About</label><textarea value={hotel.about || ''} readOnly rows={2} className={`${readOnlyClass} resize-none`} /></div>
                      </div>
                    </div>
                    
                    <div className="bg-white border border-slate-100 p-4 rounded-lg shadow-sm">
                      <h3 className="text-xs font-bold text-slate-600 uppercase mb-4">Rooms</h3>
                      <div className="space-y-4">
                        {hotel.rooms?.map((room, rIdx) => (
                          <div key={rIdx} className="flex flex-col md:flex-row gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                             <div className="w-full md:w-24 h-24 bg-white rounded-lg flex items-center justify-center overflow-hidden border border-slate-200 flex-shrink-0">
                                {room.images?.length > 0 ? <img src={`${apiUrl}${room.images[0]}`} className="w-full h-full object-cover" alt="" /> : <ImageIcon size={16} className="text-slate-300" />}
                             </div>
                             <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3">
                               <div className="space-y-3">
                                 <input type="text" value={room.type || ''} readOnly className="w-full p-2 border border-slate-200 rounded text-xs bg-slate-100 text-slate-600" />
                                 <div className="flex gap-2">
                                   <input type="text" value={room.bedType || ''} readOnly className="w-1/2 p-2 border border-slate-200 rounded text-xs bg-slate-100 text-slate-600" />
                                   <input type="text" value={room.capacity || ''} readOnly className="w-1/2 p-2 border border-slate-200 rounded text-xs bg-slate-100 text-slate-600" />
                                 </div>
                               </div>
                               <div><textarea value={room.description || ''} readOnly rows={3} className="w-full p-2 border border-slate-200 rounded text-xs bg-slate-100 text-slate-600 resize-none h-full" /></div>
                             </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[400px] space-y-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="text-sm font-bold text-[#1a2b49] mb-5 uppercase tracking-wide">Destination Banner</h2>
              <div className="bg-slate-100 rounded-lg h-40 flex flex-col items-center justify-center overflow-hidden border border-slate-200">
                {destData.bannerImage ? <img src={`${apiUrl}${destData.bannerImage}`} className="w-full h-full object-cover" alt="" /> : <><MapPin size={32} className="text-slate-300 mb-2"/><span className="text-xs text-slate-400">No Image Provided</span></>}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="text-sm font-bold text-[#1a2b49] mb-5 uppercase tracking-wide">Logistics</h2>
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">Getting There</label>
                  {destData.gettingThere?.length > 0 ? destData.gettingThere.map((item, i) => (
                    <div key={i} className="flex gap-2 mb-2">
                      <input type="text" value={item.mode} readOnly className="w-1/3 p-3 border border-slate-200 rounded-lg text-sm bg-slate-50 text-slate-600" />
                      <input type="text" value={item.detail} readOnly className="w-2/3 p-3 border border-slate-200 rounded-lg text-sm bg-slate-50 text-slate-600" />
                    </div>
                  )) : <p className="text-xs text-slate-400">None added</p>}
                </div>
                
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">Nearby Attractions</label>
                  {destData.nearbyAttractions?.length > 0 ? destData.nearbyAttractions.map((item, i) => (
                    <div key={i} className="flex gap-2 mb-2">
                      <input type="text" value={item.name} readOnly className="w-2/3 p-3 border border-slate-200 rounded-lg text-sm bg-slate-50 text-slate-600" />
                      <input type="text" value={item.distance} readOnly className="w-1/3 p-3 border border-slate-200 rounded-lg text-sm bg-slate-50 text-slate-600" />
                    </div>
                  )) : <p className="text-xs text-slate-400">None added</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}