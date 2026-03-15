import React from "react";
import { Helicopter, ArrowRight, CheckCircle } from "lucide-react";

const HELICOPTER_GUIDES = [
  "Char Dham Helicopter Yatra – Complete Guide",
  "Do Dham Same Day Helicopter Guide",
  "Kedarnath Helicopter Helipad Details",
  "Badrinath Helicopter Booking Rules",
  "Helicopter Baggage Rules for Char Dham",
  "Helicopter vs Road Char Dham Comparison",
  "Is Helicopter Yatra Safe for Senior Citizens?"
];

const HelicopterKnowledgeSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT SIDE CONTENT */}

        <div className="space-y-6">

          <div className="flex items-center gap-2 text-[#d8841a] text-xs font-bold uppercase tracking-[0.2em]">
            <Helicopter size={16} />
            Helicopter Yatra
          </div>

          <h2 className="text-3xl md:text-4xl font-serif italic text-[#144487] leading-tight">
            Char Dham Yatra <br /> by Helicopter
          </h2>

          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-md">
            Helicopter pilgrimage is the fastest and most comfortable way to 
            complete the sacred Char Dham journey. Prnaam Travels provides 
            well-organized helicopter packages designed for families, senior 
            citizens, and devotees seeking a smooth spiritual experience.
          </p>

          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-md">
            Explore our expert travel guides to understand helicopter booking 
            rules, helipad details, baggage limits, and important safety tips 
            before planning your yatra.
          </p>

          <button className="flex items-center gap-2 text-sm font-bold text-[#144487]">
            Explore Helicopter Packages
            <ArrowRight size={16} />
          </button>
        </div>

        {/* RIGHT SIDE GUIDE LIST */}

        <div className="bg-[#f8fbff] rounded-3xl p-8 border border-slate-100">

          <h3 className="text-xl font-serif text-[#144487] mb-6">
            Helicopter Yatra Guides
          </h3>

          <div className="space-y-4">
            {HELICOPTER_GUIDES.map((guide, index) => (
              <div
                key={index}
                className="flex items-start gap-3 text-sm text-slate-700"
              >
                <CheckCircle
                  size={18}
                  className="text-[#d8841a] mt-0.5 flex-shrink-0"
                />
                <span>{guide}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HelicopterKnowledgeSection;