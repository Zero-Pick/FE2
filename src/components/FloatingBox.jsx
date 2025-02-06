import React from "react";

const FloatingBox = () => {
   // 화면 맨 위로 스크롤
   const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-10 right-10 flex flex-col items-center">
      <div className="bg-white w-full p-4 rounded-[4px] shadow-lg">
        {/* 제목 */}
        <h3 className="text-base font-medium mb-[18px] flex flex-col items-center ">최근 본 상품</h3>
        <div className="space-y-4">
           {/* 상품 아이템 1 */}
           <div className="bg-buttongray w-28 h-28 p-2 cursor-pointer flex flex-col rounded-[4px] justify-end items-start relative group">
            <p className="text-[10px] text-white  rounded absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
              라라스윗 초코우유
            </p>
          </div>
          {/* 상품 아이템 2 */}
          <div className="bg-buttongray w-28 h-28 p-2 cursor-pointer flex flex-col rounded-[4px] justify-end items-start relative group">
          <p className="text-[10px] text-white  rounded absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
              라라스윗 초코우유
            </p>
          </div>
          {/* 상품 아이템 3 */}
          <div className="bg-buttongray w-28 h-28 p-2 cursor-pointer flex flex-col rounded-[4px] justify-end items-start relative group">
          <p className="text-[10px] text-white  rounded absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
              라라스윗 초코우유
            </p>
          </div>
        </div>
      </div>
      {/* TOP 버튼 */}
      <button 
      onClick={scrollToTop}
      className="mt-6 w-16 h-16 bg-white border-[1px] shadow-lg border-buttongray text-black font-medium text-sm rounded-full">
        TOP
      </button>
    </div>
  );
};

export default FloatingBox;
