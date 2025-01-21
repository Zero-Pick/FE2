import React, { useState } from 'react';
import ModifyReview from './../Detail/ModifyReview';
import Popup from '../Popup';
import Toast2 from '../Toast2';

const ReviewBox = ({ brand, productName, rating, content, tags, date }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true); // 수정 모드 활성화
  };

  const handleCancelEdit = () => {
    setIsEditing(false); // 수정 모드 비활성화
  };

  const handleDeleteClick = () => {
    setShowPopup(true); // Popup 표시
  };

  const handleConfirm = () => {
    setShowPopup(false); // Popup 숨기기
    setShowToast(true); // Toast2 표시
  };

  const handleCancel = () => {
    setShowPopup(false); // Popup 숨기기
  };

  const handleToastClose = () => {
    setShowToast(false); // Toast2 숨기기
  };

  return (
    <>
      <div className="flex flex-col justify-center items-start mb-6 border-b">
        {/* 브랜드명 및 제품명 */}
        <div
          className="flex flex-row w-full items-start p-[16px] border border-[#f1f1f1] rounded-[8px]"
          style={{ boxShadow: '0px 1px 8px 0px rgba(0, 0, 0, 0.25)' }}
        >
          <div className="bg-[#d9d9d9] w-[48px] h-[48px] mr-2 rounded-[4px]"></div>
          <div>
            <div className="text-sm text-gray-500 font-semibold mr-2">
              {brand}
            </div>
            <div className="text-base font-bold text-black">{productName}</div>
          </div>
        </div>

        {/* 별점 및 날짜 */}
        <div className="flex justify-between items-center self-stretch">
          {/* 별점 */}
          <div className="flex items-center my-4">
            {Array.from({ length: 5 }, (_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill={index < rating ? '#EE4E34' : '#D9D9D9'}
              >
                <path d="M12 .587l3.668 7.57 8.332 1.151-6.004 5.853 1.413 8.26L12 18.902 4.591 23.421l1.413-8.26-6.004-5.853 8.332-1.151L12 .587z" />
              </svg>
            ))}
          </div>

          {/* 날짜 및 액션 */}
          <div className="flex items-center justify-end text-sm text-[#707070] font-normal gap-4">
            <span>{date}</span>
            <div className="flex gap-4">
              <button
                className="text-[#d9d9d9] text-right"
                onClick={handleEditClick}
              >
                수정
              </button>
              <button
                className="text-[#d9d9d9] text-right"
                onClick={handleDeleteClick}
              >
                삭제
              </button>
            </div>
          </div>
        </div>

        {/* 리뷰 상세 */}
        <div className="flex items-start self-stretch mb-6">
          <div className="flex flex-col items-start self-stretch">
            {/* 리뷰 내용 */}
            <p className="text-sm text-black leading-relaxed mb-4">{content}</p>

            {/* 태그 */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-lg text-[14px] box-content border-[2px] border-[#f1f1f1] bg-[#f1f1f1] font-normal"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* 이미지 */}
          <div className="bg-[#d9d9d9] w-[144px] h-[144px] rounded-[2px] ml-4"></div>
        </div>
      </div>

      {/* 모달 */}
      {isEditing && (
        <ModifyReview
          brand={brand}
          productName={productName}
          rating={rating}
          content={content}
          tags={tags}
          date={date}
          onClose={handleCancelEdit}
        />
      )}

      {/* Popup */}
      {showPopup && (
        <Popup
          title="작성하신 리뷰를 정말로 삭제하시겠습니까?"
          description="삭제된 리뷰는 복구할 수 없습니다."
          confirmText="확인"
          cancelText="취소"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}

      {/* Toast2 */}
      {showToast && (
        <Toast2
          title="리뷰가 삭제되었습니다."
          message=""
          onClose={handleToastClose}
        />
      )}
    </>
  );
};

export default ReviewBox;
