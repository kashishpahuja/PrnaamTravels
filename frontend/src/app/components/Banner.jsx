"use client";

import React from 'react';
import Image from 'next/image';

function Banner() {
  return (
    <section className="m-4 md:mx-6 lg:mx-12 xl:mx-24">
      <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl bg-sky-100">
        
        {/* Main Background Image - Your generated temple landscape */}
        <Image 
          alt="Uttarakhand Char Dham Yatra" 
          src="/bannermobile.webp" 
          width={1080} height={1920}
          priority
          className="block lg:hidden  object-cover object-center"
        />
        <Image 
          alt="Uttarakhand Char Dham Yatra" 
          src="/banner2.webp" 
          width={1920} height={1080}
          priority
          className="hidden lg:block object-cover object-center"
        />

        {/*
        <div className="relative z-20 h-full w-full flex flex-col items-center pt-10 md:pt-20 px-6 text-center">
          
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-4 right-4 md:top-10 md:right-20 w-40 md:w-72 lg:w-96 h-auto"
          >
            <Image 
              src="/helicopter-cutout.png" // Ensure you have a transparent helicopter png
              alt="Helicopter Tour"
              width={400}
              height={200}
              className="object-contain"
            />
          </motion.div>

          {/* Main Titles */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-[#FFD700] text-3xl md:text-5xl lg:text-6xl font-serif italic mb-2 drop-shadow-md">
              Explore
            </h3>
            <h1 className="text-white text-4xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">
              UTTARAKHAND &
            </h1>
            <h2 className="text-[#FFD700] text-3xl md:text-6xl lg:text-7xl font-black mt-2 drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)] uppercase">
              Char Dham Yatra
            </h2>
          </motion.div> */}

          {/* Helicopter Tour Ribbon */}
          {/* <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            className="mt-6 flex items-center justify-center"
          >
            <div className="bg-[#FFD700] px-8 py-2 md:px-12 md:py-3 rounded-md shadow-lg transform -skew-x-12 border-y-2 border-white/50">
              <div className="transform skew-x-12 flex items-center gap-2">
                 <span className="text-red-700 text-lg md:text-2xl">🍁</span>
                 <span className="text-red-800 font-black text-lg md:text-2xl uppercase tracking-tighter">
                   Helicopter Tour
                 </span>
              </div>
            </div>
          </motion.div> */}

          {/* Feature Badges */}
          {/* <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-10">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
              <FaMapMarkerAlt className="text-red-600" />
              <span className="text-black font-bold text-xs md:text-sm">Spiritual Journey</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
              <FaHandsHelping className="text-red-800" />
              <span className="text-black font-bold text-xs md:text-sm">Sacred Temples</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
              <FaMountain className="text-red-900" />
              <span className="text-black font-bold text-xs md:text-sm">Majestic Himalayas</span>
            </div>
          </div> */}

        {/* </div>  */}

        {/* Bottom Fade for better transition to next section */}
        {/* <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/20 to-transparent z-10" /> */}
      </div>
    </section>
  );
}

export default Banner;