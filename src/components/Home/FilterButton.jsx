import React, { useState } from "react";

const FilterButton = ({ label }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      onClick={toggleActive}
      className={`px-4 py-2  rounded-lg  text-[14px] box-content   border-2
        ${
          isActive
            ? "border-main01 bg-[#FCEDDA] font-bold"
            : "border-[#f1f1f1] bg-[#f1f1f1] font-normal"
        }`}
    >
      {label}
    </button>
  );
};

export default FilterButton;
