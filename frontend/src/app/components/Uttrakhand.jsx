
// 'use client';
// import React from "react";
// import { ShieldCheck, MapPin, Users, Award, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

// // Swiper imports
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';

// // Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const DESTINATIONS = [
//   { price: "Starting 85,000/-", title: "Kedarnath Helicopter Yatra", image: "/Images/packages/kedarnath.webp" },
//   { price: "Starting 1,80,000/-", title: "Char Dham Helicopter Yatra", image: "/uttrakhand.webp" },
//   { price: "Starting 75,000/-", title: "Badrinath Helicopter Yatra", image: "/badrinath.webp" },
//   // { price: "Starting 95,000/-", title: "Do Dham Helicopter Yatra", image: "/mana.webp" },
// ];

// const PACKAGE_INCLUDES = [
//   "Helicopter transfers to sacred destinations",
//   "VIP Darshan assistance at temples",
//   "Luxury accommodation at premium locations",
//   "Priority boarding & minimal waiting time",
//   "All ground transfers and local logistics managed",
//   "Dedicated support team throughout the journey"
// ];

// const AuthorityTrustSection = () => {
//   return (
//     <section className="py-8 lg:py-12">
//       <div className="bg-[#fff9ed] rounded-3xl mx-4 md:mx-6 lg:mx-12 xl:mx-24 py-12 px-6 md:px-12 lg:px-20 border border-[#f0e6d2] overflow-hidden">
//         <div className="max-w-6xl mx-auto">

//           {/* HEADER */}
//           <div className="text-center mb-8 lg:mb-14">
//             <div className="flex items-center justify-center gap-2 mb-4">
//               <span className="w-8 h-px bg-[#d8841a]" />
//               <span className="text-[#d8841a] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
//                 Discover Uttarakhand by Air
//               </span>
//               <span className="w-8 h-px bg-[#d8841a]" />
//             </div>
//             <h3 className="text-xl md:text-3xl font-serif italic text-[#144487] leading-tight">
//               Experience Dev Bhoomi Effortlessly<br className="hidden md:block" /> with Prnaam Travels
//             </h3>
//             <p className="max-w-3xl mx-auto text-slate-600 mt-4 text-sm md:text-base leading-relaxed">
//               Skip long journeys and reach sacred destinations in comfort with our exclusive helicopter packages.
//             </p>
//           </div>

//           {/* DESTINATION SWIPER */}
//           <div className="relative ">
//             {/* Wrapper to contain the overflow within the tan box */}
//             <div className="">
//               <Swiper
//                 modules={[Navigation, Pagination]}
//                 spaceBetween={16}
//                 slidesPerView={1.2} // Shows a peek of the next slide on mobile
//                 speed={800}
//                 grabCursor={true}
//                 centeredSlides={false}
//                 navigation={{
//                   nextEl: '.swiper-button-next-custom',
//                   prevEl: '.swiper-button-prev-custom',
//                 }}
//                 pagination={{ 
//                   clickable: true, 
//                   dynamicBullets: true,
//                   el: '.custom-swiper-pagination'
//                 }}
//                 breakpoints={{
//                   640: { slidesPerView: 2, spaceBetween: 20 },
//                   1024: { slidesPerView: 3, spaceBetween: 24 },
//                 }}
//                 className="pb-4" // Space for card shadows
//               >
//                 {DESTINATIONS.map((place, idx) => (
//                   <SwiperSlide key={idx} className="h-auto">
//                     <div className="bg-white rounded-2xl p-2 shadow-md hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col h-full group mb-2">
//                       <div className="aspect-square rounded-t-2xl overflow-hidden">
//                         <img
//                           src={place.image}
//                           alt={place.title}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                       <div className="py-4 px-3">
//                         <p className="text-black font-medium text-sm md:text-base tracking-tight mb-1">
//                           {place.title}
//                         </p>
//                         <p className="text-[#144487] font-medium text-sm">
//                           {place.price}
//                         </p>
//                       </div>
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>

