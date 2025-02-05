import React from "react";

const SearchBanner = () => {
  return (
    <div className="relative w-full h-[360px] bg-cover bg-center flex items-center justify-center py-[61px] px-4"
    >
      {/* 오버레이 */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* 내용 */}
      <div className="relative text-center text-white ">
        <p className="text-3xl font-bold "> <span className="text-[#FCEDDA]">건강한 제로</span>를 위한 시작!</p>
        <p className="text-3xl font-bold mb-5">지금 <span className="text-main01">제로픽 </span>에서 확인하고 구매하세요</p>
        <p className="text-base  h-[47px] flex items-center justify-center text-center mb-5">
          제품명, 성분, 브랜드로 원하는 제로 식품을 빠르게 찾아보세요
        </p>
         {/* 검색창 */}
         <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="검색어를 입력하세요."
            className="w-[331px] h-[33px] px-3 font-normal text-sm text-txtgray rounded-[4px] border-none focus:outline-none"
          />
          <button className="ml-2 h-[33px] w-[90px] bg-main01 text-[15px] font-medium text-white rounded-[4px]">
            검색
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBanner; 