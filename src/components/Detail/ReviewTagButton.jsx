import React from 'react';

const ReviewTagButton = () => {
  return (
    <div className="flex flex-col items-start self-stretch gap-4">
      <button className="flex justify-between items-center self-stretch">
        다이어트에 딱이에요 (3)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <g clip-path="url(#clip0_650_10887)">
            <path
              d="M4.32324 13.4873L5.48632 14.6673L12.0574 8.00065L5.48632 1.33398L4.32324 2.51398L9.73125 8.00065L4.32324 13.4873Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_650_10887">
              <rect
                width="15.7706"
                height="16"
                fill="white"
                transform="translate(0.229492)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
};

export default ReviewTagButton;
