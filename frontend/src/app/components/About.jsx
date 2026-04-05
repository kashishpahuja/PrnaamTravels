'use client';
import React from 'react';
import { MapPin, Plane, ShieldCheck, Headphones, Heart, Car } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  const destinationImages = [
   "/puri.webp",
"/uttrakhand.webp",   
   "/rameshwaram.webp",
"/dwarka.webp",   
"/badrinath.webp",   

   ];
   const packages = [
  {
    title: "Chopta Tungnath Trek",
    category: "Treks",
    duration: "2N / 3D",
    price: 7999,
    originalPrice: 8499,
    discount: "₹500 Off",
    dates: ["Mar 27", "Apr 2", "Apr 10"],
    image: "/chopta.jpg"
  },
  {
    title: "Kedarnath Luxury",
    category: "Spiritual",
    duration: "3N / 4D",
    price: 18499,
    originalPrice: 20499,
    discount: "₹2000 Off",
    dates: ["Apr 29", "May 6"],
    image: "/kedarnath.jpg"
  },
  {
    title: "Valley of Flowers",
    category: "Treks",
    duration: "5N / 6D",
    price: 10499,
    originalPrice: 12499,
    discount: "₹2000 Off",
    dates: ["Jul 3", "Jul 10"],
    image: "/valley.jpg"
  },
  {
    title: "Kedarkantha Trek",
    category: "Treks",
    duration: "5N / 6D",
    price: 7999,
    originalPrice: 8999,
    discount: "₹1000 Off",
    dates: ["On Request"],
    image: "/kedarkantha.jpg"
  },
  {
    title: "Jim Corbett + Nainital",
    category: "Weekend",
    duration: "2N / 3D",
    price: 22000,
    originalPrice: 25000,
    discount: "₹3000 Off",
    dates: ["On Request"],
    image: "/corbett.jpg"
  },
  {
    title: "Kedarnath Helicopter",
    category: "Spiritual",
    duration: "2N / 3D",
    price: null,
    dates: ["On Request"],
    image: "/heli.jpg"
  }
];

  return (
    <section className="relative w-full  py-24 font-sans text-slate-900 px-4 md:px-6 lg:px-12 xl:px-24">
      
      {/* --- TOP SECTION: CENTERED CONTENT --- */}
      <div className="max-w-4xl mx-auto text-center mb-12 relative">
        <h2 className="text-3xl md:text-4xl font-serif italic mb-4 leading-tight">
          Experience the True Essence <br /> of Uttarakhand
        </h2>
        <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
          Uttarakhand is not just a destination—it is a spiritual calling. 
          At Prnaam Travels, we understand the emotional and spiritual value of your journey to Dev Bhoomi.
        </p>
         <div className=' '>
          <button className='mainbutton mx-auto'>
            {/* Replaced SVG with Helicopter Image */}
            <div className="helicopter-wrapper">
              <Image
                src="/plain.png" 
                alt="Helicopter" 
                width={16} 
                height={16} 
                className="helicopter-img"
              />
            </div>
            <span className='font-normal'>Plan Your Perfect Trip</span>  
          </button>
        </div>

        {/* Decorative Dashed Line (Visible on Desktop) */}
        <div className="absolute top-1/2 left-0 w-full -z-10 opacity-20 block">
          <svg viewBox="0 0 1000 100" className="w-full h-24">
            <path d="M0,80 Q250,10 500,80 T1000,80" stroke="#00a3e0" strokeWidth="2" strokeDasharray="10,10" fill="none" />
          </svg>
        </div>
      </div>

<div className="max-w-full pt-16 mx-auto overflow-x-hidden grid grid-cols-2 lg:grid-cols-5 gap-4 mb-24 px-4">
  {destinationImages.slice(0, 5).map((src, index) => (
    <div
      key={index}
      className={`
        ${index === 4 ? "hidden lg:block" : "block"}
        ${index % 2 !== 0 ? "lg:-translate-y-10" : ""}
      `}
    >
      <img
        src={src}
        alt="Uttarakhand Destination"
        className="w-full aspect-[3/4] object-cover rounded-4xl shadow-sm"
      />
    </div>
  ))}
</div>
      {/* --- BOTTOM SECTION: TWO-COLUMN CONTENT --- */}
      
      
      
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Column: Detailed About Text */}
        <div className="space-y-6 px-6">
          <h3 className="text-2xl md:text-3xl font-serif italic leading-snug">
            Your Reliable Partner for <br /> Uttarakhand Tours
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Prnaam Travels is a professionally managed travel company committed to delivering authentic 
            and well-organized experiences. We specialize in Char Dham Yatra, Do Dham Yatra, 
            and Kedarnath helicopter tours designed for families and seekers.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            Our goal is to provide safe, transparent, and stress-free travel services so you can 
            focus on devotion and exploration in the heart of the Himalayas.
          </p>
       
        </div>

        {/* Right Column: Feature List with Icons */}
        <div className="space-y-4 px-6">
          {[
            { icon: <ShieldCheck size={20} />, title: 'Safe and reliable transportation with local guides' },
            { icon: <Plane size={20} />, title: 'Helicopter services for Kedarnath & Char Dham' },
            { icon: <Heart size={20} />, title: 'Comfortable accommodations and personalized itineraries' },
            { icon: <Car size={20} />, title: 'Transparent pricing and 24/7 on-ground assistance' }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 group">
              <div className="p-3 bg-white text-[#144487] rounded-xl shadow-sm border border-blue-50">
                {item.icon}
              </div>
              <p className="text-slate-700 text-sm font-medium border-b border-blue-100 pb-2 flex-1">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;