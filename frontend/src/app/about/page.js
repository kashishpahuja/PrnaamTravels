import React from 'react';
import Image from 'next/image';

// This is a complex section requiring specific assets.
// You will need:
// 1. A clean, illustrative map of Uttarakhand and Char Dham routes.
// 2. Clear images or PNG icons for the locations (Kedarnath, etc.).
// 3. Small, specific illustrative icons (trekking, helicopter, yatra bus).
// All images must be placed in your `public/` folder. For example, `public/uttarakhand_map.png`

export default function CharDhamJourneySection() {
  // Define your journey steps. This could come from a database.
  const journeySteps = [
    {
      id: 1,
      name: "Trekking to Kedarnath",
      category: "Trekking",
      description: "A strenuous but rewarding 16km trek. Learn more about preparation and logistics.",
      icon: "/kedarnath_trekking_icon.png", // Example asset
      image: "/kedarnath_image.jpg", // A beautiful image
      top: "22%", left: "62%",
    },
    {
      id: 2,
      name: "Kedarnath by Helicopter",
      category: "Transport",
      description: "Fast and convenient. Ideal for those seeking comfort or with limited mobility.",
      icon: "/kedarnath_helicopter_icon.png", // Example asset
      image: "/kedarnath_image_2.jpg", 
      top: "18%", left: "68%",
    },
    {
      id: 3,
      name: "Yatra on Ponies/Doli",
      category: "Support",
      description: "Traditional and accessible way to Kedarnath. Learn about booking and conditions.",
      icon: "/pony_icon.png", // Example asset
      image: "/kedarnath_image_3.jpg",
      top: "26%", left: "58%",
    },
    {
      id: 4,
      name: "Guptkashi as Base",
      category: "Route Base",
      description: "The ideal starting point for your Kedarnath journey. Great accommodation and transport hub.",
      icon: "/guptkashi_icon.png", // Example asset
      top: "20%", left: "54%",
    },
  ];

  return (
    <section className="bg-stone-50 py-16 px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="max-w-screen-2xl mx-auto">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="flex items-center gap-2 justify-center mb-4">
            <span className="w-12 h-px bg-[#ff9900]" />
            <span className="text-[#ff9900] text-sm font-bold uppercase tracking-[0.2em]">Our Yatra Trail</span>
            <span className="w-12 h-px bg-[#ff9900]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif italic text-blue-950 mb-6">
            Discover Your Path to Char Dham
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            From demanding mountain trails to helicopter access and traditional support, we outline every route to ensure your Char Dham journey is smooth, meaningful, and unforgettable. Explore the possibilities across the sacred land of Uttarakhand.
          </p>
        </div>

        {/* --- MAIN INTERACTIVE MAP SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,minmax(300px,1fr)] gap-16 items-start">
          
          {/* --- LEFT SIDE: THE MAP --- */}
          <div className="relative group overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
            {/* The base map of Uttarakhand. This is crucial for positioning! */}
            <Image
              src="/uttarakhand_map.png" // Replace with your actual Uttarakhand illustrative map PNG
              alt="Uttarakhand Char Dham Route Map"
              width={1600}
              height={1000}
              className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* --- MAP PINS & INTERACTIVITY --- */}
            {journeySteps.map((step) => (
              <div 
                key={step.id} 
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group/pin"
                style={{ top: step.top, left: step.left }}
              >
                {/* THE PIN MARKER
                   Customize this div to be a complex marker like in image_0.png.
                   It can have an icon, a label, and a glow effect.
                */}
                <div className="flex items-center gap-3">
                  <div className="relative">
                    {/* The main circular glow/marker */}
                    <div className="w-8 h-8 rounded-full border-[10px] border-white/90 bg-[#ff9900] shadow-xl relative z-10 transition-all duration-300 group-hover/pin:scale-125">
                      {/* Optional central dot or smaller icon */}
                      <div className="w-4 h-4 rounded-full bg-blue-950 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                    {/* Pulsing glow animation */}
                    <div className="absolute inset-0 w-full h-full rounded-full border-[4px] border-[#ff9900]/40 animate-ping z-0"></div>
                  </div>
                  
                  {/* TEXT LABEL FOR THE PIN */}
                  <div className="bg-white px-4 py-2 rounded-xl shadow-lg border border-slate-100 min-w-[150px]">
                    <span className="text-[#ff9900] text-[9px] font-bold uppercase block mb-0.5 tracking-wider">{step.category}</span>
                    <h4 className="text-blue-950 font-bold text-sm leading-tight">{step.name}</h4>
                  </div>
                </div>

                {/* --- POPOVER / TOOLTIP on Hover --- */}
                <div className="absolute top-[-20px] left-[130px] z-50 w-[240px] opacity-0 group-hover/pin:opacity-100 transition-opacity duration-300 transform group-hover/pin:translate-y-[-10px]">
                  <div className="bg-white p-6 rounded-2xl shadow-3xl border border-slate-100">
                    <div className="bg-blue-950/5 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
                      {/* Placeholder for small specific icons (e.g., trekking, bus) */}
                      {step.icon && <Image src={step.icon} alt={step.name + " icon"} width={32} height={32} />}
                    </div>
                    <h5 className="text-xl font-serif italic text-blue-950 mb-1.5">{step.name}</h5>
                    <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                    <a href="#" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-950 hover:text-[#ff9900]">
                      Details <ArrowRightIcon className="w-4 h-4" />
                    </a>
                  </div>
                  {/* Tooltip triangle */}
                  <div className="absolute left-[-10px] top-[40px] w-0 h-0 border-t-[10px] border-t-transparent border-r-[15px] border-r-white border-b-[10px] border-b-transparent"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* --- RIGHT SIDE: JOURNEY HIGHLIGHT CARDS --- */}
          <div className="flex flex-col gap-10">
            {journeySteps.filter(step => step.image).map((step, index) => (
              <div key={step.id} className={`flex gap-6 group items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="relative h-28 w-28 md:h-36 md:w-36 flex-shrink-0 rounded-2xl overflow-hidden shadow-xl border-4 border-white transition-all group-hover:shadow-2xl">
                  {step.image && (
                    <Image
                      src={step.image}
                      alt={step.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  {/* Specific small illustrative icon */}
                  {step.icon && (
                    <div className="absolute bottom-2 right-2 bg-white p-1.5 rounded-lg shadow-md z-10 border border-slate-100">
                      <Image src={step.icon} alt={step.name + " icon"} width={24} height={24} />
                    </div>
                  )}
                </div>
                <div className="flex-1 pt-2">
                  <span className="text-[#ff9900] text-[10px] font-bold uppercase tracking-widest block mb-2">
                    {step.category}
                  </span>
                  <h4 className="text-blue-950 font-serif italic text-2xl mb-2.5 leading-tight group-hover:text-[#ff9900] transition-colors">
                    {step.name}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-blue-950 group-hover:gap-3 transition-all">
                    Explore Details <ArrowRightIcon className="w-5 h-5 text-[#ff9900]" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
        
        {/* --- DECORATIVE WATERCOLOR ELEMENT (Bottom Left) --- */}
        <div className="absolute -bottom-16 -left-16 w-64 h-64 text-sky-200/40 transform rotate-[-15deg] opacity-60 z-[-1]">
          <Image src="/blue_watercolor_splash.png" alt="Decorative splash" width={300} height={300} />
        </div>
      </div>
    </section>
  );
}

// Simple Arrow SVG component
const ArrowRightIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);