import React, { useState } from "react";

const CategoryBar = () => {
  const categories = [
    "음료 · 차",
    "과자 · 빵",
    "유가공품",
    "아이스크림 · 빙과",
    "초콜릿",
    "면 · 떡",
    "농수산가공식품",
  ];

  const [selected, setSelected] = useState();

  return (
    <div className="space-y-2">
      {categories.map((category) => (
        <div
          key={category}
          onClick={() => setSelected(category)}
          className={`relative flex items-center justify-center w-64 h-16 rounded-md cursor-pointer ${
            selected === category
              ? "bg-[#FCEDDA] text-main01 text-base font-bold"
              : "bg-[#f1f1f1] text-black text-base font-bold"
          }`}
        >
          {/* 텍스트 */}
          <span>{category}</span>

          {/* SVG 아이콘 */}
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
    </div>
  );
};

export default CategoryBar;
