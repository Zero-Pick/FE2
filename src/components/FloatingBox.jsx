import React from "react";

const FloatingBox = () => {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-center">
      <div className="bg-white w-full p-4 ">
        {/* 제목 */}
        <h3 className="text-base font-medium mb-[18px] flex flex-col items-center ">최근 본 상품</h3>
        <div className="space-y-4">
          {/* 상품 아이템 1 */}
          <div className="bg-buttongray w-28 h-28 p-2 cursor-pointer flex flex-col justify-end items-start">
            <p className="text-[10px] text-black">라라스윗 초코우유</p>
          </div>
          {/* 상품 아이템 2 */}
          <div className="bg-buttongray w-28 h-28 p-2 cursor-pointer flex flex-col justify-end items-start">
            <p className="text-[10px] text-black">라라스윗 초코우유</p>
          </div>
          {/* 상품 아이템 3 */}
          <div className="bg-buttongray w-28 h-28 p-2 cursor-pointer flex flex-col justify-end items-start">
            <p className="text-[10px] text-black">라라스윗 초코우유</p>
          </div>
        </div>
      </div>
      {/* TOP 버튼 */}
      <button className="mt-6 w-16 h-16 bg-buttongray text-black font-medium text-sm rounded-full">
        TOP
      </button>
    </div>
  );
};

export default FloatingBox;
