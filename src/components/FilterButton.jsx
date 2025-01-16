import React from "react";

const FilterButton = ({ label, onClick, isSelected }) => {
  return (
    <button
      onClick={() => onClick(label)}
      className={`px-4 py-2 rounded-lg text-[14px] box-content border-[2px] 
        ${
          isSelected
            ? "border-main01 bg-[#FCEDDA] font-bold"
            : "border-[#f1f1f1] bg-[#f1f1f1] font-normal"
        }`}
    >
      {label}
    </button>
  );
};

export default FilterButton;
