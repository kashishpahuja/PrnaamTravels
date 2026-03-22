'use client';
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';

function Banner() {
const stats = [
  { img: "/group.png", title: "50k+", sub: "Yatri Served Across India" },
  { img: "/group.png", title: "Dehradun Based", sub: "7+ Years Experience" },
  { img: "/group.png", title: "24x7 Support", sub: "Always Here to Help" }
];

  // Duplicate the array for a seamless infinite loop
  const marqueeItems = [...stats, ...stats];

  return (
    <>
    <div className="relative h-[300px] md:h-[300px] xl:h-[420px]  overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {/* Mobile image */}
        <div className="md:hidden relative h-full w-full">
          <Image
            src="/b9mobile.webp"
            alt="Mobile banner"
            fill
            className="object-cover "
            priority
          />
        </div>
        
        {/* Desktop image */}
        <div className="hidden md:block relative h-full w-full">
          <Image
            src="/b9.webp"
            alt="Desktop banner"
            width={1920} height={1080}
            className="object-cover h-full w-full "
            priority
          />
        </div>
      </div>

     
    </div>
<div className='w-full bg-white/50 border-b border-gray-100 py-4 overflow-hidden'>
      <div className='max-w-7xl mx-auto md:px-6 lg:px-12 xl:px-40'>
        
        {/* MOBILE: INFINITE MARQUEE (Hidden on XL) */}
        <div className='md:hidden flex overflow-hidden'>
          <motion.div 
            className='flex gap-12 items-center'
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              ease: "linear", 
              duration: 24, 
              repeat: Infinity 
            }}
          >
            {marqueeItems.map((item, index) => (
              <div key={index} className="flex items-center gap-3 shrink-0">
                <div className="relative w-6 h-6 shrink-0">
                  <Image src={item.img} alt={item.title} fill className="object-contain" />
                </div>
                <div className='flex flex-col text-[#144487]'>
                  <span className='text-[13px] font-bold font-serif leading-tight whitespace-nowrap'>{item.title}</span>
                  <span className='text-[10px] font-semibold tracking-wide whitespace-nowrap'>{item.sub}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* DESKTOP: STATIC ROW (Hidden on Mobile/Tablet) */}
        <div className='hidden md:flex items-center justify-between gap-6'>
          {stats.map((item, index) => (
            <div key={index} className="flex items-center gap-4 shrink-0">
              <div className="relative w-8 h-8 shrink-0">
                <Image src={item.img} alt={item.title} fill className="object-contain" />
              </div>
              <div className='flex flex-col text-[#144487]'>
                <span className='text-[15px] font-bold font-serif leading-tight whitespace-nowrap'>{item.title}</span>
                <span className='text-[11px] font-semibold tracking-wide whitespace-nowrap'>{item.sub}</span>
              </div>
              {/* Divider */}
              {index !== stats.length - 1 && (
                <div className="h-8 w-[1px] bg-gray-100 ml-12" />
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  
    </>

  )
}

export default Banner