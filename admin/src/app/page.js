"use client";

import React from "react";
import { 
  Map, Package, Calendar, Star, ArrowRight, 
  MapPin, ShieldCheck, Plus, 
  CheckCircle,
  Clock
} from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import Image from "next/image";

const DESTINATIONS = [
  { 
    name: "Kedarnath", 
    location: "Guptkashi, Sonprayag", 
    category: "Spiritual", 
    image: "/Images/packages/kedarnath1.webp" 
  },
  { 
    name: "Badrinath", 
    location: "Joshimath, Badrinath", 
    category: "Spiritual", 
    image: "/Images/packages/badrinath.webp" 
  },
  { 
    name: "Yamunotri", 
    location: "Barkot, Janki Chatti", 
    category: "Spiritual", 
    image: "/Images/packages/yamunotri.webp" 
  },
  { 
    name: "Gangotri", 
    location: "Uttarkashi, Gangotri", 
    category: "Spiritual", 
    image: "/Images/packages/gangotri.webp" 
  },
  { 
    name: "Jim Corbett", 
    location: "Ramnagar", 
    category: "Wildlife", 
    image: "/Images/packages/jimcorbett.webp" 
  },
  { 
    name: "Chopta", 
    location: "Tungnath, Chandrashila", 
    category: "Adventure", 
    image: "/Images/packages/chopta.webp" 
  },
  { 
    name: "Haridwar", 
    location: "Har Ki Pauri, Rishikesh", 
    category: "Spiritual", 
    image: "/Images/packages/haridwar.webp" 
  },
  { 
    name: "Kanatal", 
    location: "Chamba, Dhanaulti", 
    category: "Hill Station", 
    image: "/Images/packages/kanatal.webp" 
  },
  { 
    name: "Nainital", 
    location: "Bhimtal, Sattal", 
    category: "Hill Station", 
    image: "/Images/packages/nainital.webp" 
  },
  { 
    name: "Mussoorie", 
    location: "Dehradun, Kempty Falls", 
    category: "Hill Station", 
    image: "/Images/packages/musoorie.webp" 
  },
  { 
    name: "Ranikhet", 
    location: "Chaubatia Gardens", 
    category: "Hill Station", 
    image: "/Images/packages/ranikhet.webp" 
  },
  { 
    name: "Rishikesh", 
    location: "Laxman Jhula, Ganga Aarti", 
    category: "Adventure", 
    image: "/Images/packages/rishikesh.webp" 
  }
];


const PACKAGES = [
  { title: "Char Dham by Road", price: "₹25k", duration: "10D", status: "Popular" },
  { title: "Kedarnath Helicopter", price: "₹85k", duration: "1D", status: "Active" },
  { title: "Do Dham Air Yatra", price: "₹95k", duration: "3D", status: "Featured" },
  { title: "Badrinath Deluxe", price: "₹18k", duration: "4D", status: "New" },
  { title: "Gangotri Spiritual", price: "₹12k", duration: "3D", status: "Active" },
  { title: "Valley of Flowers", price: "₹15k", duration: "6D", status: "Seasonal" },
  { title: "Hemkund Sahib Trek", price: "₹14k", duration: "5D", status: "Active" },
  { title: "Rishikesh Adventure", price: "₹8k", duration: "2D", status: "Trending" },
  { title: "Chopta Tungnath", price: "₹10k", duration: "4D", status: "Active" },
  { title: "Auli Ski Retreat", price: "₹22k", duration: "5D", status: "Winter" },
  { title: "Yamunotri Express", price: "₹11k", duration: "3D", status: "Active" },
  { title: "Panch Kedar Trek", price: "₹35k", duration: "12D", status: "Elite" },
  { title: "Jim Corbett Safari", price: "₹9k", duration: "3D", status: "Popular" },
  { title: "Mussoorie Weekend", price: "₹7k", duration: "2D", status: "Active" }
];

const RECENT_REVIEWS = [
  { name: "Anil Sharma", rating: 5, comment: "The helicopter service was punctual and the view was breathtaking.", status: "Approved" },
  { name: "Sita Verma", rating: 4, comment: "Great experience at Jim Corbett, but the safari timing was a bit tight.", status: "Pending" },
];


