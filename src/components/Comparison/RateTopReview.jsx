import React from "react";
import Tags from "./Tags";

const RateTopReview = ({ rating, goodTags, badTags }) => {
  // 별점
  const stars = Math.round(rating);
  
  return (
    <div className="flex flex-col items-center bg-blue-300 w-[200px]">
      {/* 별점 표시 */}
      <div className="flex items-center">
        {Array(5).fill(0).map((_, index) => (
          <span key={index} className={`text-[32px] ${index < stars ? "text-main01" : "text-gray-300"}`}>
            ★
          </span>
        ))}
      </div>
      <span className="text-xl font-normal mb-12 ">{rating.toFixed(2)}점</span>

      {/* 좋은 리뷰 태그 */}
      <div className="mb-8 w-full text-center">
        <p className="mb-2 text-[32px]">🥰</p>
        <div className="flex justify-center">
          <Tags tags={goodTags} />
        </div>
      </div>

      {/* 나쁜 리뷰 태그 */}
      <div className="mb-16 w-full text-center">
        <p className="mb-2 text-[32px]">😅</p>
        <div className="flex justify-center">
          <Tags tags={badTags} />
        </div>
      </div>

    </div>
  );
};

export default RateTopReview;
