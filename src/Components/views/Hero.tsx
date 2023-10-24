import React from 'react';
import { Button } from '../ui/button';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Bazaar from '@/Components/Images/Bazaar.webp';
import Bustle from '@/Components/Images/Bustle.webp';
import Versace from '@/Components/Images/Versace.webp';
import Instyle from '@/Components/Images/InStyle.webp';
import Heroo from '@/Components/Images/hero-poster.webp';
import Wrapper from '../shared/Wrapper';

const Hero = () => {
  return (
   <Wrapper>
    <div className='flex flex-col lg:flex-row  ml-12'>
      <div className=' w-max mr-10'>
        <section className='bg-[#DFECFF] w-24 h-9 rounded-md justify-center text-center text-base 
        font-semibold text-[#3117FF] mt-16'>
          <div className='py-1'>Sale 70%</div>
        </section>

        <h2 className='text-6xl w-80 font-bold text-neutral-800 mt-10 md:w-10/12 sm:w-6/12'>
          An Industrial Take on Streetwear
        </h2>
        <p className='mt-12 w-80 text-neutral-500 font-medium text-base md:w-8/12 leading-7 md:mt-6 sm:w-4/12'>
          Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
        </p>

        <Button className='mt-10 py-7 rounded-none border-black border-2
         bg-[#212121] mr-4 md:w-auto lg:w-auto text-white text-lg px-20 gap-x-5 
         outline-double shadow-md hover:bg-[#212122] hover:shadow-sm'>
          <ShoppingCart />
          Start Shopping
        </Button>

        <section className='grid grid-cols-2 md:grid-cols-4  py-12 gap-y-12 flex-shrink '>
          <Image src={Bazaar} alt='bazaar' />
          <Image src={Bustle} alt='bazaar' />
          <Image src={Versace} alt='bazaar' />
          <Image src={Instyle} alt='bazaar' />
        </section>
      </div>

      {/* Hide this content on medium screens */}
      <section className='hidden lg:block  mt-20'>
    <div className='bg-[#FFECE3] rounded-full flex items-center
     justify-center w-max'>
        <Image src={Heroo} alt={'Poster'} className='' />
    </div>
    </section>

    </div>
    </Wrapper>
  );
};

export default Hero;
