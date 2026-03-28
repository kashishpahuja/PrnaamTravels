'use client';
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const YATRA_PACKAGES = [
  { title: "Nainital Tour Package", image: "/Images/category/spiritual1.webp", href: "/nainital-tour", price: "Starting ₹5,999" },
  { title: "Chopta Tungnath Tour", image: "/Images/category/leisure1.webp", href: "/chopta-tour", price: "Starting ₹6,499" },
  { title: "Badrinath Yatra", image: "/Images/category/adventure1.webp", href: "/badrinath-yatra", price: "Starting ₹12,000" },
  { title: "Gangotri Yatra", image: "/Images/category/camping1.webp", href: "/gangotri-yatra", price: "Starting ₹11,500" },
  { title: "Kedarnath Yatra", image: "/Images/category/wildlife1.webp", href: "/kedarnath-yatra", price: "Starting ₹14,999" },
  { title: "Valley of Flowers Trek", image: "/Images/category/family1.webp", href: "/valley-of-flowers", price: "Starting ₹8,999" },
];

export default function YatraPackages() {
  return (
    <section className="py-8 lg:py-12 mx-4 md:mx-6 lg:mx-12 xl:mx-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADING SECTION --- */}
        <div className="mb-8 text-center md:text-left">
         
          <h2 className="text-xl lg:text-3xl font-serif italic mb-6 leading-tight capitalize text-slate-900">
            Discover Destinations that Match your Preferences
          </h2>
        </div>

        {/* --- DESTINATION SWIPER --- */}
        <div className="relative mb-12">
          <div className="">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={16}
              slidesPerView={1.2} // Peek effect for mobile
              speed={800}
              grabCursor={true}
              centeredSlides={false}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              pagination={{ 
                clickable: true, 
                dynamicBullets: true,
                el: '.custom-yatra-pagination'
              }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
              }}
              className="pb-10" 
            >
              {YATRA_PACKAGES.map((pkg, idx) => (
                <SwiperSlide key={idx} className="h-auto ">
                  <Link href={pkg.href} className="block h-full">
                    <div className="h-full">
                      
                      {/* Image Container */}
                      <div className="relative">
                        <img
                          src={pkg.image}
                          alt={pkg.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>

          

                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Pagination Container */}
          {/* <div className="custom-yatra-pagination flex justify-center mx-auto mt-4" /> */}

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-[10px] lg:left-[0px] top-[45%] -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg border border-slate-100 text-[#144487] hover:bg-[#144487] hover:text-white transition-all hidden md:flex active:scale-95">
            <ChevronLeft size={16} />
          </button>
          <button className="swiper-button-next-custom absolute right-[10px] lg:right-[0px] top-[45%] -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg border border-slate-100 text-[#144487] hover:bg-[#144487] hover:text-white transition-all hidden md:flex active:scale-95">
            <ChevronRight size={16} />
          </button>
        </div>

      </div>

      {/* Optional: Add basic CSS for pagination bullets to match your brand */}
      {/* <style jsx global>{`
        .custom-yatra-pagination .swiper-pagination-bullet-active {
          background: #144487 !important;
          width: 20px !important;
          border-radius: 10px !important;
        }
        .custom-yatra-pagination .swiper-pagination-bullet {
          background: #d8841a;
        }
      `}</style> */}
    </section>
  );
}