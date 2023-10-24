import React from 'react';
import Banner from '@/Components/Images/003.webp';
import Image from 'next/image';

const Banner3 = () => {
  return (
    <div className="relative w-80 md:w-72 h-max p-6 bg-gray-100 ml-3 mt-2">

    {/* Image */}
    <div className='mt-[65px]'>
    <Image src={Banner} alt="Flex Sweatshirt"  className="opacity-100 " />
    </div>
    

    {/* Text */}
    <div className="absolute top-6  ml-3 z-10">
      <h2 className="text-black text-2xl font-semibold mb-1">Flex Push Bomber</h2>
      <div className="flex items-baseline">
        <span className="text-gray-400 line-through text-lg mr-2">$225.00</span>
        <span className="text-black font-semibold text-xl">$190.00</span>
      </div>
    </div>
    
  </div>
  )
}

export default Banner3
