import React from 'react';
import Dine from "@/Components/Images/001.webp";
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="bg-gray-300 flex md:h-48 flex-col md:flex-row items-center overflow-hidden">
    {/* Text content */}
    <div className="text-center md:text-left p-4 flex-grow">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">GET UP TO 60%</h2>
        <p className="text-lg md:text-xl lg:text-2xl">For the summer season</p>
    </div>

    {/* Image */}
    <div className="flex-shrink-0 p-4">
        <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-52 lg:h-52">
            <Image src={Dine} alt="Model" className="w-full h-full object-cover"/>
        </div>
    </div>
</div>

  )
}

export default Banner
