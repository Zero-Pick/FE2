import React from "react";

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

const CategoryBar = ({ onSelectCategory, selectedCategory }) => {
  return (
    <div className="space-y-2">
      {categories.map((category) => (
        <div
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`relative flex items-center justify-center w-64 h-16 rounded-md cursor-pointer ${
            selectedCategory === category
              ? "bg-[#FCEDDA] text-main01 text-base font-bold"
              : "bg-[#f1f1f1] text-black text-base font-bold hover:bg-[#FCEDDA] hover:text-main01"
          }`}
        >
          <span>{categoryMap[category]}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoryBar;