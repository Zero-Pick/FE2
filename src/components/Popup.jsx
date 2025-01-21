import React from 'react';

const Popup = ({
  title,
  description,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg py-[20px] px-[30px] w-[400px] shadow-lg flex flex-col items-center">
        {/* Icon */}
        <div className="mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <g clip-path="url(#clip0_840_7230)">
              <path
                d="M9 18C4.0293 18 0 13.9707 0 9C0 4.0302 4.0293 0 9 0C13.9707 0 18 4.0302 18 9C18 13.9707 13.9707 18 9 18ZM9 4.5C8.7613 4.5 8.53239 4.59482 8.3636 4.7636C8.19482 4.93239 8.1 5.1613 8.1 5.4V9.9C8.1 10.1387 8.19482 10.3676 8.3636 10.5364C8.53239 10.7052 8.7613 10.8 9 10.8C9.2387 10.8 9.46761 10.7052 9.6364 10.5364C9.80518 10.3676 9.9 10.1387 9.9 9.9V5.4C9.9 5.1613 9.80518 4.93239 9.6364 4.7636C9.46761 4.59482 9.2387 4.5 9 4.5ZM9 13.5C9.2387 13.5 9.46761 13.4052 9.6364 13.2364C9.80518 13.0676 9.9 12.8387 9.9 12.6C9.9 12.3613 9.80518 12.1324 9.6364 11.9636C9.46761 11.7948 9.2387 11.7 9 11.7C8.7613 11.7 8.53239 11.7948 8.3636 11.9636C8.19482 12.1324 8.1 12.3613 8.1 12.6C8.1 12.8387 8.19482 13.0676 8.3636 13.2364C8.53239 13.4052 8.7613 13.5 9 13.5Z"
                fill="#333F58"
              />
            </g>
            <defs>
              <clipPath id="clip0_840_7230">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-[15px] font-medium text-[#323232}] mb-2">
          {title}
        </h2>

        {/* Description */}
        <p className="text-[14px] text-[#6d6d6d] text-center mb-[20px]">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex justify-center items-start">
          <button
            className="w-[80px] py-[7px] px-[23px] border rounded-[6px] text-[#6d6d6d] font-medium mr-4 text-xs"
            onClick={onCancel}
          >
            {cancelText}
          </button>
          <button
            className="w-[80px] py-[7px] px-[23px] bg-[#EE4E34] text-white rounded-[6px] font-medium text-xs"
            onClick={onConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
