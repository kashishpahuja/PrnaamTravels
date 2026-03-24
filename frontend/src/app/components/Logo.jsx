"use client";

import Image from "next/image";


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
  ];
  const allClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-12 overflow-hidden">
      <div className="">

        
        <div className="relative">

          
          <div className="flex overflow-hidden">
            <div 
              className="flex whitespace-nowrap gap-6"
              style={{
                animation: 'marquee 10s linear infinite'
              }}
            >
              {allClients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="shrink-0"
                >
                  <div className=" w-full h-auto flex items-center justify-center group hover:border-[#007e44]/20">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={140}
                      height={60}
                      className="object-contain max-h-15 w-auto transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        div:hover > div > div[style*="animation"] {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}