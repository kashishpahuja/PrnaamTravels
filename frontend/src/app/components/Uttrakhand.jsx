'use client';
import React from "react";
import { ShieldCheck, MapPin, Users, Award } from "lucide-react";

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";

const DESTINATIONS = [
  { price: "Starting 85,000/-", title: "Kedarnath Helicopter Yatra", image: "/Images/packages/kedarnath.webp" },
  { price: "Starting 1,80,000/-", title: "Char Dham Helicopter Yatra", image: "/uttrakhand.webp" },
  { price: "Starting 75,000/-", title: "Badrinath Helicopter Yatra", image: "/badrinath.webp" },
];

const AuthorityTrustSection = () => {
  return (
    <>
      {/* --- FULL WIDTH VIDEO BANNER --- */}
      {/* <div className="relative w-full h-[300px] md:h-[450px] lg:h-[540px] overflow-hidden">
        <video
          src="/helicopter.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div> */}

      {/* --- CONTENT SECTION --- */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat bg-fixed min-h-screen flex items-center"
        style={{ backgroundImage: "url('/sky.webp')" }}
      >
        {/* OVERLAY: Gradient for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-slate-900/40 to-blue-900/70 z-10" />

        {/* Main Content Container */}
        <div className="relative z-20 w-full py-12 lg:py-24 px-4 md:px-12 lg:px-20 overflow-hidden">
          <div className="max-w-6xl mx-auto">

            {/* HEADER */}
            <div className="text-center mb-8 lg:mb-14">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-8 h-px bg-[#d8841a]" />
                <span className="text-[#d8841a] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] drop-shadow-sm">
                  Discover Uttarakhand by Air
                </span>
                <span className="w-8 h-px bg-[#d8841a]" />
              </div>
              <h3 className="text-2xl md:text-4xl font-serif italic text-white leading-tight drop-shadow-lg">
                Experience Dev Bhoomi Effortlessly<br className="hidden md:block" /> with Prnaam Travels
              </h3>
              <p className="max-w-3xl mx-auto text-white/90 mt-4 text-sm md:text-base leading-relaxed drop-shadow-md font-medium">
                Skip long journeys and reach sacred destinations in comfort with our exclusive helicopter packages.
              </p>
            </div>

            {/* DESTINATION SWIPER */}
            <div className="relative">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={16}
                slidesPerView={1.2}
                speed={800}
                grabCursor={true}
                pagination={{ 
                  clickable: true, 
                  dynamicBullets: true,
                }}
                breakpoints={{
                  640: { slidesPerView: 2, spaceBetween: 20 },
                  1024: { slidesPerView: 3, spaceBetween: 24 },
                }}
                className="pb-12"
              >
                {DESTINATIONS.map((place, idx) => (
                  <SwiperSlide key={idx} className="h-auto">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl transition-all duration-500 flex flex-col h-full group hover:-translate-y-2">
                      <div className="aspect-square rounded-t-2xl overflow-hidden">
                        <Image
                        width={440} height={440}
                          src={place.image}
                          alt={place.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="py-5 px-4">
                        <p className="text-slate-900 font-bold text-sm md:text-base tracking-tight mb-1">
                          {place.title}
                        </p>
                        <p className="text-[#144487] font-bold text-sm">
                          {place.price}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* TRUST INDICATORS */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-12 border-t border-white/20 pt-10 mt-4">
              {[
                { icon: <ShieldCheck size={20} />, label: "Safe & Reliable" },
                { icon: <MapPin size={20} />, label: "Local Expertise" },
                { icon: <Users size={20} />, label: "Senior Friendly" },
                { icon: <Award size={20} />, label: "Trusted Partner" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-white">
                  <div className="text-[#d8841a] drop-shadow-md">{item.icon}</div>
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest whitespace-nowrap drop-shadow-md">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default AuthorityTrustSection;





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
