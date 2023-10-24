'use client';
import React, { useState, useEffect } from 'react';
import Logo from '@/Components/Images/Logo.webp';
import Image from 'next/image';
import { AlignRight, X } from 'lucide-react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { Search } from 'lucide-react';
import Wrapper from '../shared/Wrapper';
import SearchBar from '../shared/Search';
import category from '../../../sanity/category';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Wrapper>
    <div className='top-0  flex  justify-between overflow-visible
      ' >

    <div className='mt-[50px]'>
      <Link href={"/"}>
  <Image className=' w-40  ' 
  src={Logo} alt='Logo' /></Link>
  </div>
   <div className=' gap-x-9 font-medium ml-44 md:hidden lg:ml-36 text-lg 
   mt-[50px] hidden
    lg:flex '>

<Link href={`/category/Female`}>
  <h4 className='hover:underline'>Female</h4>
</Link>

<Link href={`/category/Male`}>
  <h4 className='hover:underline'>Male</h4>
</Link>

<Link href={`/category/Kids`}>
  <h4 className='hover:underline'>Kids</h4>
</Link>

<Link href="/products">
  <h4 className='hover:underline'>All Products</h4>
</Link>
  </div>



   <div className=' mt-[48px] gap-x-5 lg:flex md:hidden
   sm:hidden '>
    <div className='hidden md:hidden lg:block'><SearchBar /></div>
    <div className='hidden md:hidden lg:block'>
     <div className='bg-gray-300 rounded-full w-12 h-12 flex items-center
      justify-center mb-6'>
        <ShoppingCart /></div>  
       </div>
     
     

  </div>


<div className='fixed right-4 z-50 cursor-pointer mt-[50px]
 lg:hidden top-0'
 onClick={handleIsOpen}>                   
    {isOpen ? <X size={45}/> : <AlignRight size={35}/>}
  </div>
  
        {isOpen && (
        <div className='fixed top-0 right-0 w-full h-full bg-white shadow-2xl 
        p-4 z-40 flex items-center justify-center'>
       <div className='text-center'> {/* This additional div is for centering content vertically inside it */}
        <div className='bg-gray-300 rounded-full w-14 h-14 flex items-center
         justify-center mb-6'>
          <ShoppingCart />
       </div>
        <div className='text-2xl'>
        <Link href={"/category/Female"}>
        <h3 className='mb-7 hover:underline  '>Female</h3></Link>

        <Link href={"/category/Male"}>
        <h3 className='mb-7 hover:underline'>Male</h3></Link>

        <Link href={"/category/Kids"}>
        <h3 className='mb-7 hover:underline'>Kids</h3></Link>

        <Link href={"/products"}>
        <h3 className='mb-7 hover:underline'>All Products</h3>
        </Link>
       </div>
      </div>
     </div>
     )}


    

 </div>
    </Wrapper>
  );
};

export default Navbar;
