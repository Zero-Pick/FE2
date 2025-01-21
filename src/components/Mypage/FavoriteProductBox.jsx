import React from 'react';
import ZeroTag from '../../components/Home/ZeroTag';

const FavoriteProductBox = () => {
  return (
    <div className="max-w-[160px]">
      <img
        src="https://product-image.kurly.com/product/image/c9dc2d27-f7ff-4167-b11e-3aac18b97528.jpg"
        alt="제품 이미지"
        className="w-[160px] h-[160px] rounded-[4px] object-cover mb-3"
      />

      {/* 상품 정보 */}
      <div>
        {/* 제로 태그 */}
        <div className="flex space-x-[6px] mb-3">
          <ZeroTag label={'제로슈거'} />
          <ZeroTag label={'제로칼로리'} />
        </div>

        {/* 상품명 */}
        <div className="flex justify-between mb-3 items-center">
          <h2 className="text-base font-normal">상품명 상품명 상품명 상품명</h2>
        </div>
      </div>
    </div>
  );
};

export default FavoriteProductBox;
