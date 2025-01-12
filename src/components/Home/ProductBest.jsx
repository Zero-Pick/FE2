import React from "react";
import ProductBox from "./ProductBox";

const ProductBest = () => {
  return (
    <div className="relative">
      {/* 순위 */}
      <div className="absolute top-4 left-4 flex items-center justify-center rounded-full bg-[#707070] w-12 h-12 text-white text-lg font-bold">
        <span>1</span>
      </div>
      {/* ProductBox 컴포넌트 */}
      <ProductBox />
    </div>
  );
};

export default ProductBest;
