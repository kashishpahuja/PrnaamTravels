"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaMapMarkerAlt, FaCalendarAlt, FaSearch } from 'react-icons/fa';

function Banner() {
  return (
    <section className='m-4 md:mx-6 lg:mx-12 xl:mx-24'>
      {/* Main Hero Container */}
      <div className='relative w-full h-[600px] md:h-[750px] rounded-[2.5rem] overflow-hidden shadow-2xl'>
        
        {/* Main Background Image - High Quality priority loading */}
        <Image 
          alt='Prnaam Travels Himalayan Banner' 
          src='/Banner.webp' 
          fill
          priority
          quality={100}
          className='object-cover object-center'
        />

        {/* Multi-layered Overlays for depth (Inspired by DailyWebDesign ref) */}
        <div className='absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-transparent z-10' />
        <div className='absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/30 z-10' />

        {/* Content Layer */}
        <div className='relative z-20 h-full w-full flex flex-col justify-between p-8 md:p-16'>
          
          {/* Top Section: Main Headlines */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className='max-w-3xl mt-12 md:mt-20'
          >
            <span className='inline-block px-4 py-2 rounded-2xl bg-[#58CB5E]/20 backdrop-blur-md border border-[#58CB5E]/30 text-[#58CB5E] text-xs  tracking-widest uppercase mb-6'>
              Uttarakhand's Premier Tour Operator
            </span>
            <h1 className='text-5xl md:text-5xl font-black text-white  mb-6 drop-shadow-2xl'>
              CHAR DHAM <br />
              <span className='text-transparent bg-clip-text bg-linear-to-r from-[#58CB5E] to-white italic'>
                & Himalayan Tours
              </span>
            </h1>
            <p className='text-white/80 text-[12px] md:text-[17px] font-medium max-w-xl leading-relaxed'>
              Embark on a soul-stirring journey through the heart of Devbhoomi with 
              Prnaam Travels' curated spiritual experiences.
            </p>
          </motion.div>

    
        </div>
      </div>
    </section>
  );
}

export default Banner;