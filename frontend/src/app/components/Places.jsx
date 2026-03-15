import React from 'react';
import { 
  HiOutlineArrowRight, 
  HiOutlineClock, 
  HiOutlineLocationMarker,
  HiOutlineSparkles,
  HiChevronRight
} from 'react-icons/hi';

const TOUR_DATA = [
  {
    id: "chd-01",
    title: "The Grand Char Dham",
    location: "Yamunotri • Gangotri • Kedarnath • Badrinath",
    description: "A definitive 12-day spiritual odyssey through the four pillars of Himalayan devotion.",
    duration: "12 Days",
    price: "Starts ₹28,500",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800",
    tag: "Most Sacred"
  },
  {
    id: "kn-03",
    title: "Kedarnath Expedition",
    location: "Rudraprayag District",
    description: "High-altitude spiritual trekking or exclusive helicopter access to the seat of Lord Shiva.",
    duration: "5 Days",
    price: "Starts ₹12,000",
    image: "https://images.unsplash.com/photo-1564507592316-5c483270a221?q=80&w=800",
    tag: "High Altitude"
  },
  {
    id: "hr-05",
    title: "Ganga Aarti Rituals",
    location: "Haridwar & Rishikesh",
    description: "Immerse yourself in the yoga capital and the mesmerizing evening light rituals of the holy Ganges.",
    duration: "4 Days",
    price: "Starts ₹8,500",
    image: "https://images.unsplash.com/photo-1590766940554-634a7ed41450?q=80&w=800",
    tag: "Cultural"
  }
];

const PilgrimagePackages = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* --- REFINED HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-12 h-[1px] bg-[#00a3e0]"></span>
              <span className="text-[#00a3e0] font-bold text-xs uppercase tracking-[0.3em]">Spiritual Journeys</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-slate-900 leading-none">
              Pilgrimage <br /> 
              <span className="italic font-light text-slate-400">Collections</span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm md:text-base max-w-xs leading-relaxed border-l-2 border-slate-100 pl-6">
            Curated soul-stirring experiences across Dev Bhoomi, blending ancient tradition with modern safety.
          </p>
        </div>

        {/* --- GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TOUR_DATA.map((pkg) => (
            <div key={pkg.id} className="group cursor-pointer">
              {/* Image with Floating Tag */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                
                {/* Minimalist Floating Tag */}
                <div className="absolute top-6 left-6 z-10">
                  <span className="bg-white/80 backdrop-blur-md text-slate-900 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                    {pkg.tag}
                  </span>
                </div>

                {/* Bottom Card Hover Detail */}
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-gradient-to-t from-black/80 to-transparent">
                   <div className="flex items-center justify-between text-white">
                      <span className="text-xs font-bold uppercase tracking-widest">Explore Tour</span>
                      <HiOutlineArrowRight size={20} />
                   </div>
                </div>
              </div>

              {/* Textual Details */}
              <div className="space-y-3 px-2">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-[10px] font-bold text-[#00a3e0] uppercase tracking-tighter">
                    <HiOutlineClock /> {pkg.duration}
                  </span>
                  <span className="text-xs font-medium text-slate-400">{pkg.price}</span>
                </div>
                
                <h3 className="text-2xl font-serif group-hover:italic transition-all duration-300 text-slate-900">
                  {pkg.title}
                </h3>
                
                <div className="flex items-start gap-1 text-slate-400">
                   <HiOutlineLocationMarker className="mt-1 flex-shrink-0" />
                   <p className="text-xs leading-relaxed">{pkg.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- LUXURY CALL TO ACTION --- */}
        <div className="mt-24 relative p-12 md:p-20 rounded-[3rem] overflow-hidden bg-slate-900 text-white">
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="space-y-4">
                 <h4 className="text-3xl md:text-5xl font-serif">Not found what you're <br /> <span className="italic text-[#00a3e0]">looking for?</span></h4>
                 <p className="text-slate-400 max-w-sm">Connect with our destination experts to craft a bespoke spiritual itinerary tailored to your pace.</p>
              </div>
              <button className="group flex items-center gap-4 bg-[#00a3e0] hover:bg-white hover:text-slate-900 transition-all duration-300 px-10 py-5 rounded-full font-bold text-sm">
                 CUSTOMIZE YOUR TRIP
                 <HiChevronRight className="group-hover:translate-x-2 transition-transform" />
              </button>
           </div>
           {/* Subtle background element */}
           <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-[#00a3e0] rounded-full blur-[120px] opacity-20"></div>
        </div>

        {/* --- MINIMALIST TRUST BAR --- */}
        <div className="mt-20 flex flex-wrap justify-center gap-10 md:gap-24 grayscale opacity-40">
           {["CERTIFIED OPERATOR", "24/7 GROUND SUPPORT", "ALL-INCLUSIVE STAYS", "LOCAL EXPERTISE"].map((text) => (
             <span key={text} className="text-[10px] font-black tracking-[0.3em] text-slate-900 flex items-center gap-2">
               <HiOutlineSparkles className="text-[#00a3e0]" /> {text}
             </span>
           ))}
        </div>
      </div>
    </section>
  );
};

export default PilgrimagePackages;