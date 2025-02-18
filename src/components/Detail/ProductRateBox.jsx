import React from 'react';
import RateBox from './RateBox';

const ProductRateBox = ({ imageUrl, rating, reviews }) => {
  return (
    <div className="flex flex-col w-[444px] items-center">
      {/* 이미지 */}
      <div className="w-full h-[439px] mb-5">
        <img
          src={imageUrl}
          alt="Product"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      {/* RateBox */}
      <RateBox rating={rating !== undefined ? rating : "0"} reviews={reviews || "0"} />
    </div>
  );
};

export default ProductRateBox;
