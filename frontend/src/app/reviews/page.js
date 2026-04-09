'use client';

import React, { useState, useMemo } from 'react';
import { Star, MapPin, Quote, ChevronLeft, ChevronRight, Users, Heart, ShieldCheck, Plane, Car, Send } from "lucide-react";
import Image from "next/image";
import About from '../components/About';

// --- DATA: JSON Structure ---
const ALL_REVIEWS = [
  { id: 1, name: "Harsh Bhatiya", rating: 5, comment: "The Pause Project gave me the space I didn’t realize I was craving. Through guided meditations, mindful exercises, and reflective sessions, I learned to release the tension, guilt, and fears I had been carrying. I left feeling refreshed.", location: "Delhi", date: "2 days ago" },
  { id: 2, name: "Rajni Malhotra", rating: 5, comment: "I didn’t realise how much I had been carrying until Prnaam Travels gave me the space to release it. Through guided sessions and gentle conversations, I confronted old fears. It was intense, yes, but so freeing.", location: "Mumbai", date: "1 week ago" },
  { id: 3, name: "Gunish", rating: 5, comment: "Joining this journey was one of the best decisions I’ve made. Every moment from the meditations to the group sessions encouraged me to look inward. It wasn’t just a break; it was a breakthrough.", location: "Punjab", date: "2 weeks ago" },
  { id: 4, name: "Shreya Sodani", rating: 5, comment: "Seeking a break from my busy routine, I found peace and clarity. The people and the calm of the mountains helped me slow down and reflect. It felt like pressing reset on my mind.", location: "Indore", date: "1 month ago" },
  { id: 5, name: "Jyoti Wadhwa", rating: 5, comment: "Unforgettable Spiti Experience! Captain Prabha was our rock. Calm, composed, and always full of positive energy, she handled every twist and turn with such grace.", location: "Chandigarh", date: "1 month ago" },
  { id: 6, name: "Harshal Gharat", rating: 5, comment: "Spiti Valley bike trip was just next level. Scenic views, smooth roads, and bikes in top shape – full paisa vasool! The team made sure we were safe and laughing every day.", location: "Pune", date: "2 months ago" },
  { id: 7, name: "Sachin Thomas", rating: 4, comment: "Had an amazing bike trip to Spiti valley with our guide Tushar. Everything was arranged very well. We had best moments of our lifetime.", location: "Kerala", date: "3 months ago" },
  { id: 8, name: "Manish Tripathi", rating: 5, comment: "Soul enriching experience! I am unable to picture myself outside of the painting of the high-altitude dessert of Himachal Pradesh. Simply breathtaking.", location: "Lucknow", date: "3 months ago" },
];

const DESTINATION_IMAGES = [
  "/Images/category/spiritual1.webp",
  "/Images/category/leisure1.webp",
  "/Images/category/adventure1.webp",
  "/Images/category/camping1.webp",
  "/Images/category/wildlife1.webp",
];

export default function ReviewsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 6;
  const totalPages = Math.ceil(ALL_REVIEWS.length / reviewsPerPage);

  // Pagination Logic
  const currentReviews = useMemo(() => {
    const start = (currentPage - 1) * reviewsPerPage;
    return ALL_REVIEWS.slice(start, start + reviewsPerPage);
  }, [currentPage]);

  return (
    <main className="w-full bg-white">
      
      {/* --- HERO BANNER SECTION --- */}
      <div className="relative h-[300px] md:h-[300px] xl:h-[320px] overflow-hidden">
           <div className="absolute inset-0">
             {/* Mobile Image */}
             <div className="md:hidden relative h-full w-full">
               <Image
                 src="/b9mobile.webp"
                 alt="Mobile banner"
                 fill
                 className="object-cover"
                 priority
               />
             </div>
             {/* Desktop Image */}
             <div className="hidden md:block relative h-full w-full">
               <Image
                 src="/about4.webp"
                 alt="Desktop banner"
                 fill
                 className="object-cover"
                 priority
               />
             </div>
             {/* Overlay */}
             <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h1 className="text-4xl md:text-5xl font-serif italic text-white text-center px-4 drop-shadow-lg">
                  Customer Reviews
                </h1>
             </div>
           </div>
         </div>

      {/* --- STATS & TEXT SECTION (Updated to your Layout) --- */}
    <About/>

      {/* --- REVIEWS FEED --- */}
      <section className="py-24 bg-slate-50/50 px-4 md:px-6 lg:px-12 xl:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between border-b border-slate-200 pb-6 mb-12">
            <h4 className="text-2xl font-serif italic text-slate-900">Guest Experiences</h4>
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Sort:</span>
              <select className="text-sm font-bold text-[#144487] bg-transparent cursor-pointer outline-none">
                <option>Newest</option>
                <option>Highest Rated</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentReviews.map((review) => (
              <div key={review.id} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative group hover:shadow-xl transition-all duration-300">
                <Quote className="absolute right-6 top-6 text-slate-100 group-hover:text-blue-50 transition-colors" size={40} />
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#d8841a] text-[#d8841a]" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 italic">
                  "{review.comment}"
                </p>
                <div className="flex items-center gap-3 pt-6 border-t border-slate-50">
                  <div className="w-10 h-10 rounded-full bg-[#144487] text-white flex items-center justify-center font-bold text-xs">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{review.name}</p>
                    <p className="text-[10px] text-slate-400 flex items-center gap-1 uppercase font-bold tracking-tighter">
                      <MapPin size={10} /> {review.location} • {review.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* --- CLICKABLE PAGINATION --- */}
          <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-slate-200 pt-12">
            <button 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 font-bold text-sm uppercase tracking-widest transition-colors ${currentPage === 1 ? 'text-slate-300 cursor-not-allowed' : 'text-[#144487] hover:text-[#d8841a]'}`}
            >
              <ChevronLeft size={20} /> Previous
            </button>

            <div className="flex items-center gap-3">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-full text-xs font-bold transition-all ${currentPage === i + 1 ? 'bg-[#144487] text-white shadow-lg' : 'bg-white text-slate-400 border border-slate-200 hover:border-[#144487]'}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-2 font-bold text-sm uppercase tracking-widest transition-colors ${currentPage === totalPages ? 'text-slate-300 cursor-not-allowed' : 'text-[#144487] hover:text-[#d8841a]'}`}
            >
              Next <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

  
    {/* --- FOOTER CTA --- */}
         <div className='pb-24 px-4 md:px-6 lg:px-12 xl:px-24'>
          <div className="relative h-auto lg:h-[230px] xl:h-[300px] lg:rounded-3xl  max-w-7xl mx-auto overflow-hidden">
                   
                   
                   <div className="relative h-full w-full">
                     <Image
                       src="/poster0.webp"
                       alt="Desktop banner"
                       width={1635} height={540}
                       className="object-cover object-center h-full w-full "
                       priority
                     />
                  
                 </div>
           
                
               </div>
         </div>
    </main>
  );
}