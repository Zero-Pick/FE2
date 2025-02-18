import React from "react";
import DetailRound from "./DetailRound";
import AboutZero from "./AboutZero";
import ZeroTag from "../Home/ZeroTag";

const SumUpZero = ({ ingredient, artificialSweets }) => {
  return (
    <div className="w-[1100px] h-[831px] border-[1px] border-buttongray rounded-lg">
      
        {/* 제목 섹션 */}
        <div className="flex items-center my-8 ml-11">
          <span className="font-bold text-2xl mr-3">한눈에 보는 성분</span>
          <div className="flex space-x-[6px]">
          {ingredient?.zeroSugar && <ZeroTag label="제로슈거" />}
          {ingredient?.zeroKcal && <ZeroTag label="제로칼로리" />}
          </div>
        </div>
        <div className= "w-[729px] mx-auto">

        {/* 당류 및 칼로리 섹션 */}
        <div className="w-[729px] flex items-center justify-between">
          {/* 당류 섹션 */}
          <div className="flex flex-col items-center space-y-4">
          <DetailRound label={"당류"} value={ingredient?.sweet || 0} roundColor="bg-[#FCEDDA]" />
          <span className="text-base font-normal">{ingredient?.sweet > 0 ? "당류가 포함되어 있어요" : "제로슈거 제품이에요"}</span>
          </div>

          {/* 구분선 */}
          <div className="h-[279px] w-[2px] border-l border-dashed border-[#707070]"></div>

          {/* 칼로리 섹션 */}
          <div className="flex flex-col items-center space-y-4">
          <DetailRound label={"칼로리"} value={ingredient?.kcal || 0} roundColor="bg-[#FCEDDA]" />
          <span className="text-base font-normal">{ingredient?.kcal > 0 ? "칼로리가 포함되어 있어요" : "제로칼로리 제품이에요"}</span>
          
          </div>
        </div>

        {/* 대체감미료 섹션 */}
        {artificialSweets?.length > 0 && (
        <div className="w-[729px] pt-16">
          <h3 className="text-[20px] font-bold text-center mb-8">
            대체감미료 <span className="text-main01">{artificialSweets.length}</span> 종류가 포함되어 있어요
          </h3>
          <div className="space-y-9">
          {artificialSweets.map((sweet, index) => (
                <AboutZero
                  key={index}
                  name={sweet.sweetName}
                  amount={`${sweet.amount || "N/A"}g`}
                  description={sweet.sweetDetail}
                  feature={sweet.sweetPoint}
                  warning={sweet.sweetWarning}
                />
              ))}
          </div>
        </div>  
      )}
      </div>
    </div>
  );
};

export default SumUpZero;
