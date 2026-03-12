"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCheckCircle, FaAward, FaMapMarkedAlt } from 'react-icons/fa';

const AboutSection = () => {
  const highlights = [
    "Professional Planning & Expertise",
    "Seamless Helicopter & Road Transport",
    "24/7 On-Ground Assistance"
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-12 xl:mx-24 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Visual Storytelling */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Main Image - Himalayan Scenic Reference */}
          <div className="relative h-[400px] md:h-[550px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
            <Image 
              src="/image_aad87b.jpg" // Using the enhanced valley image
              alt="Majestic Uttarakhand Valley"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Floating Experience Card */}
          <div className="absolute -bottom-6 -right-4 md:right-10 bg-white p-6 rounded-2xl shadow-2xl z-20 border-b-4 border-[#2D9344]">
            <div className="flex items-center gap-4">
              <div className="bg-[#58CB5E]/10 p-3 rounded-full">
                <FaAward className="text-3xl text-[#2D9344]" />
              </div>
              <div>
                <p className="text-2xl font-black text-gray-800">12+ Years</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Of Local Expertise</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col space-y-6"
        >
          <div className="space-y-2">
            <span className="text-[#58CB5E] font-black uppercase tracking-[0.3em] text-xs md:text-sm flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#58CB5E]"></span> 
              Welcome to Prnaam Travels
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
              Your Reliable Partner for <br />
              <span className="text-[#2D9344]">Uttarakhand Tours</span>
            </h2>
          </div>

          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            Prnaam Travels is a professionally managed <strong>Uttarakhand travel company</strong> committed to delivering authentic, comfortable, and well-organized travel experiences across the Dev Bhoomi. As a trusted <strong>Uttarakhand tour operator</strong>, we specialize in Char Dham Yatra, Do Dham Yatra, and Kedarnath helicopter tours.
          </p>

          <p className="text-gray-600 leading-relaxed text-sm md:text-base italic border-l-4 border-[#58CB5E] pl-4">
            "With in-depth local knowledge, we take care of every detail—from travel planning to on-ground assistance in Haridwar, Rishikesh, Badrinath, and beyond."
          </p>

          {/* Icon List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-800 font-bold text-sm">
                <FaCheckCircle className="text-[#58CB5E]" />
                {item}
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="pt-4">
             <button className="mainbutton bg-[#2D9344]">
               <div className="helicopter-wrapper">
                 <Image 
                   src="/helicopter.png" 
                   alt="Helicopter Icon" 
                   width={24} 
                   height={24} 
                   className="helicopter-img"
                 />
               </div>
               <span className="font-bold text-white">Learn More About Us</span>
             </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;