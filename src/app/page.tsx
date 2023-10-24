import Hero from '@/Components/views/Hero';
import Promotion from '@/Components/widgets/Promotion';
import ProducSlide from '@/Components/widgets/ProducSlide';
import Vintage from '@/Components/widgets/Vintage';
import Newsletter from '@/Components/widgets/Newsletter';
import React from 'react';

const HomePage = () => {
  return (
    <div className=''>
      {/* Hero Section Here */}
      <Hero />

      {/* Promotion Section here */}
      <Promotion />

      {/* Product Slider Section here */}
      <ProducSlide />

      {/* Vintage Jewellery Section here */}
      <Vintage />

      {/* Newsletter Section here */}
      <Newsletter />
    </div>
  );
}
export default HomePage;
