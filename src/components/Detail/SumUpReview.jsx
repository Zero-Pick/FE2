import React from "react";
import AboutReview from "./AboutReview";

const SumUpReview = ({overallRating, reviewCount }) => {
  return (
    <div className="w-[1100px] h-[343px] border-[1px] border-buttongray rounded-lg flex flex-col items-center">
      {/* 제목, 별점, 리뷰 수 */}
      <div className="flex items-center justify-between w-[1000px] mt-8 mb-4">
        <div className="flex items-center">
          <span className="text-2xl font-bold pr-3">한눈에 보는 리뷰</span>
          <button className="border-[1px] font-normal text-sm text-center py-[2px] px-2">전체보기</button>
        </div>
        <div className="flex items-center text-2xl font-normal">
          <span className="mr-1"><span className="text-main01 mr-[1px]">★ </span>{overallRating}</span>
          <span className="t">({reviewCount})</span>
        </div>
      </div>

      {/* 리뷰 설명 */}
      <div className="flex w-[1000px]">
        <p className="text-gray-600 text-sm">
          리뷰에서 많이 언급된 특징을 확인해보세요!
        </p>
      </div>

      {/* 리뷰 섹션 */}
      <div className="space-y-6 w-[720px] mt-16">
        <AboutReview category="맛" comment="달지 않고 깔끔해요" count="4" percentage="30" />
        <AboutReview category="유용성" comment="다이어트에 딱이에요" count="4" percentage="30" />
        <AboutReview category="포장/가격" comment="가성비가 좋아요" count="4" percentage="30" />
      </div>
    </div>
  );
};

export default SumUpReview;
