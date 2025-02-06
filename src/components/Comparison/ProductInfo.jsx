import React from "react";
import ZeroTag from "../Home/ZeroTag";

const ProductInfo = ({ name, tags, status }) => {
  return (
    <div className="flex flex-col items-center w-[200px] bg-yellow-300">
      {/* 닫기 버튼 */}
      <button className="mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clipPath="url(#clip0_1004_6965)">
            <path
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
              fill="#707070"
            />
          </g>
          <defs>
            <clipPath id="clip0_1004_6965">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>

      {/* 제품 이미지 */}
      <div className="w-[200px] h-[198px] bg-gray-300 rounded-[4px] mb-4"></div>

      {/* 제품 태그 */}
      <div className="flex gap-[6px] mb-3">
        {tags.map((tag, index) => (
          <ZeroTag key={index} label={tag} />
        ))}
      </div>

      {/* 제품명 */}
      <p className="text-base w-[180px] text-center font-normal mb-3">
        {name}
      </p>

      {/* 평가하기 버튼 */}
      <button
        className={`px-4 py-2  text-base font-normal rounded-lg ${
          status === "찜하기 " ? "bg-[#FCEDDA] text-black" : "bg-main01 text-white"
        }`}
      >
        {status}
      </button>
    </div>
  );
};

export default ProductInfo;
