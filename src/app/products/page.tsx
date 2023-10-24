import React from 'react';
import ProductCard from '@/Components/views/ProductCard';
import Image from 'next/image';
import { client } from '@/lib/sanityClient';
import { Image as IImage } from 'sanity';
import { urlForImage } from '../../../sanity/lib/image';
import Link from 'next/link';
import Wrapper from '@/Components/shared/Wrapper';

 const getProductData = async () => {
  const res = await client.fetch(`*[_type == "product"]{
    price,
    _id,
    title,
    sku,
    sizes,
    productDetails,
    productCare,
    image,
    category -> {
      name
    }
  }`);
  return res;
};

interface IProduct {
  title: string,
  _id: string,
  productCare: string,
  productDetails: string,
  sku: string,
  sizes: number,
  image: IImage[],
  price: number,
  category : {
    name: string
  }
}
 async function Home() {
  const data: IProduct[] = await getProductData();

  return (
    <Wrapper>
    <div className="  mt-16 py-10 ml-3 mr-3">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2
       md:gap-24 mx-auto">
        {data.map((item: IProduct) => (
           <div key={item._id}> 
           <Link href={`/products/${item._id}`} >

          
              {item.image && item.image[0] && (
                <Image src={urlForImage(item.image[0]).url()} alt='Image' 
                height={1500} width={900}/>
              )
              
              }
              <h1 className=' text-lg md:text-2xl lg:text-2xl font-semibold mt-2'>{item.title}</h1>
              <h2 className='text-xl text-gray-500 font-semibold'>{item.sku}</h2>
              <h4 className='text-xl font-bold mt-2 ml-2'>${item.price}</h4>
              
          </Link>
         
          </div>
        ))}
      </div>
    </div></Wrapper>
  );
}

export default Home;