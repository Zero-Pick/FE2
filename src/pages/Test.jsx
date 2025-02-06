import React, { useState } from "react";
import ProductInfo from "../components/Comparison/ProductInfo";
import Ingredient from "../components/Comparison/Ingredient";
import RateTopReview from "../components/Comparison/RateTopReview";

const Test = () => { 
  const [products, setProducts] = useState([
    { 
      id: 1, 
      name: "제품명1제품명1제품명1", 
      tags: ["제로슈거", "제로칼로리"],
      status: "찜하기",
      sugar: "8g", 
      calorie: "2kcal", 
      rating: 4.66, 
      goodTags: ["식사가 든든해요", "식사가 든든해요", "식사가 든든해요"],
      badTags: ["식사가 든든해요", "식사가 든든해요", "식사가 든든해요"],
      sweeteners: ["대체감미료1", "대체감미료2"]
    },
    { 
      id: 2, 
      name: "제품명2제품명2제품명2", 
      tags: ["제로슈거", "제로칼로리"],
      status: "찜하기",
      sugar: "8g", 
      calorie: "2kcal", 
      rating: 4.2, 
      goodTags: ["식사가 든든해요", "식사가 든든해요", "식사가 든든해요"],
      badTags: ["식사가 든든해요", "식사가 든든해요", "식사가 든든해요"],
      sweeteners: ["대체감미료1", "대체감미료2"]
    }
  ]);

  return (
    <div className="bg-gray-100 p-6 grid grid-cols-2 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
          {/*  제품 정보 박스 */}
          <ProductInfo name={product.name} tags={product.tags} status={product.status} />

          {/*  당류, 칼로리양, 대체감미료  */}
          <Ingredient sugar={product.sugar} calorie={product.calorie} sweeteners={product.sweeteners} />
          
          {/*  별점, 리뷰 TOP 태그 */}
          <RateTopReview rating={product.rating} goodTags={product.goodTags} badTags={product.badTags} />
        </div>
      ))}
    </div>
  );
};

export default  Test;
