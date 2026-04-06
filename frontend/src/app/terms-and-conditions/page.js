'use client';
import React from 'react';
import Image from 'next/image';

// --- THE DATA DICTIONARY ---
const POLICY_CONTENT = {
  "terms-and-conditions": {
    title: "Terms & Conditions",
    description: "Please read these terms carefully before booking your journey with Prnaam Travels. By using our services, you agree to be bound by these terms.",
    sections: [
      { heading: "Agreement to Terms", content: "By accessing our website and booking a tour, you agree to comply with all local laws and regulations of the Government of India and the State of Uttarakhand." },
      { heading: "Booking & Payments", content: "A booking is only confirmed once a 25% advance payment is received. The remaining balance must be cleared 15 days before the departure date." },
      { heading: "Health & Fitness", content: "Many of our Yatra packages involve high altitudes. It is the traveler's responsibility to ensure they are medically fit for the journey." },
      { heading: "Liability", content: "Prnaam Travels acts only as an agent. We are not responsible for delays or changes caused by natural disasters, roadblocks, or government restrictions." },
    
          { heading: "Agreement to Terms", content: "By accessing our website and booking a tour, you agree to comply with all local laws and regulations of the Government of India and the State of Uttarakhand." },
      { heading: "Booking & Payments", content: "A booking is only confirmed once a 25% advance payment is received. The remaining balance must be cleared 15 days before the departure date." },
      { heading: "Health & Fitness", content: "Many of our Yatra packages involve high altitudes. It is the traveler's responsibility to ensure they are medically fit for the journey." },
      { heading: "Liability", content: "Prnaam Travels acts only as an agent. We are not responsible for delays or changes caused by natural disasters, roadblocks, or government restrictions." }
    ]
  },

};

// --- THE REUSABLE COMPONENT ---
export default function PolicyPage({ params }) {
  // If you are using this as a single dynamic route, 'slug' would come from params
  // For this example, let's default to 'terms-and-conditions' if params isn't used
  const slug = params?.slug || "terms-and-conditions";
  const data = POLICY_CONTENT[slug] || POLICY_CONTENT["terms-and-conditions"];

  return (
    <div className="bg-white min-h-screen">
      {/* --- BANNER SECTION --- */}
      <div className="relative h-[300px] md:h-[300px] xl:h-[320px] overflow-hidden">
        <div className="absolute inset-0">
          {/* Mobile Image */}
          <div className="md:hidden relative h-full w-full">
            <Image
              src="/b9mobile.webp"
              alt="Mobile banner"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Desktop Image */}
          <div className="hidden md:block relative h-full w-full">
            <Image
              src="/about4.webp"
              alt="Desktop banner"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
             <h1 className="text-4xl md:text-5xl font-serif italic text-white text-center px-4 drop-shadow-lg">
                {data.title}
             </h1>
          </div>
        </div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <section className="py-12 px-4 md:px-6 lg:px-12 xl:px-24 max-w-7xl mx-auto">
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-[#d8841a]" />
            <span className="text-[#d8841a] text-xs font-bold uppercase tracking-widest">Prnaam Travels Official Policy</span>
            <span className="w-8 h-px bg-[#d8841a]" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-serif italic mb-6 text-slate-900 text-center md:text-left">
            Our Commitment to You
          </h2>

          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-10 max-w-4xl">
            {data.description}
          </p>

          {/* Safe Mapping with Optional Chaining */}
          <div className="space-y-10">
            {data.sections?.map((section, index) => (
              <div key={index} className="group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#d8841a] flex items-center justify-center text-[#d8841a] font-serif italic text-sm group-hover:bg-[#d8841a] group-hover:text-white transition-colors">
                    {index + 1}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-800 tracking-wide uppercase text-sm">
                      {section.heading}
                    </h3>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER IMAGE SECTION --- */}
      <div className="">
        <div className="relative h-[200px] md:h-auto overflow-hidden">
          <Image
            src="/poster.webp"
            alt="Footer landscape"
            width={1920} height={400}
            className="object-cover object-center"
          />
         
        </div>
      </div>
    </div>
  );
}