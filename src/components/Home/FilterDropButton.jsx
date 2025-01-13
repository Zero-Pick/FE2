import React, { useState } from "react";

const FilterDropButton = ({ label }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      onClick={toggleDropdown}
      className={`flex items-center justify-between px-4 py-2 rounded-lg text-txtgray text-[14px] box-content border-2
        ${
          isOpen
            ? "border-[#707070] bg-white"
            : "border-[#f1f1f1] bg-[#f1f1f1]"
        }`}
    >
      <span>{label}</span>
      <span className="ml-2">
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clipPath="url(#clip0_748_9053)">
              <path
                d="M6.175 12.8418L10 9.02513L13.825 12.8418L15 11.6668L10 6.6668L5 11.6668L6.175 12.8418Z"
                fill="#707070"
              />
            </g>
            <defs>
              <clipPath id="clip0_748_9053">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="matrix(1 0 0 -1 0 20)"
                />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clipPath="url(#clip0_777_10660)">
              <path
                d="M6.175 7.1582L10 10.9749L13.825 7.1582L15 8.3332L10 13.3332L5 8.3332L6.175 7.1582Z"
                fill="#707070"
              />
            </g>
            <defs>
              <clipPath id="clip0_777_10660">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
      </span>
    </button>
  );
};

export default FilterDropButton;
