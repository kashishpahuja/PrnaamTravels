import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const YATRA_PACKAGES = [
  {
    title: "Char Dham Yatra",
    description:
      "Complete pilgrimage to Yamunotri, Gangotri, Kedarnath and Badrinath across the sacred Himalayas.",
    image: "/badrinath.webp",
    href: "/char-dham-yatra",
  },
  {
    title: "Kedarnath Yatra",
    description:
      "Visit the sacred Kedarnath Jyotirlinga with road and helicopter pilgrimage options.",
    image: "/uttrakhand.webp",
    href: "/kedarnath-yatra",
  },
  {
    title: "Badrinath Yatra",
    description:
      "Journey to the divine temple of Lord Vishnu located in the majestic Alaknanda valley.",
    image: "/dwarka.webp",
    href: "/badrinath-yatra",
  },
  {
    title: "Do Dham Yatra",
    description:
      "A focused pilgrimage covering Kedarnath and Badrinath with comfortable travel planning.",
    image: "/puri.webp",
    href: "/do-dham-yatra",
  },
];

const HELICOPTER_PACKAGE = {
  title: "Helicopter Yatra Packages",
  description:
    "Luxury helicopter pilgrimage covering Char Dham, Kedarnath and Do Dham with priority darshan.",
  image: "/banner2.png",
  href: "/char-dham-yatra-by-helicopter",
};

export default function YatraPackages() {
  return (
    <section className="py-24 bg-white px-4 md:px-6 lg:px-12 xl:px-24">
      <div className="max-w-full mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm tracking-[0.3em] text-sky-600 font-semibold uppercase">
            Sacred Journeys
          </p>

          <h2 className="text-3xl md:text-4xl font-serif italic mt-3 text-slate-900">
            Explore Divine Yatra Packages
          </h2>

          <p className="text-slate-600 mt-4 text-lg">
            Discover spiritually enriching journeys across Uttarakhand — from
            the complete Char Dham pilgrimage to exclusive helicopter darshan
            experiences.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-8">

          {YATRA_PACKAGES.map((pkg, index) => (
            <Link
              key={index}
              href={pkg.href}
              className="group relative overflow-hidden rounded-3xl h-85"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/40 to-black/60" />

              <div className="relative z-10 p-8 flex flex-col justify-end h-full text-white">

                <h3 className=" font-serif text-3xl mb-2">
                  {pkg.title}
                </h3>

                {/* <p className="text-sm text-white/80 mb-4 max-w-sm">
                  {pkg.description}
                </p> */}

                <div className="flex items-center gap-2 text-sm font-medium">
                  Explore Packages
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </Link>
          ))}

          {/* Helicopter Wide Card */}

          <Link
            href={HELICOPTER_PACKAGE.href}
            className="relative md:col-span-2 overflow-hidden rounded-3xl h-[320px] group"
          >
            <img
              src={HELICOPTER_PACKAGE.image}
              alt={HELICOPTER_PACKAGE.title}
              className="absolute inset-0 w-full h-full object-cover object-right"
            />

            <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-transparent" />

            <div className="relative z-10 h-full flex flex-col justify-center px-12 text-white max-w-2xl">

              <h3 className="text-4xl font-serif mb-3">
                {HELICOPTER_PACKAGE.title}
              </h3>

              <p className="text-white/90 mb-6">
                Experience the fastest and most comfortable way to complete
                your sacred Char Dham pilgrimage through premium helicopter
                travel across the Himalayas.
              </p>

              <div className="flex items-center gap-2 ">
                View Helicopter Packages
                <ArrowUpRight size={18} />
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}