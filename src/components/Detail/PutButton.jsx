import React from 'react';

const PutButton = ({ label, onClick }) => {
  const isCompareMode = label === "찜";

  return (
    <button
      className={`w-[297px] h-[76px] text-center font-bold text-2xl rounded-lg ${
        isCompareMode
          ? "bg-main01 text-white"
          : "bg-[#f1f1f1] text-black border-[1px] border-[#707070]"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default PutButton;
