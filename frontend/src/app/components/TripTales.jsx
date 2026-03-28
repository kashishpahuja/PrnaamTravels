"use client";

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

const TRIP_TALES = [
  {
    id: 1,
    title: "Kedarnath Helicopter Yatra",
    price: "85,000",
    oldPrice: "95,000",
    video: "https://assets.mixkit.co/videos/preview/mixkit-helicopter-flying-over-mountains-3440-large.mp4",
    poster: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
  },
  {
    id: 2,
    title: "Char Dham Helicopter Tour",
    price: "1,80,000",
    oldPrice: "2,10,000",
    video: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-mountains-and-valley-4075-large.mp4",
    poster: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=800&q=80",
  },
  {
    id: 3,
    title: "Badrinath Luxury Yatra",
    price: "75,000",
    oldPrice: "90,000",
    video: "https://assets.mixkit.co/videos/preview/mixkit-road-trip-through-the-mountains-21537-large.mp4",
    poster: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80",
  },
  {
    id: 4,
    title: "Nainital Lake Escape",
    price: "18,999",
    oldPrice: "24,999",
    video: "https://assets.mixkit.co/videos/preview/mixkit-lake-in-the-mountains-3962-large.mp4",
    poster: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
  },
  {
    id: 5,
    title: "Auli Skiing Adventure",
    price: "15,500",
    oldPrice: "19,000",
    video: "https://assets.mixkit.co/videos/preview/mixkit-skier-sliding-down-a-snowy-mountain-4080-large.mp4",
    poster: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
  },
  {
    id: 6,
    title: "Hemkund Sahib Trek",
    price: "12,000",
    oldPrice: "14,500",
    video: "https://assets.mixkit.co/videos/preview/mixkit-person-walking-on-a-mountain-ridge-4079-large.mp4",
    poster: "https://images.unsplash.com/photo-1589136777351-fdc9c999551a?w=800&q=80",
  },
  {
    id: 7,
    title: "Jim Corbett Safari",
    price: "9,500",
    oldPrice: "12,000",
    video: "https://assets.mixkit.co/videos/preview/mixkit-forest-stream-under-the-sun-light-11913-large.mp4",
    poster: "https://images.unsplash.com/photo-1581260466152-d2c0303e54f5?w=800&q=80",
  },
  {
    id: 8,
    title: "Spiti Valley Expedition",
    price: "24,000",
    oldPrice: "30,000",
    video: "https://assets.mixkit.co/videos/preview/mixkit-landscape-of-mountains-and-a-river-4074-large.mp4",
    poster: "https://images.unsplash.com/photo-1581791534721-e599df4417f7?w=800&q=80",
  },
  {
    id: 9,
    title: "Kauri Pass Winter Trek",
    price: "11,000",
    oldPrice: "15,000",
    video: "https://assets.mixkit.co/videos/preview/mixkit-view-of-snowy-mountains-under-a-blue-sky-4081-large.mp4",
    poster: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
  },
  {
    id: 10,
    title: "Haridwar Evening Aarti",
    price: "4,500",
    oldPrice: "6,000",
    video: "https://assets.mixkit.co/videos/preview/mixkit-sunset-on-the-river-bank-4082-large.mp4",
    poster: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?w=800&q=80",
  },
  {
    id: 11,
    title: "Mussourie Cloud Walk",
    price: "7,999",
    oldPrice: "10,500",
    video: "https://assets.mixkit.co/videos/preview/mixkit-foggy-mountain-landscape-4083-large.mp4",
    poster: "https://images.unsplash.com/photo-1548263514-a23997731740?w=800&q=80",
  },
  {
    id: 12,
    title: "Lansdowne Quiet Retreat",
    price: "8,500",
    oldPrice: "11,000",
    video: "https://assets.mixkit.co/videos/preview/mixkit-trees-in-the-mountains-covered-with-fog-4084-large.mp4",
    poster: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&q=80",
  }
];


const VideoSlide = ({ item }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="group block h-full select-none">
      <div 
        className="relative aspect-[3/4] overflow-hidden rounded-sm bg-gray-100"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video
          ref={videoRef}
          src={item.video}
          poster={item.poster}
          muted
          loop
          playsInline
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
      </div>
      
     
    </div>
  );
};

export default function StyleEdit() {
  return (
    <section className="py-8 lg:py-12 mx-4 md:mx-6 lg:mx-12 xl:mx-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-4 lg:mb-8">
          <div>
            <h2 className="text-xl  lg:text-3xl tracking-tighter uppercase">The Trip Tales</h2>
          </div>
          
          
        </div>

        <Swiper
          modules={[Navigation, Pagination, FreeMode]}
          // "Overflow" effect: use decimals in slidesPerView
          slidesPerView={1.2} 
          spaceBetween={16}
          centeredSlides={false}
          grabCursor={true}
          freeMode={true}
          navigation={{
            nextEl: '.swiper-next-btn',
            prevEl: '.swiper-prev-btn',
          }}
          breakpoints={{
            // Mobile (default) is 1.2
            640: {
              slidesPerView: 2.2,
              spaceBetween: 20,
              freeMode: false
            },
            1024: {
              slidesPerView: 3.5, // Peek at the 4th slide
              spaceBetween: 24,
              freeMode: false
            },
            1280: {
              slidesPerView: 4, // Full 4 slides on large screens
              spaceBetween: 24,
              freeMode: false
            }
          }}
          className="!overflow-hidden" // Crucial for showing the "peek" outside container if needed
        >
          {TRIP_TALES.map((item) => (
            <SwiperSlide key={item.id} className="h-auto">
              <VideoSlide item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}