//             {/* Pagination Container */}
//             {/* <div className="custom-swiper-pagination flex justify-center mx-auto mt-6" /> */}

//             {/* Custom Navigation Buttons (Hidden on small mobile) */}
//             {/* <button className="swiper-button-prev-custom absolute left-[-15px] lg:left-[-40px] top-[40%] -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg border border-slate-100 text-[#144487] hover:bg-[#144487] hover:text-white transition-all hidden md:flex active:scale-95">
//               <ChevronLeft size={20} />
//             </button>
//             <button className="swiper-button-next-custom absolute right-[-15px] lg:right-[-40px] top-[40%] -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg border border-slate-100 text-[#144487] hover:bg-[#144487] hover:text-white transition-all hidden md:flex active:scale-95">
//               <ChevronRight size={20} />
//             </button> */}
//           </div>

//           {/* PACKAGE INCLUDES */}
//           {/* <div className="max-w-4xl mx-auto mb-16">
//             <h4 className="text-xl md:text-2xl font-serif text-[#144487] text-center mb-8">
//               What Our Uttarakhand Yatra Packages Include
//             </h4>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {PACKAGE_INCLUDES.map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex items-start gap-3 text-sm text-slate-700 bg-white/60 p-4 rounded-2xl border border-white/40 shadow-sm"
//                 >
//                   <CheckCircle size={18} className="text-[#d8841a] mt-0.5 flex-shrink-0" />
//                   <span className="leading-relaxed">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div> */}

//           {/* TRUST INDICATORS */}
//           {/* <div className="flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-12 border-t border-[#f0e6d2] pt-10">
//             {[
//               { icon: <ShieldCheck size={18} />, label: "Safe & Reliable" },
//               { icon: <MapPin size={18} />, label: "Local Expertise" },
//               { icon: <Users size={18} />, label: "Senior Friendly" },
//               { icon: <Award size={18} />, label: "Trusted Partner" }
//             ].map((item, i) => (
//               <div key={i} className="flex items-center gap-2 text-[#144487]">
//                 <div className="text-[#d8841a]">{item.icon}</div>
//                 <span className="text-[9px] md:text-xs font-bold uppercase tracking-widest whitespace-nowrap">
//                   {item.label}
//                 </span>
//               </div>
//             ))}
//           </div> */}

//         </div>
//       </div>

//       {/* <style jsx global>{`
//         .swiper-wrapper {
//           transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1) !important;
//         }

//         .custom-swiper-pagination .swiper-pagination-bullet {
//           background: #cbd5e1;
//           opacity: 1;
//           width: 8px;
//           height: 8px;
//           margin: 0 4px !important;
//           transition: all 0.3s ease;
//         }

//         .custom-swiper-pagination .swiper-pagination-bullet-active {
//           background: #144487 !important;
//           width: 20px;
//           border-radius: 4px;
//         }

//         .swiper-button-disabled {
//           opacity: 0;
//           pointer-events: none;
//         }
//       `}</style> */}
//     </section>
//   );
// };

// export default AuthorityTrustSection;

'use client';
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import { MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, Flip);

const DESTINATIONS = [
  { price: "85,000/-", title: "Kedarnath", image: "/Images/packages/kedarnath.webp" },
  { price: "1,80,000/-", title: "Char Dham", image: "/uttrakhand.webp" },
  { price: "75,000/-", title: "Badrinath", image: "/uttrakhand.webp" },
];

