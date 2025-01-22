import React from "react";
import DetailRound from "./DetailRound";
import AboutZero from "./AboutZero";
import ZeroTag from "../Home/ZeroTag";

const SumUpZero = ({ sugarContent, calorieContent }) => {
  return (
    <div className="w-[1100px] h-[831px] border-[1px] border-buttongray rounded-lg">
      
        {/* 제목 섹션 */}
        <div className="flex items-center my-8 ml-11">
          <span className="font-bold text-2xl mr-3">한눈에 보는 성분</span>
          <div className="flex space-x-[6px]">
            <ZeroTag label={"제로슈거"} />
            <ZeroTag label={"제로슈거"} />
          </div>
        </div>
        <div className= "w-[729px] mx-auto">

        {/* 당류 및 칼로리 섹션 */}
        <div className="w-[729px] flex items-center justify-between">
          {/* 당류 섹션 */}
          <div className="flex flex-col items-center space-y-4">
            <DetailRound label={"당류"} value={0} roundColor="bg-[#FCEDDA]" />
            <span className="text-base font-normal">{sugarContent}</span>
          </div>

          {/* 구분선 */}
          <div className="h-[279px] w-[2px] border-l border-dashed border-[#707070]"></div>

          {/* 칼로리 섹션 */}
          <div className="flex flex-col items-center space-y-4">
            <DetailRound label={"칼로리"} value={3} roundColor="bg-[#FCEDDA]" />
            <span className="text-base font-normal">{calorieContent}</span>
          </div>
        </div>

        {/* 대체감미료 섹션 */}
        <div className="w-[729px] pt-16">
          <h3 className="text-[20px] font-bold text-center mb-8">
            대체감미료 <span className="text-main01">2</span> 종류가 포함되어 있어요
          </h3>
          <div className="space-y-9">
            <AboutZero
              name={"알룰로오스"}
              amount={"13g"}
              description={
                "무화과, 건포도에서 발견되는 당의 일종으로, 체내에서 거의 흡수되지 않아 칼로리가 매우 낮은 천연 감미료입니다. 열에 강하기 때문에 주방에서도 자주 사용돼요."
              }
              feature={"끝맛이 조금 씁쓸한 편이에요."}
              warning={"과량 섭취 시 복통과 설사를 유발할 수 있어요!"}
            />
            <AboutZero
              name={"알룰로오스"}
              amount={"13g"}
              description={
                "무화과, 건포도에서 발견되는 당의 일종으로, 체내에서 거의 흡수되지 않아 칼로리가 매우 낮은 천연 감미료입니다. 열에 강하기 때문에 주방에서도 자주 사용돼요."
              }
              feature={"끝맛이 조금 씁쓸한 편이에요."}
              warning={"과량 섭취 시 복통과 설사를 유발할 수 있어요!"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SumUpZero;
