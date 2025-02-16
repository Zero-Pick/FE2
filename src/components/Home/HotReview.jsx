import React from "react";

const HotReview = ({ reviewImg, reviewText, userId, date, productImg, productName, reviewCount, rating }) => {
  return (
    <div className="max-w-[200px] h-[328px] rounded-lg border-[#e2e2e2] border-[1px] bg-white">
      {/* 리뷰 이미지 */}
      <div className="relative">
        <img src={reviewImg} alt="리뷰 제품" className="rounded-t-lg w-full h-[200px] object-cover" />
      </div>

      {/* 리뷰 내용 */}
      <div className="p-3">
        <p className="text-sm font-normal truncate">{reviewText}</p>
        <div className="flex justify-between items-center mt-2 text-[#707070] text-xs">
          <span>{userId}</span>
          <span>{date}</span>
        </div>
      </div>

      {/* 제품 정보 */}
        <div className="flex items-center py-2 px-3 border-[#f1f1f1] border-t-[1px]">
        {/* 왼쪽: 제품 이미지 */}
        <img
            src={productImg}
            alt="제품 썸네일"
            className="w-9 h-9 rounded-[4px] object-cover mr-2"
        />

        {/* 오른쪽: 제품명 & 리뷰 평점 */}
        <div className="flex flex-col ml-1">
            {/* 제품명 */}
            <p className="text-sm mb-1 w-[124px] truncate">{productName}</p>

            {/* 리뷰 & 평점 */}
            <div className="flex text-xs text-[#707070]">
            <p className="mr-2">리뷰<span className="ml-1 text-xs font-bold">{reviewCount}</span></p>
            <p>평점<span className="text-xs ml-1 font-bold">{rating}</span></p>
            </div>
        </div>
        </div>

    </div>
  );
};

export default HotReview;
