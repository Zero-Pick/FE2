import React from 'react';

const RateBox = ({ rating, reviews }) => {
  return (
    <div className="inline-flex  font-normal text-center items-center rounded-lg border-[1px] border-[#707070] h-[76px] w-[444px] bg-white">
      <div className="flex items-center justify-center w-[222px] h-full text-2xl">
        <span className="mr-1 text-2xl text-main01">★</span>
        {rating}
      </div>
      <div className="flex text-2xl items-center justify-center h-full font-normal text-[#707070] ">|</div>
      <div className="flex items-center justify-center w-[222px] h-full text-2xl text-[#4b3832]">
        리뷰 {reviews}
      </div>
    </div>
  );
};

export default RateBox;
