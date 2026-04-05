"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Logo() {
  const clients = [
    { name: "The Mad House", logo: "/logo/bs.png" },
    { name: "Born16", logo: "/logo/dailyhunt.png" },
    { name: "Nourish Mantra", logo: "/logo/dainikjagran.png" },
    { name: "Neemli Naturals", logo: "/logo/ddnews.png" },
    { name: "Secret Alchemist", logo: "/logo/msme.png" },
    { name: "Ayuvya", logo: "/logo/tripadvisor.png" },
    { name: "Softbird", logo: "/logo/trustpilot.png" },
    { name: "Ellement Co", logo: "/logo/uktourism.png" },
    { name: "Decathlon", logo: "/logo/decathlon.webp" },
  ];

  // We only need two sets for a continuous line
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-8 lg:py-12 px-4 md:px-6 lg:px-12 xl:px-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-px bg-[#d8841a]" />
            <span className="text-[#d8841a] text-xs font-bold uppercase tracking-widest">As Seen On</span>
            <span className="w-8 h-px bg-[#d8841a]" />
          </div>
        <h2 className="text-2xl md:text-3xl mb-6 leading-tight text-slate-900">
  Featured In News
</h2>

{/* <p className="text-slate-600 text-sm md:text-base mx-auto mb-8">
  Explore breathtaking glimpses of your spiritual journey. From sacred temples to scenic Himalayan views, let Prnaam Travels plan your perfect yatra—simply share your details and we’ll take care of the rest.
</p> */}
        </div>
      <div 
        className="relative flex items-center"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
        }}
      >
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"], // Move by half (since we duplicated the list)
          }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedClients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-4 md:px-12 shrink-0"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={140}
                height={60}
                className="object-contain h-[25px] lg:h-[45px] w-auto transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}