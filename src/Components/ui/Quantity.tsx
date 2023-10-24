'use client'
import React, { useState } from 'react';

interface SizeSelectorProps {
  sizes: { quantity: number; size: string }[];
  onSizeChange: (selectedSize: string) => void;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({ sizes, onSizeChange }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(0);

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
    const selectedSizeData = sizes.find((size) => size.size === selectedSize);
    return selectedSizeData ? selectedSizeData.quantity : 0;
  };

  return (
    <div className="flex gap-x-4">
  
  
      {sizes.map((size, index) => (
        <div
        className={`rounded-full w-10 h-10 text-center cursor-pointer shadow-lg hover:shadow-2xl ${
          selectedSize === size.size ? 'bg-white' : ''
        }`}
        key={index}
        onClick={() => {
          setSelectedSize(size.size);
          onSizeChange(size.size);
          setQuantity(0);
        }}
      >
        <div className="mt-[8px] font-semibold">{size.size}</div>
      </div>
      ))}
    </div>
  );
};

export default SizeSelector;
