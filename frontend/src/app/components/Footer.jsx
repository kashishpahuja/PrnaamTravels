import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaFacebookF, FaInstagram, FaTwitter, FaYoutube, 
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp 
} from 'react-icons/fa';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Unified data for both directory and footer columns
  const footerLinks = {
    destinations: [
      { name: "Char Dham Yatra", href: "/char-dham" },
      { name: "Kedarnath", href: "/kedarnath" },
      { name: "Badrinath", href: "/badrinath" },
      { name: "Haridwar", href: "/haridwar" },
      { name: "Rishikesh", href: "/rishikesh" },
      { name: "Mussoorie", href: "/mussoorie" },
      { name: "Nainital", href: "/nainital" },
      { name: "Auli", href: "/auli" },
      { name: "Jim Corbett", href: "/jim-corbett" },
      { name: "Valley of Flowers", href: "/valley-of-flowers" },
      { name: "Yamunotri", href: "/yamunotri" },
      { name: "Gangotri", href: "/gangotri" },
      { name: "Chopta", href: "/chopta" },
      { name: "Almora", href: "/almora" },
    ],
    packages: [
      { name: "Char Dham by Road", href: "/packages/road" },
      { name: "Char Dham by Helicopter", href: "/packages/helicopter" },
      { name: "Kedarnath Helicopter Yatra", href: "/packages/kedarnath-heli" },
      { name: "Kedarnath Standard", href: "/packages/kedarnath-std" },
      { name: "Badrinath Deluxe", href: "/packages/badrinath-dlx" },
      { name: "5 Days Kedar-Badri", href: "/packages/kedar-badri-5" },
      { name: "7 Days Kedar-Badri", href: "/packages/kedar-badri-7" },
      { name: "Adventure Tours", href: "/packages/adventure" },
      { name: "Family Packages", href: "/packages/family" },
      { name: "Pilgrimage Tours", href: "/packages/pilgrimage" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Journey", href: "/journey" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Cancellation Policy", href: "/cancellation" },
    ],
    support: [
      { name: "Contact Us", href: "/contact" },
      { name: "Pay Online", href: "/pay" },
      { name: "Customer Reviews", href: "/reviews" },
      { name: "Travel Guide", href: "/guide" },
    ]
  };

  return (
    <footer className=" border-t border-gray-200">
      
     {/* --- 1. SEO Site Directory Section (Prnaam Travels Theme) --- */}
<section className="bg py-8 lg:py-12  px-4 md:px-6 lg:px-12 xl:px-24 border-y border-slate-200">
  <div className="">
    
    {/* Section Header */}
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
      <div className="max-w-2xl">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-8 h-px bg-[#d8841a]" />
          <span className="text-[#d8841a] text-[10px] font-bold uppercase tracking-[0.2em]">Quick Access</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-serif italic text-slate-900 leading-tight">
          Explore Sacred Trails <br /> & Scenic Escapes
        </h2>
      </div>
      <p className="text-slate-500 text-sm max-w-xs border-l border-slate-300 pl-4 hidden lg:block">
        Navigate through our most loved pilgrimage routes and leisure getaways across the Himalayas.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
      
      {/* 1. Destinations Column */}
      <div className="space-y-6">
        <h3 className="text-[#144487] font-bold text-xs uppercase tracking-widest flex items-center gap-3">
          Popular Destinations
          <span className="flex-1 h-px bg-slate-200" />
        </h3>
        <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
          {footerLinks.destinations.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href}
                className="text-[14px] text-slate-600 hover:text-[#d8841a] hover:translate-x-1 transition-all duration-200 flex items-center group"
              >
                <span className="w-1 h-1 bg-slate-300 rounded-full mr-2 group-hover:bg-[#d8841a] transition-colors" />
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 2. Pilgrimage Packages Column */}
      <div className="space-y-6">
        <h3 className="text-[#144487] font-bold text-xs uppercase tracking-widest flex items-center gap-3">
          Spiritual Packages
          <span className="flex-1 h-px bg-slate-200" />
        </h3>
        <ul className="space-y-3">
          {footerLinks.packages.slice(0, 7).map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href}
                className="text-[14px] text-slate-600 hover:text-[#d8841a] hover:translate-x-1 transition-all duration-200 block border-b border-transparent hover:border-slate-200 pb-1"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 3. Luxury & Specialized Column */}
      <div className="space-y-6">
        <h3 className="text-[#144487] font-bold text-xs uppercase tracking-widest flex items-center gap-3">
          Special Experiences
          <span className="flex-1 h-px bg-slate-200" />
        </h3>
        <ul className="space-y-3">
          {footerLinks.packages.slice(7).map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href}
                className="text-[14px] text-slate-600 hover:text-[#d8841a] hover:translate-x-1 transition-all duration-200 block border-b border-transparent hover:border-slate-200 pb-1"
              >
                {link.name}
              </Link>
            </li>
          ))}
          {/* Helper Links */}
          {footerLinks.support.slice(1, 3).map((link) => (
            <li key={link.name} className="pt-2">
              <Link 
                href={link.href}
                className="text-[13px] font-medium text-[#144487] flex items-center gap-2 group"
              >
                {link.name}
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#d8841a]" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </div>
  </div>
</section>

      {/* 2. Main Footer Content */}
      <div className=" py-8 lg:py-12  px-4 md:px-6 lg:px-12 xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <Link href="/">
              <Image src='/logo.webp' width={180} height={60} alt='Travel Logo' className='h-12 w-auto object-contain' />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Experience the divine beauty of Uttarakhand with our curated pilgrimage and adventure tours. We specialize in Char Dham Yatra, Helicopter services, and Himalayan treks.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<FaFacebookF />} href="#" />
              <SocialIcon icon={<FaInstagram />} href="#" />
              <SocialIcon icon={<FaTwitter />} href="#" />
              <SocialIcon icon={<FaYoutube />} href="#" />
            </div>
          </div>

          {/* Column 2: Quick Links (Using shortened list for space) */}
          <div>
            <h4 className="text-[#144487] font-bold mb-6 uppercase tracking-wider text-sm">Top Religious Tours</h4>
            <ul className="space-y-4">
              {footerLinks.destinations.slice(0, 5).map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-600 hover:text-[#2D9344] text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-[#144487] font-bold mb-6 uppercase tracking-wider text-sm">Our Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-600 hover:text-[#2D9344] text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-5">
            <h4 className="text-[#144487] font-bold mb-6 uppercase tracking-wider text-sm">Get In Touch</h4>
            <div className="flex items-start gap-3 text-sm text-gray-600">
              <FaMapMarkerAlt className="text-[#2D9344] mt-1 shrink-0" />
              <p>123, Dev Bhoomi Tower, Main Road, Dehradun, Uttarakhand - 248001</p>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <FaPhoneAlt className="text-[#2D9344] shrink-0" />
              <a href="tel:+919876543210" className="hover:text-[#2D9344] transition-colors">+91-9876543210</a>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <FaEnvelope className="text-[#2D9344] shrink-0" />
              <a href="mailto:info@yourtravel.com" className="hover:text-[#2D9344] transition-colors">info@yourtravel.com</a>
            </div>
          
          </div>
        </div>
      </div>

      {/* 3. Bottom Bar */}
      <div className="border-t border-gray-200 py-6 ">
        <div className="max-w-7xl mx-auto px-4 md:px-12 xl:px-24 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © {currentYear} Your Travel Name. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
             <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" width={50} height={20} alt="PayPal" className="h-4 w-auto grayscale opacity-60" />
             <Image src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" width={40} height={20} alt="Visa" className="h-3 w-auto grayscale opacity-60" />
             <Image src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" width={30} height={20} alt="Mastercard" className="h-5 w-auto grayscale opacity-60" />
          </div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white p-2 rounded-full shadow-2xl hover:scale-110 transition-transform md:bottom-10 md:right-10"
      >
        <FaWhatsapp size={28} />
      </a>
    </footer>
  );
};

const SocialIcon = ({ icon, href }) => (
  <Link 
    href={href} 
    className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-[#144487] hover:text-white hover:border-[#144487] transition-all duration-300 shadow-sm"
  >
    {icon}
  </Link>
);

export default Footer;