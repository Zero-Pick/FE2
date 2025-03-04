import React from "react";

const Toast = ({ message }) => {
  return (
    <div
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
      flex flex-col items-center justify-center px-[30px] py-5 rounded-md
      bg-white"
      style={{ boxShadow: "0px 1px 8px 0px rgba(79, 79, 79, 0.20)",  width: "fit-content" }}
    >
      <div className="mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
        >
          <g clipPath="url(#clip0_787_6718)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.5 18C10.6819 18 11.8522 17.7672 12.9442 17.3149C14.0361 16.8626 15.0282 16.1997 15.864 15.364C16.6997 14.5282 17.3626 13.5361 17.8149 12.4442C18.2672 11.3522 18.5 10.1819 18.5 9C18.5 7.8181 18.2672 6.64778 17.8149 5.55585C17.3626 4.46392 16.6997 3.47177 15.864 2.63604C15.0282 1.80031 14.0361 1.13738 12.9442 0.685084C11.8522 0.232792 10.6819 -1.76116e-08 9.5 0C7.11305 3.55683e-08 4.82387 0.948211 3.13604 2.63604C1.44821 4.32387 0.5 6.61305 0.5 9C0.5 11.3869 1.44821 13.6761 3.13604 15.364C4.82387 17.0518 7.11305 18 9.5 18ZM9.268 12.64L14.268 6.64L12.732 5.36L8.432 10.519L6.207 8.293L4.793 9.707L7.793 12.707L8.567 13.481L9.268 12.64Z"
              fill="#EE4E34"
            />
          </g>
          <defs>
            <clipPath id="clip0_787_6718">
              <rect
                width="18"
                height="18"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <span className="text-[15px] font-medium text-[#323232]">{message}</span>
    </div>
  );
};

export default Toast;
