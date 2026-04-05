"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { FaPhoneAlt } from 'react-icons/fa'; 
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  // --- 1. LOCK SCROLL WHEN OPEN ---
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useMotionValueEvent(scrollY, "change", (latest) => {
  // 1. If the menu is open, DON'T run the hide/show logic
  if (isOpen) return; 

  if (latest < 50) {
    setIsVisible(true);
  } else if (latest > lastScrollY.current && latest > 150) {
    setIsVisible(false);
    // Remove setIsOpen(false) from here; the 'if (isOpen) return' covers it better
  } else if (latest < lastScrollY.current) {
    setIsVisible(true);
  }
  lastScrollY.current = latest;
});

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   if (latest < 50) {
  //     setIsVisible(true);
  //   } else if (latest > lastScrollY.current && latest > 150) {
  //     setIsVisible(false);
  //     setIsOpen(false); 
  //   } else if (latest < lastScrollY.current) {
  //     setIsVisible(true);
  //   }
  //   lastScrollY.current = latest;
  // });

  const destinations = [
    { name: "Char Dham Yatra", href: "#" },
    { name: "Kedarnath", href: "#" },
    { name: "Badrinath", href: "#" },
    { name: "Haridwar", href: "#" },
    { name: "Rishikesh", href: "#" },
    { name: "Mussoorie", href: "#" },
    { name: "View More", sub: ["Nainital", "Auli", "Jim Corbett", "Valley of Flowers", "Yamunotri", "Gangotri", "Chopta", "Almora"] },
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
    <>

      {/* 1. PERSISTENT TOP BAR  */}
      <div className="fixed top-0 left-0 w-full z-[120] bg-[#144487] h-[36px] flex items-center justify-center overflow-hidden">
        <motion.div 
          animate={{ x: ['-100%', '250%'] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-35deg] pointer-events-none"
        />
        <span className='relative z-10 text-white text-sm font-medium'>
          Ladakh Spiti Early Bird – Save up to ₹3,000 🎉
        </span>
      </div>

      {/* 2. MAIN NAVBAR */}
      <motion.nav 
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -120 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="fixed top-[36px] left-0 w-full z-[110] bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100"
      >
        <div className="h-[65px] px-4 md:px-6 lg:px-12 xl:px-24 flex items-center justify-between gap-6">
          <div className="shrink-0">
            <Link href="/">
              <Image src='/logo.webp' width={160} height={50} alt='Travel Logo' className='w-auto h-10 md:h-12 object-contain' />
            </Link>
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className='hidden xl:flex items-center gap-8'>
            <Link href="/" className="playpen600 text-black/90 hover:text-[#2D9344] transition-colors">Home</Link>
            <Link href="about" className="playpen600 text-black/90 hover:text-[#2D9344] transition-colors">Our Journey</Link>

            <NavItemWithDropdown title="Destinations" items={destinations} activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} dropdownKey="dest" activeSubMenu={activeSubMenu} setActiveSubMenu={setActiveSubMenu} />
            <NavItemWithDropdown title="Travel Packages" items={packages} activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} dropdownKey="pkg" activeSubMenu={activeSubMenu} setActiveSubMenu={setActiveSubMenu} isWide />

            <Link href="#" className="playpen600 text-black/90 hover:text-[#2D9344] transition-colors">Contact Us</Link>
          </div>




<div className='flex items-center gap-4'>
  {/* DESKTOP PHONE NUMBER */}
  <div className='hidden md:block'>
    <a 
      href="tel:+919876543210" 
      className='group flex items-center gap-3 px-4 py-2 bg-gray-50 rounded-full transition-all duration-300'
    >
      <div className='w-8 h-8 group-hover:bg-[#2D9344]/10 rounded-full flex items-center justify-center bg-[#144487] transition-colors duration-300'>
        <FaPhoneAlt className='group-hover:text-[#144487] text-xs text-white transition-colors duration-300' />
      </div>
      <span className='playpen600 text-[#144487]/90 text-sm font-bold tracking-tight'>
        +91-9876543210
      </span>
    </a>
  </div>

  {/* HAMBURGER TOGGLE */}
  <button 
    onClick={() => setIsOpen(!isOpen)} 
    className="xl:hidden w-10 h-10 flex flex-col justify-center items-center gap-[6px] z-[150] relative focus:outline-none"
  >
    <motion.span 
      animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
      className="w-6 h-[1.5px] bg-black block rounded-full origin-center"
    />
    <motion.span 
      animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
      className="w-6 h-[1.5px] bg-black block rounded-full"
    />
    <motion.span 
      animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
      className="w-6 h-[1.5px] bg-black block rounded-full origin-center"
    />
  </button>
</div>
        </div>

        {/* SIDEBAR MOBILE DRAWER - LEFT ALIGNED & FULL HEIGHT */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop - prevents scrolling outside */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 backdrop-blur-sm z-[130] xl:hidden"
              />
              
              {/* Drawer Container */}
              <motion.div 
                initial={{ x: '-100%' }} 
                animate={{ x: 0 }} 
                exit={{ x: '-100%' }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className='xl:hidden fixed top-0 left-0 h-screen w-[85%] max-w-[320px] bg-white shadow-2xl z-[140] flex flex-col'
              >
                {/* Header within sidebar */}
                <div className="px-6 py-3 border-b border-gray-100 flex items-center justify-between">
                  <Image src='/logo.webp' width={120} height={40} alt='Logo' className='w-auto h-10 object-contain' />
                </div>

                {/* Sidebar Links */}
                <div className='flex-1 overflow-y-auto px-6 py-4 custom-scrollbar flex flex-col'>
                  <Link href="/" onClick={() => setIsOpen(false)} className="py-2 text-[15px] playpen600 text-black/90 border-b border-gray-50 flex items-center justify-between">
                    Home
                     {/* <FaChevronRight className="text-gray-300 text-xs" /> */}
                  </Link>
                  <Link href="#" onClick={() => setIsOpen(false)} className="py-2  text-[15px] playpen600 text-black/90 border-b border-gray-50 flex items-center justify-between">
                    Our Journey
                     {/* <FaChevronRight className="text-gray-300 text-xs" /> */}
                  </Link>
                  
                  <MobileAccordionItem title="Destinations" id="dest" activeId={mobileAccordion} setActive={setMobileAccordion}>
                    <div className="flex flex-col gap-2 pt-2">
                      {destinations.map(d => (
                        <div key={d.name} className="px-3 py-1 ">
                          <p className="font-medium text-sm">{d.name}</p>
                          {d.sub && (
                            <div className="flex flex-wrap gap-2 mt-2">
                              {d.sub.map(s => (
                                <Link key={s} href="#" onClick={() => setIsOpen(false)} className="font-medium text-sm bg-white rounded-md border border-gray-400/50 p-2 text-gray-600">
                                  {s}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </MobileAccordionItem>

                  <MobileAccordionItem title="Travel Packages" id="pkg" activeId={mobileAccordion} setActive={setMobileAccordion}>
                    <div className="flex flex-col gap-2 pt-2">
                      {packages.map(p => (
                        <div key={p.name} className="px-3 py-1">
                          <p className="font-medium text-sm">{p.name}</p>
                          {p.sub && (
                            <div className="flex flex-wrap gap-2 mt-2">
                              {p.sub.map(s => (
                                <Link key={s} href="#" onClick={() => setIsOpen(false)} className="font-medium text-sm bg-white rounded-md border border-gray-400/50 p-2 text-gray-600">
                                  {s}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </MobileAccordionItem>

                  <Link href="#" onClick={() => setIsOpen(false)} className="py-2  text-[15px] playpen600 text-black/90 border-b border-gray-50 flex items-center justify-between">
                    Contact Us 
                    {/* <FaChevronRight className="text-gray-300 text-xs" /> */}
                  </Link>
                </div>
                
                {/* Fixed Footer in Sidebar */}
                <div className="p-6 border-t border-gray-100">
                  <button className='w-full bg-[#2D9344] text-white py-3.5 rounded-xl font-bold flex justify-center items-center gap-2 text-sm shadow-lg shadow-green-100'>
                    <Image src="/plain.png" width={16} height={16} alt="Helicopter" className="brightness-0 invert" />
                    Book Now
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>

      <div className="h-[100px]" />
    </>
  );
}

// --- HELPER COMPONENTS ---

function NavItemWithDropdown({ title, items, activeDropdown, setActiveDropdown, dropdownKey, activeSubMenu, setActiveSubMenu, isWide = false }) {
  const isOpen = activeDropdown === dropdownKey;
  return (
    <div className='relative' onMouseEnter={() => setActiveDropdown(dropdownKey)} onMouseLeave={() => {setActiveDropdown(null); setActiveSubMenu(null)}}>
      <button className='flex items-center gap-1 playpen600 text-black/90 hover:text-[#2D9344] py-2'>
        {title} <FaChevronDown className={`text-[8px] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: 10 }}
            className={`absolute top-full left-0 mt-0 ${isWide ? 'w-80' : 'w-64'} bg-white shadow-2xl rounded-b-2xl py-4 border border-gray-100 z-50`}
          >
            {items.map((item) => (
              <div key={item.name} className='relative' onMouseEnter={() => item.sub && setActiveSubMenu(item.name)}>
                <Link href="#" className='flex justify-between items-center px-6 py-2.5 text-sm text-gray-700 hover:bg-[#f0f9f1] hover:text-[#2D9344] font-medium transition-colors'>
                  {item.name} {item.sub && <FaChevronRight size={10} className="text-gray-300" />}
                </Link>
                {item.sub && activeSubMenu === item.name && (
                  <motion.div 
                    initial={{ opacity: 0, x: 5 }} animate={{ opacity: 1, x: 0 }}
                    className='absolute left-[95%] top-0 w-56 bg-white shadow-2xl rounded-2xl py-4 border border-gray-100 ml-2'
                  >
                    {item.sub.map(s => (
                      <Link key={s} href="#" className='block px-6 py-2 text-xs text-gray-600 hover:text-[#2D9344] hover:bg-gray-50 transition-colors'>
                        {s}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileAccordionItem({ title, id, children, activeId, setActive }) {
  const isOpen = activeId === id;
  return (
    <div className="border-b border-gray-50">
      <button 
        onClick={() => setActive(isOpen ? null : id)} 
        className="flex justify-between items-center w-full py-2  text-[15px] playpen600 text-black/90 text-left"
      >
        {title} <FaChevronDown className={`text-xs transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#2D9344]' : 'text-gray-700'}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: 'auto', opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }} 
            className="overflow-hidden"
          >
            <div className="pb-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;

// "use client";

// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaChevronDown, FaBars, FaTimes, FaChevronRight } from 'react-icons/fa';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [activeSubMenu, setActiveSubMenu] = useState(null);
//   const [mobileAccordion, setMobileAccordion] = useState(null);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       // Trigger the sticky state after scrolling 100px
//       setIsScrolled(window.scrollY > 100);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const destinations = [
//     { name: "Char Dham Yatra", href: "#" },
//     { name: "Kedarnath", href: "#" },
//     { name: "Badrinath", href: "#" },
//     { name: "Haridwar", href: "#" },
//     { name: "Rishikesh", href: "#" },
//     { name: "Mussoorie", href: "#" },
//     { 
//       name: "View More", 
//       sub: ["Nainital", "Auli", "Jim Corbett", "Valley of Flowers", "Yamunotri", "Gangotri", "Chopta", "Almora"] 
//     },
//   ];

//   const packages = [
//     { name: "Tour Packages", href: "#" },
//     { name: "Char Dham Yatra by Road", sub: ["From Haridwar", "From Rishikesh", "From Dehradun"] },
//     { name: "Char Dham by Helicopter", sub: ["From Haridwar", "From Rishikesh", "From Dehradun"] },
//     { name: "Kedarnath Yatra Packages", sub: ["Standard Package", "Deluxe Package"] },
//     { name: "Badrinath Yatra Packages", sub: ["Standard Package", "Deluxe Package"] },
//     { name: "Kedarnath Badrinath Packages", sub: ["5 Days Package", "7 Days Package"] },
//     { name: "Uttarakhand Tour Packages", sub: ["Adventure Tour", "Family Tour", "Pilgrimage Tour"] },
//   ];

//   return (
//     // Wrapper: Fixed when scrolled, Relative when at top
//     <nav className={`left-0 z-[100]  transition-all duration-500  ${
//       isScrolled ? 'fixed top-0 animate-slideDown w-full' : 'relative'
//     }`}>
//       <div className='animate-pulse text-center bg-[#144487] py-2 text-white text-sm'>Ladakh Spiti Early Bird – Save up to ₹3,000 🎉</div>
//       <div className={`
//         transition-all h-[75px] lg:h-[75px]  px-6 md:px-10 duration-500 flex items-center justify-between gap-6 

//         ${isScrolled 
//           ? '   bg-white/90 backdrop-blur-xl shadow-2xl border-white/40 py-2' 
//           : '  bg-white border-transparent py-4   '}
//       `}>
        
//         <div className="shrink-0">
//           <Link href="/">
//             <Image src='/logo.webp' width={160} height={50} alt='Travel Logo' className='w-auto h-10 md:h-12 object-contain' />
//           </Link>
//         </div>

//         {/* --- DESKTOP NAVIGATION --- */}
//         <div className='hidden xl:flex items-center gap-8'>
//           <Link href="/" className="playpen600 text-black/90 hover:text-[#2D9344] transition-colors">Home</Link>
//           <Link href="#" className="playpen600 text-black/90 hover:text-[#2D9344] transition-colors">Our Journey</Link>

//           {/* Destinations Dropdown */}
//           <div className='relative' onMouseEnter={() => setActiveDropdown('dest')} onMouseLeave={() => {setActiveDropdown(null); setActiveSubMenu(null)}}>
//             <button className='flex items-center gap-1 playpen600 text-black/90 hover:text-[#2D9344] transition-colors'>
//               Destinations <FaChevronDown className={`text-[8px] transition-transform ${activeDropdown === 'dest' ? 'rotate-180' : ''}`} />
//             </button>
//             <AnimatePresence>
//               {activeDropdown === 'dest' && (
//                 <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }}
//                   className='absolute top-full left-0 mt-4 w-64 bg-white shadow-2xl rounded-2xl py-4 border border-gray-100'>
//                   {destinations.map((item) => (
//                     <div key={item.name} className='relative group/sub' onMouseEnter={() => item.sub && setActiveSubMenu(item.name)}>
//                       <Link href="#" className='flex justify-between items-center px-6 py-2.5 text-sm text-gray-700 hover:bg-[#f0f9f1] hover:text-[#2D9344] transition-all font-medium'>
//                         {item.name}
//                         {item.sub && <FaChevronRight size={10} />}
//                       </Link>
                      
//                       {item.sub && activeSubMenu === item.name && (
//                         <div className='absolute left-full top-0 ml-1 w-56 bg-white shadow-2xl rounded-2xl py-4 border border-gray-100 grid grid-cols-1'>
//                            {item.sub.map(s => (
//                              <Link key={s} href="#" className='block px-6 py-2 text-xs text-gray-600 hover:text-[#2D9344] hover:bg-gray-50'>{s}</Link>
//                            ))}
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           {/* Packages Dropdown */}
//           <div className='relative' onMouseEnter={() => setActiveDropdown('pkg')} onMouseLeave={() => {setActiveDropdown(null); setActiveSubMenu(null)}}>
//             <button className='flex items-center gap-1 playpen600 text-black/90 hover:text-[#2D9344] transition-colors'>
//               Travel Packages <FaChevronDown className={`text-[8px] transition-transform ${activeDropdown === 'pkg' ? 'rotate-180' : ''}`} />
//             </button>
//             <AnimatePresence>
//               {activeDropdown === 'pkg' && (
//                 <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }}
//                   className='absolute top-full left-0 mt-4 w-72 bg-white shadow-2xl rounded-2xl py-4 border border-gray-100'>
//                   {packages.map((item) => (
//                     <div key={item.name} className='relative' onMouseEnter={() => item.sub && setActiveSubMenu(item.name)}>
//                       <Link href="#" className='flex justify-between items-center px-6 py-2.5 text-sm text-gray-700 hover:bg-[#f0f9f1] hover:text-[#2D9344] transition-all font-medium'>
//                         {item.name}
//                         {item.sub && <FaChevronRight size={10} />}
//                       </Link>

//                       {item.sub && activeSubMenu === item.name && (
//                         <div className='absolute left-full top-0 ml-1 w-56 bg-white shadow-2xl rounded-2xl py-4 border border-gray-100'>
//                            {item.sub.map(s => (
//                              <Link key={s} href="#" className='block px-6 py-2 text-xs text-gray-600 hover:text-[#2D9344] hover:bg-gray-50'>{s}</Link>
//                            ))}
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           <Link href="#" className="playpen600 text-black/90 hover:text-[#2D9344] transition-colors">Contact Us</Link>
//         </div>

      
//   <div className='hidden md:block'>
//   <button className='mainbutton bg-[#2D9344]'>
//     {/* Replaced SVG with Helicopter Image */}
//     <div className="helicopter-wrapper">
//       <Image 
//         src="/plain.png" 
//         alt="Helicopter" 
//         width={16} 
//         height={16} 
//         className="helicopter-img"
//       />
//     </div>
//     <span className='font-medium'>Get In Touch</span>  
//   </button>
// </div>

//        <button
//       onClick={() => setIsOpen(!isOpen)}
//       className="xl:hidden p-2 flex flex-col justify-center items-center w-10 h-10 group"
//       aria-label="Toggle Menu"
//     >
//       <div className="relative w-6 h-5 cursor-pointer">
//         {/* Top Line */}
//         <span
//           className={`absolute block h-0.5 w-6 bg-black transition-all duration-300 ease-in-out ${
//             isOpen ? 'rotate-45 top-2' : 'top-0'
//           }`}
//         ></span>

//         {/* Middle Line (Hides when open) */}
//         <span
//           className={`absolute block h-0.5 w-6 bg-black top-2 transition-all duration-300 ease-in-out ${
//             isOpen ? 'opacity-0' : 'opacity-100'
//           }`}
//         ></span>

//         {/* Bottom Line */}
//         <span
//           className={`absolute block h-0.5 w-6 bg-black transition-all duration-300 ease-in-out ${
//             isOpen ? '-rotate-45 top-2' : 'top-4'
//           }`}
//         ></span>
//       </div>
//     </button>
//       </div>

//       {/* --- MOBILE MENU --- */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
//             className='xl:hidden mx-4 mt-3 bg-white/95 backdrop-blur-xl rounded-4xl shadow-2xl border border-white/50 overflow-hidden flex flex-col max-h-[85vh]'>
//             <div className='p-6 flex flex-col gap-4 overflow-y-auto'>
//               <Link href="/" onClick={() => setIsOpen(false)} className="text-md  text-black border-b border-black/5 pb-2">Home</Link>
//               <Link href="#" onClick={() => setIsOpen(false)} className="text-md  text-black border-b border-black/5 pb-2">Our Journey</Link>
              
//               <div>
//                 <button onClick={() => setMobileAccordion(mobileAccordion === 'dest' ? null : 'dest')} className="flex justify-between items-center w-full text-md text-black border-b border-black/5 pb-2">
//                   Destinations <FaChevronDown className={`text-xs transition-transform ${mobileAccordion === 'dest' ? 'rotate-180' : ''}`} />
//                 </button>
//                 {mobileAccordion === 'dest' && (
//                   <div className="pl-4 py-3 space-y-3 bg-black/5 rounded-xl mt-2">
//                     {destinations.map(d => (
//                       <div key={d.name}>
//                         <Link href="#" className="block text-black/80 font-medium">{d.name}</Link>
//                         {d.sub && <div className="pl-4 mt-2 space-y-2 border-l-2 border-[#2D9344]/30">
//                           {d.sub.map(s => <Link key={s} href="#" onClick={() => setIsOpen(false)} className="block text-sm text-gray-500">{s}</Link>)}
//                         </div>}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <div>
//                 <button onClick={() => setMobileAccordion(mobileAccordion === 'pkg' ? null : 'pkg')} className="flex justify-between items-center w-full text-md text-black/80 border-b border-black/5 pb-2">
//                   Travel Packages <FaChevronDown className={`text-xs transition-transform ${mobileAccordion === 'pkg' ? 'rotate-180' : ''}`} />
//                 </button>
//                 {mobileAccordion === 'pkg' && (
//                   <div className="pl-4 py-3 space-y-4 bg-black/5 rounded-xl mt-2">
//                     {packages.map(p => (
//                       <div key={p.name}>
//                         <Link href="#" className="block text-black/80 text-sm leading-tight">{p.name}</Link>
//                         {p.sub && <div className="pl-4 mt-2 space-y-2 border-l-2 border-[#2D9344]/30">
//                           {p.sub.map(s => <Link key={s} href="#" onClick={() => setIsOpen(false)} className="block text-xs text-gray-500">{s}</Link>)}
//                         </div>}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <Link href="#" onClick={() => setIsOpen(false)} className="text-md text-black border-b border-black/5 pb-2">Contact Us</Link>
              
//               <div className=' '>
//                        <button className='mainbutton mx-auto'>
//                          {/* Replaced SVG with Helicopter Image */}
//                          <div className="helicopter-wrapper">
//                            <Image
//                              src="/plain.png" 
//                              alt="Helicopter" 
//                              width={16} 
//                              height={16} 
//                              className="helicopter-img"
//                            />
//                          </div>
//                          <span className='font-normal'>Plan Your Perfect Trip</span>  
//                        </button>
//                      </div>
             
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }

// export default Navbar;

// // border rounded-3xl m-4 md:m-6 lg:mx-12 xl:mx-24