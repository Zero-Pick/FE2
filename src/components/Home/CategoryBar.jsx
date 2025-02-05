import React, { useState } from "react";
import api from "../../api/axiosInstance"; // 수정된 부분
import ProductReview from "./ProductReview";

const categoryMap = {
  BEVERAGE_TEA: "음료 · 차",
  SNACK_BREAD: "과자 · 빵",
  DAIRY_PRODUCTS: "유가공품",
  ICE_CREAM: "아이스크림 · 빙과",
  CHOCOLATE: "초콜릿",
  NOODLE_RICE_CAKE: "면 · 떡",
  AGRICULTURAL_PRODUCTS: "농수산가공식품",
  ETC: "기타",
};

const categories = Object.keys(categoryMap);

const CategoryBar = () => {
  const [products, setProducts] = useState([]); // 상품 데이터 상태
  const [selected, setSelected] = useState(""); // 선택된 카테고리 상태

  const fetchBestProducts = async (category) => {
    try {
      console.log(`Fetching data for category: ${category}`); // 요청 전 콘솔 출력
      const response = await api.get("/home/category", {
        params: { category },
      });

      // 데이터 가공
      const products = response.data.information.map((product) => ({
        ...product,
        categoryName: categoryMap[product.category],
      }));
      setProducts(products); // 상품 데이터 업데이트

      console.log("Fetched products:", products); // 가져온 데이터 콘솔 출력
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleCategoryClick = (category) => {
    setSelected(category); // 선택된 카테고리 설정
    console.log(`Selected category: ${category}`); // 선택된 카테고리 콘솔 출력
    fetchBestProducts(category); // 데이터 가져오기
  };

  return (
    <div className="space-y-2">
      {categories.map((category) => (
        <div
          key={category}
          onClick={() => handleCategoryClick(category)} // 클릭 핸들러 추가
          className={`relative flex items-center justify-center w-64 h-16 rounded-md cursor-pointer ${
            selected === category
              ? "bg-[#FCEDDA] text-main01 text-base font-bold"
              : "bg-[#f1f1f1] text-black text-base font-bold"
          }`}
        >
          <span>{categoryMap[category]}</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            className="absolute right-[16px]"
          >
            <path
              d="M0.634918 11.8956L5.03018 6.99961L0.634918 2.10361L1.98804 0.599609L7.74603 6.99961L1.98804 13.3996L0.634918 11.8956Z"
              fill="#707070"
            />
          </svg>
        </div>
      ))}

      <div className="flex justify-between w-full mt-8">
        {products.map((product) => (
          <ProductReview key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
