"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaBars, FaTimes, FaChevronRight } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Main Dropdown
  const [activeSubMenu, setActiveSubMenu] = useState(null); // Nested Side Dropdown
  const [mobileAccordion, setMobileAccordion] = useState(null); 
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const destinations = [
    { name: "Char Dham Yatra", href: "#" },
    { name: "Kedarnath", href: "#" },
    { name: "Badrinath", href: "#" },
    { name: "Haridwar", href: "#" },
    { name: "Rishikesh", href: "#" },
    { name: "Mussoorie", href: "#" },
    { 
      name: "View More", 
      sub: ["Nainital", "Auli", "Jim Corbett", "Valley of Flowers", "Yamunotri", "Gangotri", "Chopta", "Almora"] 
    },
  ];

  const packages = [
    { name: "Tour Packages", href: "#" },
    { name: "Char Dham Yatra by Road", sub: ["From Haridwar", "From Rishikesh", "From Dehradun"] },
    { name: "Char Dham by Helicopter", sub: ["From Haridwar", "From Rishikesh", "From Dehradun"] },
    { name: "Kedarnath Yatra Packages", sub: ["Standard Package", "Deluxe Package"] },
    { name: "Badrinath Yatra Packages", sub: ["Standard Package", "Deluxe Package"] },
    { name: "Kedarnath Badrinath Packages", sub: ["5 Days Package", "7 Days Package"] },
    { name: "Uttarakhand Tour Packages", sub: ["Adventure Tour", "Family Tour", "Pilgrimage Tour"] },
  ];

  return (
    <nav className='fixed top-0 left-0 w-full z-[100] transition-all duration-300'>
      <div className={`
        m-4 md:m-6 lg:mx-12 xl:mx-24 
        h-[85px] px-6 md:px-10 
        transition-all duration-500 rounded-3xl flex items-center justify-between gap-6 border
        ${isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-2xl border-white/40 py-2' 
          : 'bg-white/60 backdrop-blur-md shadow-lg border-white/20 py-4'}
      `}>
        
        <div className="shrink-0">
          <Link href="/">
            <Image src='/logo.webp' width={160} height={50} alt='Travel Logo' className='w-auto h-10 md:h-12 object-contain' />
          </Link>
        </div>

        {/* --- DESKTOP NAVIGATION --- */}
        <div className='hidden xl:flex items-center gap-8'>
          <Link href="/" className="playpen600 text-black/90 hover:text-[#2D9344] transition-colors">Home</Link>
          <Link href="#" className="playpen600 text-black/90 hover:text-[#2D9344] transition-colors">Our Journey</Link>

          {/* Destinations Dropdown */}
          <div className='relative' onMouseEnter={() => setActiveDropdown('dest')} onMouseLeave={() => {setActiveDropdown(null); setActiveSubMenu(null)}}>
            <button className='flex items-center gap-1 playpen600 text-black/90 hover:text-[#2D9344] transition-colors'>
              Destinations <FaChevronDown className={`text-[8px] transition-transform ${activeDropdown === 'dest' ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {activeDropdown === 'dest' && (
                <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }}
                  className='absolute top-full left-0 mt-4 w-64 bg-white shadow-2xl rounded-2xl py-4 border border-gray-100'>
                  {destinations.map((item) => (
                    <div key={item.name} className='relative group/sub' onMouseEnter={() => item.sub && setActiveSubMenu(item.name)}>
                      <Link href="#" className='flex justify-between items-center px-6 py-2.5 text-sm text-gray-700 hover:bg-[#f0f9f1] hover:text-[#2D9344] transition-all font-medium'>
                        {item.name}
                        {item.sub && <FaChevronRight size={10} />}
                      </Link>
                      
                      {/* Nested Side Menu for Destinations */}
                      {item.sub && activeSubMenu === item.name && (
                        <div className='absolute left-full top-0 ml-1 w-56 bg-white shadow-2xl rounded-2xl py-4 border border-gray-100 grid grid-cols-1'>
                           {item.sub.map(s => (
                             <Link key={s} href="#" className='block px-6 py-2 text-xs text-gray-600 hover:text-[#2D9344] hover:bg-gray-50'>{s}</Link>
                           ))}
                        </div>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Packages Dropdown */}
          <div className='relative' onMouseEnter={() => setActiveDropdown('pkg')} onMouseLeave={() => {setActiveDropdown(null); setActiveSubMenu(null)}}>
            <button className='flex items-center gap-1 playpen600 text-black/90 hover:text-[#2D9344] transition-colors'>
              Travel Packages <FaChevronDown className={`text-[8px] transition-transform ${activeDropdown === 'pkg' ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {activeDropdown === 'pkg' && (
                <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }}
                  className='absolute top-full left-0 mt-4 w-72 bg-white shadow-2xl rounded-2xl py-4 border border-gray-100'>
                  {packages.map((item) => (
                    <div key={item.name} className='relative' onMouseEnter={() => item.sub && setActiveSubMenu(item.name)}>
                      <Link href="#" className='flex justify-between items-center px-6 py-2.5 text-sm text-gray-700 hover:bg-[#f0f9f1] hover:text-[#2D9344] transition-all font-medium'>
                        {item.name}
                        {item.sub && <FaChevronRight size={10} />}
                      </Link>

                      {/* Nested Side Menu for Packages */}
                      {item.sub && activeSubMenu === item.name && (
                        <div className='absolute left-full top-0 ml-1 w-56 bg-white shadow-2xl rounded-2xl py-4 border border-gray-100'>
                           {item.sub.map(s => (
                             <Link key={s} href="#" className='block px-6 py-2 text-xs text-gray-600 hover:text-[#2D9344] hover:bg-gray-50'>{s}</Link>
                           ))}
                        </div>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="#" className="playpen600 text-black/90 hover:text-[#2D9344] transition-colors">Contact Us</Link>
        </div>

        <div className='hidden md:block'>
          <button className='mainbutton bg-[#2D9344]'>
            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"></path>
            </svg>
            <span>Get In Touch</span>  
          </button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className='xl:hidden p-2 text-black/90'>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className='xl:hidden mx-4 mt-3 bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/50 overflow-hidden flex flex-col max-h-[85vh]'>
            <div className='p-6 flex flex-col gap-4 overflow-y-auto'>
              <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-bold text-black border-b border-black/5 pb-2">Home</Link>
              <Link href="#" onClick={() => setIsOpen(false)} className="text-lg font-bold text-black border-b border-black/5 pb-2">Our Journey</Link>
              
              {/* Destinations Mobile */}
              <div>
                <button onClick={() => setMobileAccordion(mobileAccordion === 'dest' ? null : 'dest')} className="flex justify-between items-center w-full text-lg font-bold text-black border-b border-black/5 pb-2">
                  Destinations <FaChevronDown className={`text-xs transition-transform ${mobileAccordion === 'dest' ? 'rotate-180' : ''}`} />
                </button>
                {mobileAccordion === 'dest' && (
                  <div className="pl-4 py-3 space-y-3 bg-black/5 rounded-xl mt-2">
                    {destinations.map(d => (
                      <div key={d.name}>
                        <Link href="#" className="block text-gray-700 font-medium">{d.name}</Link>
                        {d.sub && <div className="pl-4 mt-2 space-y-2 border-l-2 border-[#2D9344]/30">
                          {d.sub.map(s => <Link key={s} href="#" onClick={() => setIsOpen(false)} className="block text-sm text-gray-500">{s}</Link>)}
                        </div>}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Packages Mobile */}
              <div>
                <button onClick={() => setMobileAccordion(mobileAccordion === 'pkg' ? null : 'pkg')} className="flex justify-between items-center w-full text-lg font-bold text-black border-b border-black/5 pb-2">
                  Travel Packages <FaChevronDown className={`text-xs transition-transform ${mobileAccordion === 'pkg' ? 'rotate-180' : ''}`} />
                </button>
                {mobileAccordion === 'pkg' && (
                  <div className="pl-4 py-3 space-y-4 bg-black/5 rounded-xl mt-2">
                    {packages.map(p => (
                      <div key={p.name}>
                        <Link href="#" className="block text-gray-800 font-bold text-sm leading-tight">{p.name}</Link>
                        {p.sub && <div className="pl-4 mt-2 space-y-2 border-l-2 border-[#2D9344]/30">
                          {p.sub.map(s => <Link key={s} href="#" onClick={() => setIsOpen(false)} className="block text-xs text-gray-500">{s}</Link>)}
                        </div>}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link href="#" onClick={() => setIsOpen(false)} className="text-lg font-bold text-black border-b border-black/5 pb-2">Contact Us</Link>
              <button className='mainbutton w-full bg-[#2D9344] text-white py-4 rounded-2xl font-bold mt-2 shadow-lg'>Plan My Trip</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;