import React, { useState } from "react";

const DeleteCheck = ({ onConfirm, onCancel }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[480px] px-8 py-6 rounded-lg shadow-lg">
        <div className="w-[416px] flex justify-between items-center">
          <h2 className="text-2xl font-bold">
            정말 서비스를 탈퇴하시겠어요?</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            onClick={onCancel}
            className="cursor-pointer"
          >
            <g clip-path="url(#clip0_645_7211)">
              <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#6D6D6D" />
            </g>
            <defs>
              <clipPath id="clip0_645_7211">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <p className="mb-6 mt-6 text-sm text-[#6d6d6d]">
          탈퇴 시 모든 회원 정보와 기록이 삭제되며 복구할 수 없습니다. 
          <br/>
          단, 작성하신 리뷰는 삭제되지 않습니다.
        </p>
        <div className="mb-6 w-[416px] flex items-center"> 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            onClick={handleCheckClick}
            className="cursor-pointer"
          >
            {isChecked ? (
              <g clip-path="url(#clip0_645_7233)">
                <path
                  d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                  fill="#EE4E34"
                />
              </g>
            ) : (
              <g clip-path="url(#clip0_645_7217)">
                <path
                  d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z"
                  fill="#EE4E34"
                />
              </g>
            )}
            <defs>
              <clipPath id="clip0_645_7217">
                <rect width="24" height="24" fill="white" />
              </clipPath>
              <clipPath id="clip0_645_7233">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p className="ml-2 text-sm font-normal">
            탈퇴 시 유의사항을 확인하였으며, 모두 동의합니다.
          </p>
        </div>
        <div className="flex">
          <button
            onClick={onConfirm}
            disabled={!isChecked}
            className={`w-[416px] h-[52px] rounded-10px text-center text-base font-bold  ${
              isChecked ? "bg-main01 text-white" : "bg-buttongray text-[#707070]"
            }`}
          >
            탈퇴하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteCheck;
