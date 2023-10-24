import Image from 'next/image';
import Vintag from "@/Components/Images/vintage.webp";
import Wrapper from '../shared/Wrapper';
import { Button } from '../ui/button';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

const Vintage = () => {
  return (
    <div className='bg-gray-100'>
      <Wrapper>
        <div className="flex flex-col lg:flex-row items-start justify-between p-4 sm:p-8 md:p-10 lg:p-12 max-w-screen-2xl">
          {/* Left Section: 2 text blocks with faded large text background */}
          <div className="relative flex flex-col w-full lg:flex-row p-4 lg:p-6 bg-gray-100">
            {/* "Different from others" text background */}
            <h1 className="text-4xl sm:text-6xl md:text-9xl font-extrabold opacity-10 absolute top-1/2 md:left-1/2 left-1/2 lg:-left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:ml-96 lg:top-auto lg:transform-none lg:-translate-y-0">
              Different from others
            </h1>
            {/* Left Section: 2 text blocks */}
            <div className="w-full   lg:mr-8 mb-6 lg:mb-0 mt-4 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-x-20 lg:gap-x-24">
              <div className="mb-4 sm:mb-6">
                <h3 className="font-bold text-xl sm:text-2xl mb-2">Using Good Quality Materials</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="mb-4 sm:mb-6">
                <h3 className="font-bold text-xl sm:text-2xl mb-2">100% Handmade Products</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="mb-4 sm:mb-6">
                <h3 className="font-bold text-xl sm:text-2xl mb-2">Modern Fashion Design</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div>
                <h3 className="font-bold text-xl sm:text-2xl mb-2">Discount for Bulk Orders</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          {/* Right Section: Main headline, image, and details */}
          <div className="flex flex-col items-center bg-gray-100 p-4 md:p-6
           lg:p-8">
            <h2 className="font-bold text-3xl sm:text-5xl mb-4 sm:mb-8 mt-4
             sm:mt-10">Unique and Authentic Vintage Designer Jewellery</h2>
            <div className='fle-col md:flex-row '>
            <div className="relative mb-4 w-72 sm:w-96 h-72 sm:h-96">
              <Image src={Vintag} alt="Model" layout="fill" 
              objectFit="contain" />
            </div>
         
            <p className="mb-4 sm:mb-6 text-center w-2/3 sm:w-3/4 lg:w-2/3">
              This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The natural color is the actual natural color of the fiber, undyed and 100% traceable.
            </p>
            
            <Link href={'/products'}>
            <Button className='mt-10 py-6  rounded-none border-black
               bg-[#212121] w-auto text-white text-lg px-10 gap-x-3 
               outline-double shadow-md hover:bg-[#212122] hover:shadow-sm'>

                <ShoppingCart />
                Add to Cart
              </Button></Link></div>
        
        </div></div>
      </Wrapper>
    </div>
  );
}

export default Vintage;
