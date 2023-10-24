'use client'
import React, { useState, useEffect } from 'react';
import Wrapper from '../shared/Wrapper';
import { ChevronLeft, ChevronRight, Dot } from 'lucide-react';
import { urlForImage } from '../../../sanity/lib/image';
import { client } from '@/lib/sanityClient';
import { Image as IImage } from 'sanity';
import Link from 'next/link';

const getProducts = async () => {
  const products = await client.fetch(`*[_type == "product"]{
    price,
    title,
    image,
  }`);
  return products;
};

interface IProduct {
  title: string;
  image: IImage[];
  price: number;
}

const ProducSlide = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const productsData = await getProducts();
      setProducts(productsData);
    }
    fetchData();
  }, []);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + products.length) % products.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % products.length;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <Wrapper>
      <div className='mt-16 mb-28 max-w-screen-2xl'>
        <div>
          <h4 className='font-bold text-blue-700 text-center text-base mt-6'>PRODUCTS</h4>
          <h2 className='font-bold text-4xl mt-4 text-center'>Check What We Have</h2>
        </div>

        <div className='max-w-[900px] h-[890px] w-full m-auto py-16 px-4 relative group'>
          <Link href={'/products'}>
            <div
              style={{
                backgroundImage:
                  products[currentIndex]?.image
                    ? `url(${urlForImage(products[currentIndex].image[0]).url()})`
                    : '',
              }}
              className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
            >
              {/* Title */}
              <div className='absolute bottom-1 left-2 text-2xl font-semibold'>{products[currentIndex]?.title}</div>
              {/* Price */}
              <div className='absolute bottom-3 right-2 mt-10 text-2xl 
              font-semibold'>Price: ${products[currentIndex]?.price.toFixed(2)}</div>
            </div>
          </Link>

          {/* Left Arrow */}
          <div className='hover:shadow-xl group-hover:block absolute top-[50%] -translate-x-0
           translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20
            text-white cursor-pointer'>
            <ChevronLeft onClick={prevSlide} size={30} />
          </div>

          {/* Right Arrow */}
          <div className='hover:shadow-xl group-hover:block absolute top-[50%] 
          -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2
           bg-black/20 text-white cursor-pointer'>
            <ChevronRight onClick={nextSlide} size={30} />
          </div>

          <div className='flex top-4 justify-center py-2'>
            {products.map((product, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className='text-2xl cursor-pointer'
              >
                <Dot />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProducSlide;
