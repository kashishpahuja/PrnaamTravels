'use client';
import React from 'react';
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

// Swiper Components and Styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

const YATRA_PACKAGES = [
  {
    title: "Kedarnath",
    image: "/Images/packages/kedarnath1.webp",
    href: "/kedarnath-yatra",
    locations: ["Haridwar", "Guptkashi", "Sonprayag", "Kedarnath"]
  },
  {
    title: "Badrinath",
    image: "/Images/packages/badrinath.webp",
    href: "/badrinath-yatra",
    locations: ["Haridwar", "Joshimath", "Badrinath"]
  },
  {
    title: "Gangotri",
    image: "/Images/packages/gangotri.webp",
    href: "/gangotri-yatra",
    locations: ["Haridwar", "Uttarkashi", "Gangotri"]
  },
  {
    title: "Yamunotri",
    image: "/Images/packages/yamunotri.webp",
    href: "/yamunotri-yatra",
    locations: ["Haridwar", "Barkot", "Janki Chatti", "Yamunotri"]
  },
  {
    title: "Nainital",
    image: "/Images/packages/nainital.webp",
    href: "/nainital-tour",
    locations: ["Kathgodam", "Nainital", "Bhimtal", "Sattal"]
  },
  {
    title: "Mussoorie",
    image: "/Images/packages/musoorie.webp",
    href: "/mussoorie-tour",
    locations: ["Dehradun", "Mussoorie", "Kempty Falls"]
  },
  {
    title: "Rishikesh",
    image: "/Images/packages/rishikesh.webp",
    href: "/rishikesh-tour",
    locations: ["Haridwar", "Rishikesh"]
  },
  {
    title: "Haridwar",
    image: "/Images/packages/haridwar.webp",
    href: "/haridwar-tour",
    locations: ["Haridwar", "Rishikesh"]
  },
  {
    title: "Ranikhet",
    image: "/Images/packages/ranikhet.webp",
    href: "/ranikhet-tour",
    locations: ["Ranikhet", "Chaubatia Gardens"]
  },
  {
    title: "Jim Corbett",
    image: "/Images/packages/jimcorbett.webp",
    href: "/jim-corbett-tour",
    locations: ["Ramnagar", "Jim Corbett National Park"]
  },
  {
    title: "Kanatal",
    image: "/Images/packages/kanatal.webp",
    href: "/kanatal-tour",
    locations: ["Chamba", "Kanatal", "Dhanaulti"]
  },
  {
    title: "Chopta",
    image: "/Images/packages/chopta.webp",
    href: "/chopta-tour",
    locations: ["Rudraprayag", "Chopta", "Tungnath", "Chandrashila"]
  }
];

