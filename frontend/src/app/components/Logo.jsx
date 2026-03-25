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
    { name: "Decathlon", logo: "/logo/decathlon.webp" },

  ];

  // Doubling is enough if total width > 2x Screen Width
  const allClients = [...clients, ...clients];

  return (
    <section className="py-8 ">
      {/* The "mask-image" creates the elegant fade-in/out effect 
         seen on premium websites.
      */}
      <div 
        className="relative flex overflow-hidden group"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
        }}
      >
        <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
          {allClients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-10 shrink-0"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={140}
                height={60}
                className="object-contain h-[40px] w-auto"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite; /* Increased time for smoother feel */
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            /* This moves exactly half the total width of the doubled array */
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}