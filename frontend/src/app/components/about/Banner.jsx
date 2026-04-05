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
    <div className="relative h-[300px] md:h-[300px] xl:h-[320px]  overflow-hidden">
      {/* Background Images */}



{/* Image section  */}
     <div className="absolute inset-0">
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
            src="/about4.webp"
            alt="Desktop banner"
            width={1920} height={1080}
            className="object-cover h-full w-full "
            priority
          />
        </div>
      </div> 

     
    </div>

<section className="py-8 px-4 md:px-6 lg:px-12 xl:px-24">
  <div className="">
    

    {/* Simple Heading */}
    <h2 className="text-2xl md:text-3xl font-serif italic  leading-tight text-slate-900">
      Who We Are?
    </h2>

    {/* Intro Paragraph */}
    <p className="text-slate-600 text-sm md:text-base mx-auto my-4 leading-relaxed">
      We are a team of passionate individuals dedicated to creating unforgettable experiences. 
      From remote adventurous journeys to relaxing beach getaways, our travel designers 
      work with you to craft personalized itineraries that discover the world through a 
      whole new perspective.
       We are a team of passionate individuals dedicated to creating unforgettable experiences. 
      From remote adventurous journeys to relaxing beach getaways, our travel designers 
      work with you to craft personalized itineraries that discover the world through a 
      whole new perspective. We are a team of passionate individuals dedicated to creating unforgettable experiences. 
      From remote adventurous journeys to relaxing beach getaways, our travel designers 
      work with you to craft personalized itineraries that discover the world through a 
      whole new perspective.
    </p>

  
  </div>
</section>
   <div className="relative h-auto lg:h-[230px] xl:h-auto lg:rounded-3xl  lg:mx-12 xl:mx-24 overflow-hidden">
        
        
        <div className="relative h-full w-full">
          <Image
            src="/about5.webp"
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