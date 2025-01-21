import React from 'react';

const ProductRegistrationBox = ({ date, brand, productName, status }) => {
  // 상태에 따른 텍스트 색상 결정
  const statusColor = {
    '대기 중': 'text-[#707070]',
    반려: 'text-main01',
    '등록 완료': 'text-black',
  };

  return (
    <div className="flex flex-row">
      {/* 등록 요청일 */}
      <div className="flex w-[125px] h-[48px] py-[12px] px-[16px] justify-center items-center border border-[#f1f1f1] text-black text-base font-normal">
        {date}
      </div>

      {/* 내용 */}
      <div className="flex w-[470px] h-[48px] py-[12px] px-[16px] items-center border border-[#f1f1f1] text-black text-base font-normal">
        <span className="text-[#707070] mr-1">{brand}&nbsp;</span>
        <span className="mr-auto">{productName}</span>
        <button className="text-main01 underline">상세보기</button>
      </div>

      {/* 처리 상태 */}
      <div
        className={`flex w-[114px] h-[48px] py-[12px] px-[16px] justify-center items-center border border-[#f1f1f1] text-base font-normal ${statusColor[status]}`}
      >
        {status}
      </div>
    </div>
  );
};

export default ProductRegistrationBox;
