import React from "react";

const AboutReview = ({ category, comment, count, percentage }) => {
  return (
    <div className="flex items-center w-[720px] justify-between">
      <div className="flex items-center  justify-between w-full">
        {/* 카테고리 태그 */}
        <div className="border-black border-[1px] bg-white text-center flex-shrink-0 text-base font-bold w-24 h-7 py-[2px]">
          {category}
        </div>
        {/* 리뷰, 개수  */}
        <div className="w-[480px] text-black font-normal text-left text-xl">
          {comment} <span className="text-[#707070]"> ({count})</span>
        </div>
      {/* 퍼센트  */}
      <div className=" text-xl text-right font-medium flex-shrink-0">{percentage}%</div>
      </div>
    </div>
  );
};



export default AboutReview;
  