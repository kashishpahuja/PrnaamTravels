'use client';
import React from 'react';
import Link from "next/link";
import { ArrowUpRight, Send, Phone, User, MapPin, CheckCircle2 } from "lucide-react";
import Image from "next/image";


const YATRA_PACKAGES = [
  { title: "Nainital Tour Package", image: "/Images/category/spiritual1.webp", href: "/spiritual" },
  { title: "Chopta Tungnath Tour", image: "/Images/category/leisure1.webp", href: "/leisure" },
  { title: "Badrinath Yatra", image: "/Images/category/adventure1.webp", href: "/adventure" },
  { title: "Gangotri Yatra", image: "/Images/category/camping1.webp", href: "/camping" },
  { title: "Kedarnath Yatra", image: "/Images/category/wildlife1.webp", href: "/wildlife" },
  { title: "Valley of Flowers Trek", image: "/Images/category/family1.webp", href: "/family" },
];

export default function YatraPackages() {
  return (
    <section className="py-8 lg:py-12 px-4 md:px-6 lg:px-12 xl:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADING SECTION --- */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-px bg-[#d8841a]" />
            <span className="text-[#d8841a] text-xs font-bold uppercase tracking-widest">Prnaam Travels</span>
            <span className="w-8 h-px bg-[#d8841a]" />
          </div>
        <h2 className="text-2xl md:text-3xl font-serif italic mb-6 leading-tight text-slate-900">
  Capture Divine Moments <br /> Across Uttarakhand
</h2>

<p className="text-slate-600 text-sm md:text-base mx-auto mb-8">
  Explore breathtaking glimpses of your spiritual journey. From sacred temples to scenic Himalayan views, let Prnaam Travels plan your perfect yatra—simply share your details and we’ll take care of the rest.
</p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 xl:gap-8 items-center'>

          {/* --- LEFT: GRID LAYOUT (8 Cols) --- */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-2 xl:gap-3">
            {YATRA_PACKAGES.map((pkg, index) => (
              <Link
                key={index}
                href={pkg.href}
                className="group relative overflow-hidden h-[200px] md:h-[260px] rounded-2xl"
              >
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="absolute inset-0 object-cover"
                />
             
              </Link>
            ))}
          </div>

          {/* --- RIGHT: ENQUIRY FORM (4 Cols) --- */}
          {/* --- ENQUIRY SECTION --- */}
<div className="lg:col-span-4 lg:sticky lg:top-10">
  <div className="bg-white border border-slate-200 overflow-hidden shadow-sm">
    
    {/* Header Section with Brand Color Accent */}
    <div className="bg-slate-50 px-8 py-6 border-b border-slate-100">
      <h3 className="text-lg font-medium text-[#144487] flex items-center gap-2">
Let&apos;s plan your dream trip!
      </h3>
      <p className="text-slate-500 text-sm mt-1">
        Tell us your travel plans and get a tailored quote.
      </p>
    </div>

    {/* Form Section */}
    <div className="px-8 py-4 xl:py-10">
      <form className="space-y-5">
        
        {/* Input Field: Name */}
        <div className="group">
          <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1 group-focus-within:text-[#144487] transition-colors">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="e.g. Rahul Sharma" 
              className="w-full pl-8 pr-2 py-2 border-b-2 border-slate-100 bg-transparent text-sm focus:border-[#d8841a] focus:outline-none transition-all placeholder:text-slate-300"
            />
          </div>
        </div>

        {/* Input Field: Phone */}
        <div className="group">
          <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1 group-focus-within:text-[#144487] transition-colors">
            Phone Number
          </label>
          <div className="relative">
            <Phone className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="tel" 
              placeholder="+91 00000 00000" 
              className="w-full pl-8 pr-2 py-2 border-b-2 border-slate-100 bg-transparent text-sm focus:border-[#d8841a] focus:outline-none transition-all placeholder:text-slate-300"
            />
          </div>
        </div>

        {/* Input Field: Package */}
        <div className="group">
          <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1 group-focus-within:text-[#144487] transition-colors">
            Select Package
          </label>
          <div className="relative">
            <MapPin className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <select className="w-full pl-8 pr-2 py-2 border-b-2 border-slate-100 bg-transparent text-sm focus:border-[#d8841a] focus:outline-none appearance-none cursor-pointer text-slate-600">
              <option>Char Dham Yatra</option>
              <option>Kedarnath Special</option>
              <option>Do Dham Tour</option>
              <option>Nainital & Mussoorie</option>
            </select>
          </div>
        </div>

        {/* Submit Button - Clean & Solid */}
        <button className="w-full bg-[#144487] text-white py-4 rounded-md font-bold text-sm tracking-wide hover:bg-[#1a51a1] active:scale-[0.98] transition-all flex items-center justify-center gap-3 mt-4 shadow-md shadow-slate-200">
          Request Call Back
          <Send size={16} />
        </button>
      </form>

      {/* Trust Badge / Info */}
      <div className="mt-8 flex items-center justify-center gap-4 text-slate-400">
        <div className="flex items-center gap-1.5 border-r border-slate-200 pr-4">
          <CheckCircle2 size={14} className="text-[#d8841a]" />
          <span className="text-sm font-medium">Safe Travel</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckCircle2 size={14} className="text-[#d8841a]" />
          <span className="text-sm font-medium">Verified Expert</span>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}