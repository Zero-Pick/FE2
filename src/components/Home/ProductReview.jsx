import React from "react";
import ReviewBox from "./ReviewBox";
import ProductBest from "./ProductBest";

const ProductReview = ({ product, rank  }) => {
  return (
    <div>
      <ProductBest  product={product}  rank={rank}  />
      <ReviewBox  product={product} />
    </div>
  );
};

export default ProductReview;
