import React from 'react';
import RateBox from './RateBox';

const ProductRateBox = () => {
  return (
    <div className="flex flex-col w-[444px] items-center">
      {/* 이미지 부분 */}
      <div className="w-full h-[439px] mb-5">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmuXKfK5A_cKXnu4IduMpOl6icmsILZheipngsrJgH1OEf1Y2jHssye2cqjLKzdLC3xk&usqp=CAU"
          alt="Product"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      {/* RateBox */}
      <RateBox rating="4.22" reviews="12" />
    </div>
  );
};

export default ProductRateBox;
