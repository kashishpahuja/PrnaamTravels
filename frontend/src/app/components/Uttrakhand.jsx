import React from "react";
import { ShieldCheck, MapPin, Users, Award, CheckCircle } from "lucide-react";

const DESTINATIONS = [
  { title: "Mana Village", image: "/Mana.webp" },
  { title: "Harsil Valley", image: "/Harsil.webp" },
  { title: "Hot Water Springs", image: "/HotWater.webp" },
  // { title: "Hidden Himalayan Gems", image: "/HiddenGems.webp" }
];

const PACKAGE_INCLUDES = [
  "Comfortable accommodation during the journey",
  "Experienced local guides and drivers",
  "Helicopter assistance for Kedarnath (optional)",
  "Well planned Char Dham travel routes",
  "Senior citizen friendly arrangements",
  "24/7 travel support throughout the yatra"
];

const AuthorityTrustSection = () => {
  return (
    <section className=" py-16">
<div className="bg-[#fff9ed] rounded-3xl mx-4 md:mx-6 lg:mx-12 xl:mx-24 p-10 md:p-20 border border-[#f0e6d2]">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}

        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-px bg-[#d8841a]" />
            <span className="text-[#d8841a] text-xs font-bold uppercase tracking-[0.2em]">
              Discover Uttarakhand
            </span>
            <span className="w-8 h-px bg-[#d8841a]" />
          </div>

          <h3 className="text-2xl md:text-3xl font-serif italic text-[#144487] leading-tight">
            Experience Dev Bhoomi <br /> with Prnaam Travels
          </h3>

          <p className="max-w-3xl mx-auto text-slate-600 mt-6 text-sm md:text-base leading-relaxed">
            From sacred temples to hidden Himalayan valleys, Uttarakhand offers
            some of the most spiritual and breathtaking destinations in India.
            Prnaam Travels organizes carefully planned Char Dham and Uttarakhand
            journeys so pilgrims can focus on devotion while we handle the
            logistics.
          </p>
        </div>

        {/* DESTINATION IMAGE GRID */}

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
  {DESTINATIONS.map((place, idx) => (
    <div
      key={idx}
      className="bg-white rounded-2xl p-2 shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col"
    >
      {/* Image Container */}
      <div className="aspect-square rounded-xl overflow-hidden">
        <img
          src={place.image}
          alt={place.title}
          className="w-full h-full object-cover "
        />
      </div>

      {/* Title Section */}
      <div className="py-4 px-2">
        <span className="text-slate-800 text-sm md:text-base tracking-tight">
          {place.title}
        </span>
      </div>
    </div>
  ))}
</div>

        {/* PACKAGE INCLUDES */}

        <div className="max-w-4xl mx-auto mb-16">
          <h4 className="text-xl md:text-2xl font-serif text-[#144487] text-center mb-8">
            What Our Uttarakhand Yatra Packages Include
          </h4>

          <div className="grid md:grid-cols-2 gap-4">
            {PACKAGE_INCLUDES.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 text-sm text-slate-700"
              >
                <CheckCircle size={18} className="text-[#d8841a] mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* TRUST INDICATORS */}

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 border-t border-[#f0e6d2] pt-10">
          {[
            { icon: <ShieldCheck size={20} />, label: "Safe & Reliable Travel" },
            { icon: <MapPin size={20} />, label: "Local Uttarakhand Expertise" },
            { icon: <Users size={20} />, label: "Senior Friendly Yatra" },
            { icon: <Award size={20} />, label: "Trusted Pilgrimage Partner" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-[#144487]">
              <div className="text-[#d8841a]">{item.icon}</div>

              <span className="text-xs font-bold uppercase tracking-widest">
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>
      </div>
    </section>
  );
};

export default AuthorityTrustSection;