const HelicopterScrollSection = () => {
  const mainRef = useRef(null);
  const heliRef = useRef(null);

  useEffect(() => {
    
    // 1. Setup the Flip Animation
    const helicopter = heliRef.current;
    const containers = document.querySelectorAll(".marker-container");
    
    // We create a timeline that scrubs with scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5, // Smoothness of the flight
      }
    });

    // Move helicopter to each marker one by one
    containers.forEach((container, index) => {
      if (index === 0) return; // Skip initial position

      tl.to({}, { duration: 1 }) // Add a small pause at each station
        .add(() => {
          const state = Flip.getState(helicopter);
          container.appendChild(helicopter);
          Flip.from(state, {
            duration: 1,
            ease: "power2.inOut",
            // Add a slight "arc" to the flight
            onUpdate: function() {
                const progress = this.progress();
                const jump = Math.sin(progress * Math.PI) * -50;
                gsap.set(helicopter, { y: jump });
            }
          });
        });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={mainRef} className="relative min-h-[300vh] bg-[#fdfaf5] py-20">
      {/* BACKGROUND DECORATION */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#d8841a 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      {/* THE FLOATING HELICOPTER (Global instance) */}
      <div className="marker-container initial-pos absolute top-20 left-1/2 -translate-x-1/2 w-32 h-32 z-50">
        <img 
          ref={heliRef}
          src="/helicopter.png" // REPLACE WITH YOUR HELICOPTER PNG
          alt="Helicopter"
          className="w-full h-auto drop-shadow-2xl object-contain pointer-events-none"
        />
      </div>

      {/* CONTENT SECTIONS (Markers) */}
      <div className="relative max-w-5xl mx-auto px-6 flex flex-col gap-[60vh]">
        
        {/* Intro */}
        <div className="text-center pt-20">
          <h2 className="text-4xl md:text-6xl font-serif text-[#144487]">Your Spiritual Path, <br/>By Air</h2>
          <p className="text-slate-500 mt-4">Scroll to begin your journey</p>
        </div>

        {/* PACKAGE 1 */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 marker-container relative min-h-[250px] flex items-center justify-center border-2 border-dashed border-[#d8841a]/20 rounded-full">
             {/* Helicopter will fly here */}
          </div>
          <div className="w-full md:w-1/2 bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
             <img src={DESTINATIONS[0].image} className="w-full h-48 object-cover rounded-2xl mb-6" alt="" />
             <span className="text-[#d8841a] font-bold text-sm tracking-widest uppercase">Premium Yatra</span>
             <h3 className="text-2xl font-serif text-[#144487] mt-2">{DESTINATIONS[0].title}</h3>
             <p className="text-xl font-bold text-[#144487] mt-2">Starting {DESTINATIONS[0].price}</p>
             <button className="mt-6 w-full py-3 bg-[#144487] text-white rounded-xl font-medium">Book Seat</button>
          </div>
        </div>

        {/* PACKAGE 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10">
          <div className="w-full md:w-1/2 marker-container relative min-h-[250px] flex items-center justify-center border-2 border-dashed border-[#d8841a]/20 rounded-full">
             {/* Helicopter will fly here */}
          </div>
          <div className="w-full md:w-1/2 bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
             <img src={DESTINATIONS[1].image} className="w-full h-48 object-cover rounded-2xl mb-6" alt="" />
             <span className="text-[#d8841a] font-bold text-sm tracking-widest uppercase">Executive Tour</span>
             <h3 className="text-2xl font-serif text-[#144487] mt-2">{DESTINATIONS[1].title}</h3>
             <p className="text-xl font-bold text-[#144487] mt-2">Starting {DESTINATIONS[1].price}</p>
             <button className="mt-6 w-full py-3 bg-[#d8841a] text-white rounded-xl font-medium">Enquire Now</button>
          </div>
        </div>

        {/* PACKAGE 3 (Add more as needed) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 pb-40">
           <div className="w-full md:w-1/2 marker-container relative min-h-[250px] flex items-center justify-center border-2 border-dashed border-[#d8841a]/20 rounded-full">
             {/* Helicopter will fly here */}
          </div>
          <div className="w-full md:w-1/2 bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
             <h3 className="text-2xl font-serif text-[#144487]">Exclusive Custom Charters</h3>
             <p className="text-slate-600 mt-4 italic">Tailor your pilgrimage according to your needs with our VIP fleet.</p>
             <div className="mt-6 flex items-center gap-2 text-[#d8841a]">
                <MapPin size={18}/> <span>PAN India Coverage</span>
             </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        .marker-container {
          transition: background 0.3s;
        }
      `}</style>
    </div>
  );
};

export default HelicopterScrollSection;