export default function YatraPackages() {
  const CardContent = ({ pkg }) => (
    <>
      <Image
        src={pkg.image}
        alt={pkg.title}
        fill
        className="absolute inset-0 object-cover object-center transition-transform duration-500"
      />
      {/* <div className="absolute inset-0  bg-gradient-to-t from-black/90 via-black/20 to-transparent" /> */}
      <div className="relative  z-10  flex flex-col justify-end h-full text-white">
       <div className='backdrop-blur-lg px-6 py-2'>
         <h3 className="x italic text-lg font-medium mb-1">{pkg.title}</h3>
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider  opacity-80">
          Explore
          <ArrowUpRight size={14} />
        </div>
        
        </div>

      </div>
    </>
  );

  return (
    <section className="py-8 lg:py-12 px-4 md:px-6 lg:px-12 xl:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADING SECTION --- */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-serif italic mb-3 leading-tight text-slate-900">
            Experience the True Essence <br /> of Uttarakhand
          </h2>
          {/* <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto ">
            Uttarakhand is not just a destination—it is a spiritual calling. 
          </p> */}
        </div>

        {/* --- MOBILE: EFFECT CARDS (Smooth UI) --- */}
        {/* --- MOBILE: EFFECT CARDS --- */}
<div className="md:hidden flex justify-center items-center overflow-visible">
  <Swiper
    effect={'cards'}
    grabCursor={true}
    modules={[EffectCards, Autoplay]}
    // ADD THESE TWO PROPS:
    loop={true} 
    autoplay={{ 
      delay: 3000, 
      disableOnInteraction: false,
      pauseOnMouseEnter: true 
    }}
    cardsEffect={{
      slideShadows: true,
      perSlideOffset: 8,
      perSlideRotate: 2,
    }}
    className="w-[280px] h-[400px] sm:w-[320px] sm:h-[450px]"
  >
    {YATRA_PACKAGES.map((pkg, index) => (
      <SwiperSlide key={index} className="rounded-2xl overflow-hidden shadow-xl">
        <Link href={pkg.href} className="relative block w-full h-full">
          <CardContent pkg={pkg} />
        </Link>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

        {/* --- DESKTOP: GRID LAYOUT --- */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {YATRA_PACKAGES.map((pkg, index) => (
            <Link
              key={index}
              href={pkg.href}
              className="group relative overflow-hidden rounded-2xl h-[300px] shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <CardContent pkg={pkg} />
            </Link>
          ))}
        </div>
      </div>

      {/* Optimized Custom Styles for Effect Cards */}
      <style jsx global>{`
        .swiper {
          overflow: visible !important; /* Critical for showing the stacked cards behind */
        }
        .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          font-weight: bold;
          color: #fff;
        }
        .swiper-slide-shadow {
          border-radius: 2rem !important;
        }
      `}</style>
    </section>
  );
}


// 'use client';
// import React from 'react';
// import Link from "next/link";
// import { ArrowUpRight } from "lucide-react";
// import Image from "next/image";

// // Swiper Components and Styles
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCards, Autoplay } from 'swiper/modules';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-cards';

// const YATRA_PACKAGES = [
//   { title: "Char Dham Yatra", image: "/badrinath.webp", href: "/char-dham-yatra" },
//   { title: "Kedarnath Yatra", image: "/uttrakhand.webp", href: "/kedarnath-yatra" },
//   { title: "Badrinath Yatra", image: "/dwarka.webp", href: "/badrinath-yatra" },
//   { title: "Do Dham Yatra", image: "/puri.webp", href: "/do-dham-yatra" },
//   { title: "Yamunotri Yatra", image: "/badrinath.webp", href: "/yamunotri-yatra" },
//   { title: "Gangotri Yatra", image: "/badrinath.webp", href: "/gangotri-yatra" },
//   { title: "Hemkund Sahib", image: "/badrinath.webp", href: "/hemkund-sahib" },
//   { title: "Valley of Flowers", image: "/badrinath.webp", href: "/valley-of-flowers" },
//   { title: "Chopta Tungnath", image: "/badrinath.webp", href: "/chopta-trek" },
//   { title: "Auli Skiing", image: "/badrinath.webp", href: "/auli-tour" },
//   { title: "Mussoorie Tour", image: "/badrinath.webp", href: "/mussoorie-gateway" },
//   { title: "Rishikesh Adventure", image: "/badrinath.webp", href: "/rishikesh-yoga" },
// ];

// export default function YatraPackages() {
//   // Extracting CardContent to a component to keep the main return clean
//   const CardContent = ({ pkg }) => (
//     <>
//       <Image
//         src={pkg.image}
//         alt={pkg.title}
//         fill
//         className="absolute inset-0 object-cover transition-transform duration-500"
//       />
//       {/* Fallback gradient for better text readability */}
//       <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
//       <div className="relative z-10 p-5 flex flex-col justify-end h-full text-white">
//         <h3 className="italic text-xl mb-1">{pkg.title}</h3>
//         <div className="flex items-center gap-2 text-xs font-medium tracking-wider opacity-90">
//           Explore Packages
//           <ArrowUpRight size={14} />
//         </div>
//       </div>
//     </>
//   );

//   return (
//     <section className="py-24 bg-white px-4 md:px-6 lg:px-12 xl:px-24 overflow-hidden">
//       <div className="max-w-7xl mx-auto">
        
//         {/* --- HEADING SECTION --- */}
//         <div className="max-w-4xl mx-auto text-center mb-16 relative">
//           <h2 className="text-3xl md:text-5xl font-serif italic mb-6 leading-tight text-slate-900">
//             Experience the True Essence <br /> of Uttarakhand
//           </h2>
//           <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
//             Uttarakhand is not just a destination—it is a spiritual calling. 
//             At Prnaam Travels, we understand the emotional and spiritual value of your journey.
//           </p>
          
//           <button className='mainbutton mx-auto flex items-center gap-3 px-8 py-3'>
//             <div className="w-5 h-5 relative">
//               <Image 
//                 src="/plain.png" 
//                 alt="Helicopter" 
//                 fill 
//                 className="helicopter-wrapper object-contain brightness-0" 
//               />
//             </div>
//             <span className='font-medium text-sm'>Plan Your Perfect Trip</span>  
//           </button>

//           {/* Decorative Path (Hidden on Mobile) */}
//           <div className="absolute top-1/2 left-0 w-full -z-10 opacity-10 hidden lg:block">
//             <svg viewBox="0 0 1000 100" className="w-full h-24">
//               <path d="M0,80 Q250,10 500,80 T1000,80" stroke="#144487" strokeWidth="2" strokeDasharray="10,10" fill="none" />
//             </svg>
//           </div>
//         </div>

//         {/* --- MOBILE: EFFECT CARDS --- */}
//         <div className="lg:hidden flex justify-center items-center py-10">
//           <Swiper
//             effect={'cards'}
//             grabCursor={true}
//             modules={[EffectCards, Autoplay]}
//             autoplay={{ delay: 3000, disableOnInteraction: false }}
//             className="w-[280px] h-[400px] sm:w-[320px] sm:h-[450px]"
//           >
//             {YATRA_PACKAGES.map((pkg, index) => (
//               <SwiperSlide key={index} className="rounded-3xl overflow-hidden shadow-2xl">
//                 <Link href={pkg.href} className="relative block w-full h-full group">
//                   <CardContent pkg={pkg} />
//                 </Link>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* --- DESKTOP: GRID LAYOUT --- */}
//         <div className="hidden lg:grid grid-cols-3 xl:grid-cols-4 gap-6">
//           {YATRA_PACKAGES.map((pkg, index) => (
//             <Link
//               key={index}
//               href={pkg.href}
//               className="group relative overflow-hidden rounded-[2rem] h-[380px] shadow-sm hover:shadow-2xl transition-all duration-500"
//             >
//               <CardContent pkg={pkg} />
//             </Link>
//           ))}
//         </div>
//       </div>

//       <style jsx global>{`
//         .swiper-cards {
//           overflow: visible !important;
//         }
//         .swiper-slide-shadow {
//           background: rgba(0,0,0,0.2) !important;
//           border-radius: 1.5rem;
//         }
//       `}</style>
//     </section>
//   );
// }