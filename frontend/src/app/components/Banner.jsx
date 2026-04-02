'use client';
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';

function Banner() {
const stats = [
  { img: "/group.png", title: "50k+", sub: "Yatri Served Across India" },
  { img: "/map.png", title: "Dehradun Based", sub: "7+ Years Experience" },
  { img: "/support.png", title: "24x7 Support", sub: "Always Here to Help" }
  
];

  // Duplicate the array for a seamless infinite loop
  const marqueeItems = [...stats, ...stats];

  return (
    <>
    <div className="relative h-[300px] md:h-[300px] xl:h-[420px]  overflow-hidden">
      {/* Background Images */}
   <div className="absolute inset-0 overflow-hidden">
  <iframe
    src="https://www.youtube.com/embed/hkrbS3ZJ-tg?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=hkrbS3ZJ-tg&modestbranding=1"
    title="Char Dham Yatra Video"
    className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
    frameBorder="0"
    allow="autoplay; encrypted-media"
    // allowFullScreen
  ></iframe>


  <div className="absolute inset-0 bg-black/30"></div>
</div> 

{/*<video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/chardham.mp4" type="video/mp4" />
</video> */}

{/* Image section  */}
     {/* <div className="absolute inset-0">
        <div className="md:hidden relative h-full w-full">
          <Image
            src="/b9mobile.webp"
            alt="Mobile banner"
            fill
            className="object-cover "
            priority
          />
        </div>
        
        <div className="hidden md:block relative h-full w-full">
          <Image
            src="/b9.webp"
            alt="Desktop banner"
            width={1920} height={1080}
            className="object-cover h-full w-full "
            priority
          />
        </div>
      </div> */}

     
    </div>
<div className='w-full   py-6 overflow-hidden'>
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
                  <span className='text-[13px] font-bold leading-tight whitespace-nowrap'>{item.title}</span>
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
                <span className='text-[15px]  font-serif leading-tight whitespace-nowrap'>{item.title}</span>
                <span className='text-[11px] font-semibold tracking-wide whitespace-nowrap'>{item.sub}</span>
              </div>
              {/* Divider */}
              {index !== stats.length - 1 && (
                <div className="h-8 w-[1px] bg-gray-200 ml-12" />
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
   <div className="relative h-auto lg:h-[230px] xl:h-auto lg:rounded-3xl  lg:mx-12 xl:mx-24 overflow-hidden">
        
        
        <div className="relative h-full w-full">
          <Image
            src="/poster.webp"
            alt="Desktop banner"
            width={1635} height={540}
            className="object-cover object-center h-full w-full "
            priority
          />
       
      </div>

     
    </div>
    </>

  )
}

export default Banner