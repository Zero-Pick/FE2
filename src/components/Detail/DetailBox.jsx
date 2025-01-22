import React from "react";
import ProductRateBox from "./ProductRateBox";
import DetailRound from "./DetailRound";
import PutButton from "./PutButton";
import ZeroTag from "../../components/Home/ZeroTag";
import CompareBox from "./CompareBox";

const DetailBox = () => {
  const [showPopup, setShowPopup] = React.useState(false);

  const handleCompareButtonClick = (event) => {
    const buttonRect = event.target.getBoundingClientRect();
    setShowPopup((prev) => {
      if (!prev) {
        setPopupPosition({
          top: buttonRect.bottom + window.scrollY + 10,
          left: buttonRect.left + window.scrollX,
        });
      }
      return !prev;
    });
  };

  const [popupPosition, setPopupPosition] = React.useState({ top: 0, left: 0 });

  return (
    <div className="flex flex-wrap justify-between w-[1100px] h-[535px]">
      {/* 왼쪽 : 이미지 및 평점 */}
      <div className="w-[444px]">
        <ProductRateBox />
      </div>
      {/* 오른쪽 : 상세 정보 및 버튼 */}
      <div className="w-[616x] flex flex-col">
        {/* 상품 이름, 제로태그 */}
        <div className="mb-1">
          <h1 className="text-[20px] font-normal">라라스윗</h1>
          <div className="flex items-center space-x-2">
            <h2 className="text-[32px] font-bold">저당 초코우유</h2>
            <ZeroTag label={"제로슈거"} />
            <ZeroTag label={"제로칼로리"} />
          </div>
        </div>

        {/* 구분선 */}
        <hr className="mb-4 h-[2px] bg-buttongray"></hr>

        {/* 당류 칼로리 정보 */}
        <div className="flex justify-center space-x-[85px] mb-6">
          <DetailRound label="당류" value="0" />
          <DetailRound label="칼로리" value="3" />
        </div>

        {/* 구분선 */}
        <hr className="mb-4 h-[2px] bg-buttongray"></hr>

        {/* 최저가 정보 */}
        <div className=" flex items-center justify-between text-lg font-medium">
          <span className="text-2xl font-bold">최저가</span>
          <span className="text-main01 text-[32px] font-bold">
            2,800<span className="font-normal text-black text-2xl">원</span>
          </span>
        </div>
        <div className="mb-auto">
          <p className="font-normal text-[#707070] text-[10px]">
            네이버쇼핑 기준 2024.10.10 12:36
          </p>
        </div>

        {/* 버튼 2개 */}
        <div className="flex space-x-5">
          <PutButton label="비교함에 담기" onClick={handleCompareButtonClick} />
          <PutButton label="찜" />
        </div>
      </div>

      {/* 팝업 */}
      {showPopup && (
        <div
          className="absolute"
          style={{ top: `${popupPosition.top}px`, left: `${popupPosition.left}px` }}
        >
          <CompareBox />
        </div>
      )}
    </div>
  );
};

export default DetailBox;
