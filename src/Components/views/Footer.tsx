import React from 'react';
import Image from 'next/image';
import Logo from "@/Components/Images/Logo.webp";
import Twitter from "@/Components/Images/Untitled design (1).png";
import FB from "@/Components/Images/Untitled design (2).png";
import Linkedin from "@/Components/Images/Untitled design.png";

const Footer = () => {
  return (
    <div className='bottom-0 flex flex-col mt-20 px-4 md:px-12 '>

    <div className='flex flex-wrap justify-between '>

        <div className='w-full md:w-3/12 mb-6 md:mb-0 ml-10 md:ml-0'>
         
         
           <div className=' '>
                <Image src={Logo} alt='Logo' />
            </div>

            <p className='mt-10 text-gray-400 text-lg'>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
            
            <div className='flex mt-9 gap-x-5 w-10 h10'>
                <Image src={Twitter} alt='Twitter' />
                <Image src={FB} alt='FB' />
                <Image src={Linkedin} alt='Linkedin' />
            </div>
        </div>

        <div className='w-full md:w-1/4 bottom-0 mb-6 md:mb-0 ml-20 md:ml-0 flex-col gap-y-10'>
            <h4 className='text-gray-500 font-bold text-xl'>Company</h4>
            <p className='mt-3 text-gray-600 text-base'>About</p>
            <p className='mt-3 text-gray-600 text-base'>Term of Use</p>
            <p className='mt-3 text-gray-600 text-base'>Privacy Policy</p>
            <p className='mt-3 text-gray-600 text-base'>How it Works</p>
            <p className='mt-3 text-gray-600 text-base'>Contact Us</p>
        </div>

        <div className='w-full md:w-1/4 mb-6 md:mb-0 ml-20 md:ml-0 flex-col gap-y-10'>
            <h4 className='text-gray-500 font-bold text-xl'>Support</h4>
            <p className='mt-3 text-gray-600 text-base'>Support Career</p>
            <p className='mt-3 text-gray-600 text-base'>24h Service</p>
            <p className='mt-3 text-gray-600 text-base'>Quick Chat</p>
        </div>

        <div className='w-full md:w-1/4 ml-20 md:ml-0 flex-col gap-y-10'>
            <h4 className='text-gray-500 font-bold text-xl'>Contact</h4>
            <p className='mt-3 text-gray-600 text-base'>Whatsapp</p>
            <p className='mt-3 text-gray-600 text-base'>Support 24h</p>
        </div>

    </div>

    <div className="mt-9 flex flex-col md:flex-row items-center justify-between p-6 border-t border-gray-300 text-center">

        <div className="mb-4 md:mb-0">
            <p>Copyright © 2022 Dine Market</p>
        </div>

        <div className="mb-4 md:mb-0">
            <p>Design by. Weird Design Studio</p>
        </div>

        <div>
            <p>Code by. <a href="https://github.com/shabrina12" target="_blank" rel="noopener noreferrer" className="underline">shabrina12 on github</a></p>
        </div>

    </div>
</div>

  )
}

export default Footer
