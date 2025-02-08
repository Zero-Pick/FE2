import React from "react";
import Tags from "./Tags";

const Ingredient = ({ sugar, calorie, sweeteners }) => {
  return (
    <div className="flex flex-col w-[200px] items-center bg-red-200 ">
      {/* 당류 정보 */}
      <div className="text-center mb-[72px]">
        <p className="text-[32px] font-normal">{sugar}</p>
      </div>

      {/* 칼로리량 정보 */}
      <div className="text-center mb-[72px]">
        <p className="text-[32px] font-normal">{calorie}</p>
      </div>

      {/* 대체감미료 정보 */}
      <div className="text-center">
        <Tags tags={sweeteners} />
      </div>
    </div>
  );
};

export default Ingredient;
 