import React, { useState } from "react";
import ZeroTag from "./ZeroTag";

const ProductBox = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleIconClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="max-w-64">
      <img
        src="https://contents.lotteon.com/itemimage/20241226075905/LM/88/09/59/93/60/10/4_/00/1/LM8809599360104_001_1.jpg"
        alt="제품 이미지"
        className="w-64 h-64 rounded-[4px] object-cover mb-3"
      />

      {/* 상품 정보 */}
      <div>
        {/* 제로 태그 */}
        <div className="flex space-x-[6px] mb-3">
          <ZeroTag />
          <ZeroTag />
        </div>

        {/* 상품명 / 찜 버튼 */}
        <div className="flex justify-between items-center">
          <h2 className="text-base font-medium mb-3">
            상품명 상품명 상품명 상품명
          </h2>
          {/* 클릭  SVG */}
          <div onClick={handleIconClick} className="cursor-pointer">
            {isClicked ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_748_8908)">
                  <path
                    d="M14.1665 2.5H5.83317C4.9165 2.5 4.17484 3.25 4.17484 4.16667L4.1665 17.5L9.99984 15L15.8332 17.5V4.16667C15.8332 3.25 15.0832 2.5 14.1665 2.5Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_748_8908">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M14.1665 2.5H5.83317C4.9165 2.5 4.17484 3.25 4.17484 4.16667L4.1665 17.5L9.99984 15L15.8332 17.5V4.16667C15.8332 3.25 15.0832 2.5 14.1665 2.5ZM14.1665 15L9.99984 13.1833L5.83317 15V4.16667H14.1665V15Z"
                  fill="black"
                />
              </svg>
            )}
          </div>
        </div>

        {/* 별점 / 가격 */}
        <div className="flex justify-between items-center">
        <div className="flex items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g clip-path="url(#clip0_748_8882)">
              <path
                d="M8.00016 11.513L12.1202 13.9997L11.0268 9.31301L14.6668 6.15967L9.8735 5.75301L8.00016 1.33301L6.12683 5.75301L1.3335 6.15967L4.9735 9.31301L3.88016 13.9997L8.00016 11.513Z"
                fill="#EE4E34"
              />
            </g>
            <defs>
              <clipPath id="clip0_748_8882">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div className="w-[65px] font-normal text-base">
            <span className="mr-1 ">4.22 </span>
            <span className="text-[#707070] ">(14)</span>
          </div>
          </div>
          <span className="">2,000원</span>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
