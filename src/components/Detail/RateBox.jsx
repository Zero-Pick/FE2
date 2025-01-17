import React from 'react';

const RateBox = ({ rating, reviews }) => {
  return (
    <div className="inline-flex items-center border border-[#e5e5e5] px-4 py-2 ">
      <span className="flex items-center text-sm">
        <span className="mr-1  text-main01">★</span>
        {rating}
      </span>
      <span className="mx-2 text-[#888]">|</span>
      <span className="text-sm text-[#4b3832]">리뷰 {reviews}</span>
    </div>
  );
};

export default RateBox;
