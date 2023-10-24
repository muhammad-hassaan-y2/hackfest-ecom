import React from 'react';
import Image from 'next/image';
import Banner from "@/Components/Images/002.webp"

const Banner2 = () => {
  return (
   <div className="relative w-80 md:w-72 h-max p-6 bg-amber-100 flex--grow">

     {/* Image */}
     <div className='mt-[78px] '>
     <Image src={Banner} alt="Flex Sweatshirt"  className="opacity-100 " />
   </div>
    

     {/* Text */}
    <div className="absolute top-6 ml-3 z-10">
       <h2 className="text-black text-2xl font-semibold mb-1">Flex Sweatshirt</h2>
       <div className="flex items-baseline">
         <span className="text-gray-400 line-through text-lg mr-2">$100.00</span>
        <span className="text-black font-semibold text-xl">$75.00</span>
       </div>
     </div>
    
   </div>
  )
}

export default Banner2
