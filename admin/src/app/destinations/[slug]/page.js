'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Plus, MapPin, ArrowUpRight, Loader2, Globe } from 'lucide-react';
import Image from 'next/image';

export default function DestinationsListing() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_LOCAL_PORT}/destinations`);
        setDestinations(res.data.destinations || []);
      } catch (err) {
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDestinations();
  }, []);

  if (loading) return (
    <div className="h-96 flex flex-col items-center justify-center gap-4">
      <Loader2 className="animate-spin text-[#144487]" size={40} />
      <p className="font-serif italic text-slate-500">Loading Corridors...</p>
    </div>
  );

  return (
    <div className="space-y-10 max-w-[1600px] mx-auto">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
        <div>
          <h1 className="text-3xl font-serif italic text-slate-800 leading-tight">Managed Corridors</h1>
          <p className="text-xs text-slate-400 uppercase tracking-[0.2em] font-bold mt-2">Prnaam Travels Digital Inventory</p>
        </div>
        <Link 
          href="/destinations/new" 
          className="flex items-center justify-center gap-2 bg-[#144487] text-white px-8 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest shadow-xl shadow-blue-900/20 hover:scale-105 transition-all"
        >
          <Plus size={18} /> Add New Corridor
        </Link>
      </div>

      {/* --- GRID LISTING --- */}
      {destinations.length === 0 ? (
        <div className="bg-white border-2 border-dashed border-slate-100 rounded-[3rem] py-20 text-center">
          <Globe className="mx-auto text-slate-200 mb-4" size={48} />
          <p className="font-serif italic text-slate-400 text-lg">No destinations mapped yet.</p>
          <Link href="/destinations/new" className="text-[#144487] font-bold text-xs uppercase underline mt-4 block tracking-widest">Create your first entry</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-2">
          {destinations.map((dest) => (
            <Link 
              key={dest._id} 
              href={`/destinations/${dest.slug}`} 
              className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-50"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image 
                  src={dest.bannerImage || '/Images/placeholder.webp'} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={dest.name} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-white text-[8px] font-bold uppercase tracking-widest rounded-full">
                    Active
                  </span>
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <span className="text-[10px] font-bold text-[#d8841a] uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    Explore Depth
                  </span>
                  <h3 className="text-2xl font-serif italic mb-2 leading-none">{dest.name}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] opacity-70 flex items-center gap-1 font-medium tracking-wide">
                      <MapPin size={10} /> Uttarakhand
                    </p>
                    <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}