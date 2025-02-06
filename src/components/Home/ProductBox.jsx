// Updated ProductBox.jsx to receive 'product' as a prop and handle undefined product gracefully
import React, { useState } from "react";
import ZeroTag from "./ZeroTag";

const ProductBox = ({ product }) => { // 'product'를 props로 받음
  const [isClicked, setIsClicked] = useState(false);

  const handleIconClick = () => {
    setIsClicked(!isClicked);
  };

  if (!product) {
    return <div>상품 정보를 불러오는 중입니다...</div>;
  }

  return (
    <div className="max-w-64">
      <img
        src={product.imageUrl || "https://via.placeholder.com/150"}
        alt={product.productName || "상품명 없음"}
        className="w-64 h-64 rounded-[4px] object-cover mb-3"
      />

      {/* 상품 정보 */}
      <div>
        {/* 제로 태그 */}
        <div className="flex space-x-[6px] mb-3">
          {product.zeroSugar && <ZeroTag label="제로슈거" />}
          {product.zeroKcal && <ZeroTag label="제로칼로리" />}
        </div>

        {/* 상품명 / 찜 버튼 */}
        <div className="flex justify-between mb-3 items-center">
          <h2 className="text-base font-medium mb-3">{product.productName || "상품명 없음"}</h2>
          <div onClick={handleIconClick} className="cursor-pointer flex items-center">
            {isClicked ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M14.1665 2.5H5.83317C4.9165 2.5 4.17484 3.25 4.17484 4.16667L4.1665 17.5L9.99984 15L15.8332 17.5V4.16667C15.8332 3.25 15.0832 2.5 14.1665 2.5Z" fill="black" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M14.1665 2.5H5.83317C4.9165 2.5 4.17484 3.25 4.17484 4.16667L4.1665 17.5L9.99984 15L15.8332 17.5V4.16667C15.8332 3.25 15.0832 2.5 14.1665 2.5ZM14.1665 15L9.99984 13.1833L5.83317 15V4.16667H14.1665V15Z" fill="black" />
              </svg>
            )}
          </div>
        </div>

        {/* 별점 / 가격 */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8.00016 11.513L12.1202 13.9997L11.0268 9.31301L14.6668 6.15967L9.8735 5.75301L8.00016 1.33301L6.12683 5.75301L1.3335 6.15967L4.9735 9.31301L3.88016 13.9997L8.00016 11.513Z" fill="#EE4E34" />
            </svg>
            <div className="w-[65px] font-normal text-base">
              <span className="mr-1">{product.starRate || 0}</span>
              <span className="text-[#707070]">({product.reviewCount || 0})</span>
            </div>
          </div>
          <span>{product.price ? product.price.toLocaleString() : "가격 정보 없음"}원</span>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
