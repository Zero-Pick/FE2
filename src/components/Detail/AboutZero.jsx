import React from "react";

const AboutZero = ({ name, amount, description, feature, warning }) => {
  return (
    <div className=" items-center justify-center flex h-[120px]">
      {/* 이름, 양 */}
      <div className="bg-buttongray mr-10 relative w-[180px] h-[120px] rounded-[10px] text-[20px] font-bold text-center flex items-center justify-center">
        {name}
        <span className="font-normal text-sm absolute right-2 bottom-2">
          {amount}
        </span>
      </div>

      {/* 설명 */}
      <div className=" w-[509px] space-y-3 flex flex-col">
        <span className="font-normal text-sm">{description}</span>

        <div className="flex items-center space-x-3">
          <div className="bg-txtgray text-white px-3 py-1 rounded-lg font-base text-sm">
            특징
          </div>
          <div className="text-txtgray text-sm">{feature}</div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="bg-main01 text-white px-3 py-1 rounded-lg font-base text-sm">
            주의⚠
          </div>
          <div className="text-main01 text-sm">{warning}</div>
        </div>
      </div>
    </div>
  );
};

export default AboutZero;
