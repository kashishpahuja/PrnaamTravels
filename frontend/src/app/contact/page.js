'use client';
import React from 'react';
import { 
  Send, 
  Phone, 
  User, 
  MapPin, 
  Mail, 
  Clock, 
  CheckCircle2, 
  MessageSquare 
} from "lucide-react";

const ContactPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* --- BANNER SECTION --- */}
      <div className="relative w-full h-[300px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=2000" 
          alt="Uttarakhand Mountains" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-serif italic mb-2">Contact Us</h1>
            <p className="text-sm md:text-base tracking-widest uppercase font-light">Begin Your Divine Journey</p>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 px-4 md:px-6 lg:px-12 xl:px-24 max-w-7xl mx-auto">
        
        {/* --- INTRO SECTION --- */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-px bg-[#d8841a]" />
            <span className="text-[#d8841a] text-xs font-bold uppercase tracking-widest">Get In Touch</span>
            <span className="w-8 h-px bg-[#d8841a]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif italic mb-6 text-slate-900">
            We’re Here to Help You Plan <br /> Your Perfect Yatra
          </h2>
          <p className="text-slate-600">
            Have questions about our packages or need a custom itinerary? Reach out to our 
            travel experts and let us handle the details while you focus on the spirituality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* --- LEFT: CONTACT FORM (8 Cols) --- */}
          <div className="lg:col-span-8 bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <label className="block text-[11px] font-bold text-slate-400 uppercase mb-2 ml-1 group-focus-within:text-[#144487]">Full Name</label>
                <div className="relative">
                  <User className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input type="text" placeholder="John Doe" className="w-full pl-8 py-3 border-b-2 border-slate-100 focus:border-[#d8841a] focus:outline-none transition-all text-sm"/>
                </div>
              </div>

              <div className="group">
                <label className="block text-[11px] font-bold text-slate-400 uppercase mb-2 ml-1 group-focus-within:text-[#144487]">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input type="email" placeholder="hello@example.com" className="w-full pl-8 py-3 border-b-2 border-slate-100 focus:border-[#d8841a] focus:outline-none transition-all text-sm"/>
                </div>
              </div>

              <div className="group">
                <label className="block text-[11px] font-bold text-slate-400 uppercase mb-2 ml-1 group-focus-within:text-[#144487]">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input type="tel" placeholder="+91 00000 00000" className="w-full pl-8 py-3 border-b-2 border-slate-100 focus:border-[#d8841a] focus:outline-none transition-all text-sm"/>
                </div>
              </div>

              <div className="group">
                <label className="block text-[11px] font-bold text-slate-400 uppercase mb-2 ml-1 group-focus-within:text-[#144487]">Subject</label>
                <div className="relative">
                  <MessageSquare className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input type="text" placeholder="General Inquiry" className="w-full pl-8 py-3 border-b-2 border-slate-100 focus:border-[#d8841a] focus:outline-none transition-all text-sm"/>
                </div>
              </div>

              <div className="md:col-span-2 group">
                <label className="block text-[11px] font-bold text-slate-400 uppercase mb-2 ml-1 group-focus-within:text-[#144487]">Your Message</label>
                <textarea rows="4" placeholder="Tell us about your travel dreams..." className="w-full py-3 border-b-2 border-slate-100 focus:border-[#d8841a] focus:outline-none transition-all text-sm resize-none"></textarea>
              </div>

              <button className="md:col-span-2 bg-[#144487] text-white py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-[#d8841a] transition-all flex items-center justify-center gap-3 shadow-lg">
                Send Message <Send size={16} />
              </button>
            </form>
          </div>

          {/* --- RIGHT: INFO CARDS (4 Cols) --- */}
          <div className="lg:col-span-4 space-y-6">
            <div className=" border-b pb-2 border-slate-100 flex gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                <Phone className="text-[#d8841a]" size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm uppercase mb-1">Call Us</h4>
                <p className="text-slate-600 text-sm">+91 98765 43210</p>
                <p className="text-slate-600 text-sm">+91 12345 67890</p>
              </div>
            </div>

            <div className=" border-b pb-2 border-slate-100 flex gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                <Mail className="text-[#d8841a]" size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm uppercase mb-1">Email Us</h4>
                <p className="text-slate-600 text-sm">info@prnaamtravells.com</p>
                <p className="text-slate-600 text-sm">support@prnaam.id</p>
              </div>
            </div>

            <div className=" border-b pb-2 border-slate-100 flex gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                <MapPin className="text-[#d8841a]" size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm uppercase mb-1">Visit Office</h4>
                <p className="text-slate-600 text-sm">123 Spiritual Lane, Near Ganga Ghat, Rishikesh, Uttarakhand</p>
              </div>
            </div>

            <div className="bg-[#144487] p-8 rounded-xl text-white relative overflow-hidden">
               <div className="relative z-10">
                <h4 className="font-serif italic text-xl mb-4">Working Hours</h4>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex justify-between"><span>Mon - Fri:</span> <span>9:00 AM - 7:00 PM</span></li>
                  <li className="flex justify-between"><span>Saturday:</span> <span>10:00 AM - 4:00 PM</span></li>
                  <li className="flex justify-between text-[#d8841a] font-bold"><span>Sunday:</span> <span>Closed</span></li>
                </ul>
               </div>
               <Clock className="absolute -bottom-4 -right-4 text-white/5" size={120} />
            </div>
          </div>
        </div>

        {/* --- MAP SECTION --- */}
        <div className="mt-20 w-full h-[450px] rounded-2xl overflow-hidden border border-slate-200 grayscale-[0.5] hover:grayscale-0 transition-all duration-700 shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.74637223405!2d78.21251347625102!3d30.08692815256248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909163653c9734f%3A0x513e168444537fc!2sRishikesh%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

      </section>
    </div>
  );
};

export default ContactPage;