export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      
      {/* --- SLIM HEADER --- */}
      <div className="flex justify-between items-center bg-white p-5 rounded-3xl border border-slate-100 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="h-10 w-1 bg-[#d8841a] rounded-full" />
          <div>
            <h1 className="text-xl font-serif italic text-slate-800 tracking-tight">Sky View Overview</h1>
            <p className="text-sm text-slate-400 uppercase tracking-widest font-medium">Session: 2026 Season</p>
          </div>
        </div>
        <button className="flex items-center gap-2 bg-[#144487] text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition-all">
          <Plus size={14} /> New Journey
        </button>
      </div>

      {/* --- MINIMAL STATS --- */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={<Map size={18} />} label="Corridors" value="24" />
        <StatCard icon={<Package size={18} />} label="Packages" value="15" />
        <StatCard icon={<Calendar size={18} />} label="Enquiries" value="45" />
        <StatCard icon={<Star size={18} />} label="Rating" value="4.8" />
      </div>

      <div className="grid lg:grid-cols-12 gap-6">
        
        {/* --- LEFT: DESTINATIONS & LIST --- */}
        <div className="lg:col-span-8 space-y-6">
          
 <section className="bg-white p-6 rounded-[2rem] border border-slate-50 shadow-sm">
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-lg font-serif italic text-slate-700">Top Corridors</h2>
    <div className="flex gap-2">
      <ArrowRight size={16} className="text-[#144487] cursor-pointer hover:translate-x-1 transition-transform" />
    </div>
  </div>

  <Swiper
    spaceBetween={12}
    slidesPerView={1.2}
    breakpoints={{
      640: { slidesPerView: 2.2 },
      1024: { slidesPerView: 3.2 },
      1280: { slidesPerView: 4.2 },
    }}
    className="pb-4 overflow-hidden"
  >
    {DESTINATIONS.map((dest, i) => (
      <SwiperSlide key={i}>
        <div className="group relative overflow-hidden rounded-2xl h-[280px] shadow-sm hover:shadow-md transition-all duration-500 cursor-pointer">
          {/* Image Layer */}
          <Image
            src={dest.image}
            alt={dest.name}
            fill
            className="absolute inset-0 object-cover object-center grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
          
          {/* Subtle Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />

          {/* Content Layer */}
          <div className="relative z-10 flex flex-col justify-end h-full p-4 text-white">
            <span className="text-[9px] font-bold uppercase tracking-widest text-[#d8841a] mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
              {dest.category}
            </span>
            <h3 className="italic text-lg font-medium leading-none mb-2 font-serif">
              {dest.name}
            </h3>
            <div className="flex items-center gap-1.5 text-[10px] font-medium opacity-80">
              <MapPin size={10} className="text-[#d8841a]" />
              <span className="truncate">{dest.location}</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>

          <section className="bg-white p-6 rounded-[2rem] border border-slate-50">
            <h2 className="text-lg font-serif italic text-slate-700 mb-5">Active Itineraries</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {PACKAGES.map((pkg, i) => (
                <div key={i} className="flex items-center justify-between p-4 border border-slate-50 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-[#144487]"><Package size={14}/></div>
                    <span className="text-sm text-slate-600 font-medium">{pkg.title}</span>
                  </div>
                  <span className="text-sm font-serif italic text-[#144487]">{pkg.price}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* --- RIGHT: LIVE LOGS --- */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-[2rem] border border-slate-50 shadow-sm">
            <h2 className="text-base font-serif italic text-slate-700 mb-6 border-b border-slate-50 pb-3">Live Logs</h2>
            <div className="space-y-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="relative pl-4 border-l border-slate-100 group">
                  <span className="absolute -left-[1.5px] top-0 h-2 w-[3px] bg-[#d8841a] opacity-0 group-hover:opacity-100 transition-all" />
                  <p className="text-[9px] text-[#d8841a] font-bold uppercase tracking-widest mb-1">Enquiry</p>
                  <h4 className="text-sm text-slate-700 font-medium">Kedar Helicopter Yatra</h4>
                  <p className="text-sm text-slate-400 italic mt-1">4 pax, senior priority</p>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 text-[10px] font-bold uppercase tracking-widest border border-dashed rounded-xl text-[#144487] border-[#144487] transition-all">
              View All Logs
            </button>
          </div>

          <div className="bg-[#144487] p-6 rounded-[2rem] text-white flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-[#d8841a] uppercase tracking-[0.2em]">Verified</p>
              <h3 className="text-sm font-serif italic">Authority Trust</h3>
            </div>
            <ShieldCheck size={24} className="opacity-40" />
          </div>

          {/* Customer Sentiments (New Reviews Section) */}
            <section className="bg-white p-6 rounded-[2rem] border border-slate-50">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-lg font-serif italic text-slate-700">Sentiments</h2>
                <Star size={16} className="text-[#d8841a]" />
              </div>
              <div className="space-y-6">
                {RECENT_REVIEWS.map((rev, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className=" font-medium text-slate-700">{rev.name}</span>
                      <div className="flex gap-0.5 text-[#d8841a]">
                        {[...Array(rev.rating)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                      </div>
                    </div>
                    <p className="text-sm text-slate-400 italic line-clamp-2 leading-relaxed">"{rev.comment}"</p>
                    <div className="flex items-center gap-1.5">
                       {rev.status === "Approved" ? <CheckCircle size={10} className="text-green-500" /> : <Clock size={10} className="text-yellow-500" />}
                       <span className={`text-[9px] font-bold uppercase tracking-tighter ${rev.status === "Approved" ? "text-green-600" : "text-yellow-600"}`}>{rev.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
        </aside>

      </div>
    </div>
  );
}

function StatCard({ icon, label, value }) {
  return (
    <div className="bg-white p-4 rounded-2xl border border-slate-50 flex items-center gap-3 shadow-sm">
      <div className="p-2.5 bg-slate-50 rounded-xl text-slate-400">{icon}</div>
      <div>
        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">{label}</p>
        <h3 className="text-lg font-serif italic text-slate-800">{value}</h3>
      </div>
    </div>
  );
}