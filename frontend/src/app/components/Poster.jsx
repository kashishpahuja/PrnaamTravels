import Image from 'next/image'
import React from 'react'

function Poster() {
  return (
    <div className='px-4 md:px-6 lg:px-12 xl:px-24'>
     <div className="relative h-auto lg:h-[230px] xl:h-[300px] lg:rounded-3xl  max-w-7xl mx-auto overflow-hidden">
              
              
              <div className="relative h-full w-full">
                <Image
                  src="/poster0.webp"
                  alt="Desktop banner"
                  width={1635} height={540}
                  className="object-cover object-center h-full w-full "
                  priority
                />
             
            </div>
      
           
          </div>
    </div>
  )
}

export default Poster
