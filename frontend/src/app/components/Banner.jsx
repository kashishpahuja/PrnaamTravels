import React from 'react'
import Image from 'next/image'

function Banner() {
  return (
    <div className="relative h-[500px] md:h-[500px] lg:h-[600px] 2xl:min-h-screen overflow-hidden rounded-3xl my-4 mx-4 md:mx-6 lg:mx-12 xl:mx-24 ">
      {/* Background Images */}
      <div className="absolute inset-0">
        {/* Mobile image */}
        <div className="md:hidden relative h-full w-full">
          <Image
            src="/b9mobile.webp"
            alt="Mobile banner"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        
        {/* Desktop image */}
        <div className="hidden md:block relative h-full w-full">
          <Image
            src="/b9.webp"
            alt="Desktop banner"
            width={1920} height={1080}
            className="object-cover h-full w-full "
            priority
          />
        </div>
      </div>

      {/* Dark/Light Overlay - Increased opacity for text readability */}
      {/* <div className="absolute inset-0 bg-linear-to-b from-white via-white/10 to-[#2048119f]  z-10" /> */}
      
      {/* Content Container: Centered using Flexbox */}
      {/* <div className="absolute inset-0 z-20 flex flex-col items-center justify-end px-4 py-4 lg:py-12 xl:py-16 text-center">
       <h2 className="playfair text-3xl md:text-4xl lg:text-5xl leading-tight text-white max-w-xl">
  Begin Your Divine Journey <br className="hidden md:block" />
  <span className="md:mt-2 block">Helicopter & Road Yatra</span>
</h2>
        
      </div> */}
    </div>
  )
}

export default Banner