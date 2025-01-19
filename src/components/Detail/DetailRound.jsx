import React from "react";

const DetailRound = ({ label,  value,  unit }) => {
  const valueColor = label === "당류" ? "text-main01" : "text-[#EEAD34]";
  const unitText = label === "당류" ? "g" : "kcal";

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-lg font-bold mb-4">{label}</div>
      <div className="flex flex-col items-center justify-center w-[208px] h-[208px] bg-buttongray rounded-full">
        <div className={`text-[32px] font-bold ${valueColor}`}>
          {value}<span className="text-black">{unitText}</span>
        </div>
      </div>
    </div>
  );
};

export default DetailRound;
