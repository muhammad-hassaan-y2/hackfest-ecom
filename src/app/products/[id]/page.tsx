'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { urlForImage } from '../../../../sanity/lib/image';
import { client } from '@/lib/sanityClient';
import { Image as IImage } from 'sanity';
import Wrapper from '@/Components/shared/Wrapper';
import SizeSelector from '@/Components/ui/Quantity';
import Bar from '@/Components/ui/Bar';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { Button } from '@/Components/ui/button';

const getProductData = async (id: string) => {
  const allProducts = await client.fetch(`*[_type == "product"]{
    price,
    _id,
    title,
    sku,
    sizes[] {
      quantity,
      size
    },
    productDetails,
    productCare,
    image,
    category -> {
      name
    }
  }`);
  return allProducts.filter((product: { _id: string | number }) => product._id === id);
};

interface IProduct {
  title: string;
  _id: string;
  productCare: string[];
  productDetails: string;
  sku: string;
  sizes: { quantity: number; size: string }[];
  image: IImage[];
  price: number;
  category: {
    name: string;
  };
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const result = await getProductData(params.id);
      setProduct(result[0]);

      // Select the first size by default if available
      if (result[0] && result[0].sizes.length > 0) {
        setSelectedSize(result[0].sizes[0].size);
        setQuantity(0);
      }
    }

    fetchData();
  }, [params.id]);

  const handleSizeChange = (selectedSize: string) => {
    setSelectedSize(selectedSize);
    setQuantity(0);
  };

  const incrementQuantity = () => {
    if (quantity + 1 <= getMaxAvailableQuantity()) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity - 1 >= 0) {
      setQuantity(quantity - 1);
    }
  };

  const getMaxAvailableQuantity = () => {
    const selectedSizeData = product?.sizes.find((size) => size.size === selectedSize);
    return selectedSizeData ? selectedSizeData.quantity : 0;
  };

  return (
    <div className='bg-slate-50'>
    
      {product ? (
        <div className='mt-12 '>
          <div className="flex flex-col md:flex-row">
           {/* Small Images */}
           <div className="w-full md:w-2/12 ml-4 gap-4 gap-y-9 mb-6 md:gap-4">
              {product.image.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`cursor-pointer gap-y-3 ${
                    index === selectedImageIndex ? 'h-[139px] w-[130px] border border-gray-500' : ''
                  }`}
                >
                  <Image
                    src={urlForImage(image).url()}
                    alt={product.title}
                    width={130}
                    height={130}
                  />
                </div>
              ))}
            </div>
           
            {/* Large Image */}
            <div className="mb-4 md:w-4/12">
              <Image
                src={urlForImage(product.image[selectedImageIndex]).url()}
                alt={product.title}
                width={1500}
                height={2500}
              />
            </div>

            {/* Product Information */}
            <div className='md:ml-6 ml-2 mt-8 w-full md:w-6/12' >
              <h2 className='text-4xl'>{product.title}</h2>
              <h4 className='text-2xl font-mono font-normal mt-2 text-gray-400'>{product.sku}</h4>
              <h6 className="font-semibold mb-2">Sizes:</h6>
              <SizeSelector sizes={product.sizes} onSizeChange={handleSizeChange} />

              <div className="mb-4 mt-8 ">
                <div className='flex flex-col md:flex-row items-center'>
            <h6 className="font-bold text-xl text-slate-700">Quantity:</h6>
            <div className="flex items-center md:ml-8">
              <button
               onClick={decrementQuantity}
               className="px-[4px] py-[4px] border text-2xl rounded-full bg-gray-200 
               focus:outline-none" >
                <Minus />
              </button>
              <p className="px-4 py-2 text-xl">{quantity}</p>
              <button
               onClick={incrementQuantity}
               className="px-[4px] py-[4px] text-2xl rounded-full bg-gray-200 
               focus:outline-none" >
                <Plus />
              </button>
            </div>
            </div>
          </div>

              <p className="mb-4 font-bold text-slate-700 text-xl">Category:
              <span className="ml-3 font-bold text-slate-900 text-lg">{product.category.name}</span>
            </p>

            <div className='flex flex-col md:flex-row items-center'>
              <Button className='mt-10 py-6 rounded-none border-black border-2
               bg-[#212121] w-auto text-white text-lg px-10 gap-x-3 
               outline-double shadow-md hover:bg-[#212122] hover:shadow-sm'>

                <ShoppingCart />
                Add to Cart
              </Button>
              <h6 className='ml-4 text-2xl font-bold mt-10'> $ {product.price}.00</h6>
            </div>
          </div>
        </div>

        <div className='mt-32 bg-white mb-40 ml-16 mr-16'>
        <div className='py-8 px-4 md:px-16'>
        <div className="relative text-center mb-36">
        <h3 className="z-40 ml-4 mb-48 text-xl md:text-2xl font-bold mt-5 md:mt-10 text-gray-900 absolute">
        Product Information
        </h3>
        <h1 className="z-10 text-6xl md:text-9xl font-bold opacity-10 absolute">
        OVERVIEW
        </h1>
     </div>

     </div>
     <Bar />
     <div className='flex flex-col md:flex-row mt-10'>
     <h1 className='text-xl ml-6 font-bold mt-8 mb-4 md:mt-0 md:mr-4'>
      PRODUCT DETAILS
     </h1>
     <div className="text-lg text-gray-700 mb-2 w-8/12">{product.productDetails}</div>
     </div>

     <div className="text-base  font-semibold flex  py-24">
      <h3 className='text-xl ml-6 font-bold mt-8 mb-4 md:mt-0 md:mr-4'>
        PRODUCT CARE</h3>
      <ul className="list-disc ml-10 font-medium text-slate-950 w-8/12">
      {product.productCare.map((point: any, index: any) => (
      <li key={index}>{point}</li>
      ))}
     </ul>
     </div>

     </div>

        <div className='bg-slate-50 h-32'></div>
      </div>
    ) : (
      <p className="text-center">Loading...</p>
    )}
  </div>
);
}