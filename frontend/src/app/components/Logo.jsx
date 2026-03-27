"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ClienteleSection() {
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
                className="object-contain h-[30px] lg:h-[45px] w-auto transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}