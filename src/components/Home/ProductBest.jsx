import React from "react";
import ProductBox from "./ProductBox";

const ProductBest = ({ product, rank }) => {
  return (
    <div className="relative">
      {/* 순위 */}
      <div className="absolute top-4 left-4 flex items-center justify-center rounded-full bg-[#707070] w-12 h-12 text-white text-lg font-bold">
      <span>{rank}</span>
      </div>
      {/* ProductBox 컴포넌트 */}
      <ProductBox product={product} />
    </div>
  );
};

export default ProductBest;
