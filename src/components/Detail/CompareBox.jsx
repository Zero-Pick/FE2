import React from "react";

const CompareBox = ({ compareList = [], removeProduct }) => {
  const maxCompareCount = 3; // 최대 비교 가능 개수
  const filledSlots = compareList.length; // 현재 채워진 박스 개수
  const emptySlots = maxCompareCount - filledSlots; // 빈 박스 개수

  return (
    <div className="flex flex-col items-center rounded-lg p-8 bg-white border-buttongray border-[1px] w-[616px] h-[311px] justify-center">
      {/* 비교할 상품 리스트 */}
      <div className="flex gap-3">
        {/* 채워진 박스들 */}
        {compareList.map((product, index) => (
          <div key={index} className="relative w-44 h-44 rounded-[4px] bg-gray-300 flex items-center justify-center">
            <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover rounded-[4px]" />
            <button className="absolute top-2 right-2" onClick={() => removeProduct(product.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M19.5 6.41L18.09 5L12.5 10.59L6.91 5L5.5 6.41L11.09 12L5.5 17.59L6.91 19L12.5 13.41L18.09 19L19.5 17.59L13.91 12L19.5 6.41Z" fill="black" />
              </svg>
            </button>
          </div>
        ))}

        {/* 빈 박스 유지 */}
        {Array.from({ length: emptySlots }).map((_, index) => (
          <div key={`empty-${index}`} className="w-44 h-44 rounded-[4px] bg-white border-[1px] border-[#707070] flex items-center justify-center">
          </div>
        ))}
      </div>

      {/* 비교하기 버튼 */}
      <button className="rounded-lg w-[552px] h-[53px] mt-[18px] bg-main01 text-white text-2xl font-bold" aria-label="Compare">
        비교하기
      </button>
    </div>
  );
};

export default CompareBox;
