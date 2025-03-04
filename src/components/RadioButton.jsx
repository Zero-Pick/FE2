import React from "react";

const RadioButton = ({ label, isSelected, onClick }) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="radio"
        className="hidden"
        checked={isSelected}
        onChange={() => {
          console.log("RadioButton clicked:", label); // Debugging
          onClick(label);
        }}
      />
      <span onClick={() => onClick(label)} className="flex items-center">
        {isSelected ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clipPath="url(#clip0_645_3839)">
              <path
                d="M12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_645_3839">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clipPath="url(#clip0_645_3844)">
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_645_3844">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
        <span className="ml-[6px] text-left font-normal text-base w-[129px]">
          {label}
        </span>
      </span>
    </label>
  );
};

export default RadioButton;
