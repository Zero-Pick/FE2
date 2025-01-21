import React, { useState } from 'react';
import Popup from '../Popup';
import Toast2 from '../Toast2';

const ModifyReview = ({ onClose }) => {
  const positiveTags = [
    '달달해요',
    '담백하고 깔끔해요',
    '식사 대신 든든해요',
    '간식으로 딱 좋아요',
    '다이어트에 딱이에요',
    '혈당 걱정 덜어줘요',
    '가성비가 좋아요',
    '맛의 종류가 다양해요',
    '휴대하기 편해요',
  ];

  const negativeTags = [
    '달달해요',
    '담백하고 깔끔해요',
    '식사 대신 든든해요',
    '간식으로 딱 좋아요',
    '다이어트에 딱이에요',
    '혈당 걱정 덜어줘요',
    '가성비가 좋아요',
    '맛의 종류가 다양해요',
    '휴대하기 편해요',
  ];

  const [selectedPositiveTags, setSelectedPositiveTags] = useState([]);
  const [selectedNegativeTags, setSelectedNegativeTags] = useState([]);

  const handlePositiveTagClick = (tag) => {
    setSelectedPositiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleNegativeTagClick = (tag) => {
    setSelectedNegativeTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const [rating, setRating] = useState(0);
  const [reviewContent, setReviewContent] = useState('');
  const [uploadedImages, setUploadedImages] = useState([
    'https://via.placeholder.com/96',
    'https://via.placeholder.com/96',
  ]);
  const [willBuyAgain, setWillBuyAgain] = useState(false);

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleImageRemove = (index) => {
    setUploadedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleImageUpload = () => {
    alert('이미지 업로드 기능은 구현되지 않았습니다.');
  };

  const handleSubmit = () => {
    if (!reviewContent.trim()) {
      setErrorMessage('내용을 입력해주세요.'); // 텍스트가 비었을 경우 에러 메시지 설정
      return;
    }
    setErrorMessage(''); // 에러 메시지 초기화
    setIsPopupVisible(true); // 팝업 표시
  };

  const handleConfirm = () => {
    setIsPopupVisible(false); // 팝업 닫기
    setShowToast(true); // Toast 메시지 표시
  };

  const handleToastClose = () => {
    setShowToast(false); // Toast 숨기기
    if (onClose) {
      onClose(); // 외부에서 전달된 onClose 함수 호출
    }
  };

  const handleCancel = () => {
    setIsPopupVisible(false); // 팝업 닫기
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      style={{ top: -24, left: 0, height: '100vh', overflowY: 'auto' }}
    >
      <div className="bg-white rounded-lg w-[720px] p-8 shadow-lg relative">
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black focus:outline-none w-10 h-10 text-2xl flex justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_650_11794)">
              <path
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_650_11794">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>

        {/* 제목 */}
        <div className="flex justify-start items-center mb-6">
          <h1 className="text-[32px] font-bold">리뷰 수정</h1>
          <p className="ml-3 mt-2 text-[#707070] text-base">
            | 라라스윗 저당 초코우유
          </p>
        </div>

        {/* 별점 */}
        <div className="mb-6">
          <h2 className="text-base font-semibold mb-1">별점</h2>
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="32"
                viewBox="0 0 36 32"
                fill="none"
                className="cursor-pointer"
                onClick={() => setRating(index + 1)}
              >
                <path
                  d="M17.9002 25.7179L28.8388 32L25.936 20.16L35.6002 12.1937L22.8739 11.1663L17.9002 0L12.9265 11.1663L0.200195 12.1937L9.8644 20.16L6.9616 32L17.9002 25.7179Z"
                  fill={rating > index ? '#EE4E34' : '#D9D9D9'}
                />
              </svg>
            ))}
            {/* 별점 수치 또는 안내 텍스트 */}
            <p
              className={`ml-2 ${
                rating === 0 ? 'text-[#707070] text-sm' : 'text-black text-2xl'
              }`}
            >
              {rating === 0 ? '(클릭해서 별점을 남겨주세요)' : rating}
            </p>
          </div>
        </div>

        {/* 태그 */}
        <div className="mb-6">
          <div className="flex items-center">
            <h2 className="text-base font-semibold mr-2">태그</h2>
            <p className="text-sm text-[#707070]">
              어울리는 키워드를 골라주세요.(긍정 부정 각각 최소 1개)
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 border px-[12px] py-[24px] relative">
            <div className="flex flex-col items-center">
              <h3 className="text-base font-semibold flex text-center items-center gap-2 mb-4">
                🥰 좋았던 점
              </h3>
              <div className="flex flex-wrap justify-start items-start gap-2">
                {positiveTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handlePositiveTagClick(tag)}
                    className={`px-3 py-1 rounded-lg text-[14px] border-2 ${
                      selectedPositiveTags.includes(tag)
                        ? 'border-main01 bg-[#FCEDDA] font-bold text-sm'
                        : 'border-[#f1f1f1] bg-[#f1f1f1] font-normal text-sm'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            {/* 세로 점선 */}
            <div
              className="absolute top-0 bottom-0 w-[1px] left-1/2"
              style={{ borderLeft: '1px dashed #D9D9D9' }}
            ></div>

            <div className="flex flex-col items-center">
              <h3 className="text-base font-semibold mb-4 flex items-center">
                🙁 아쉬운 점
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {negativeTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleNegativeTagClick(tag)}
                    className={`px-3 py-1 rounded-lg text-[14px] border-2 ${
                      selectedNegativeTags.includes(tag)
                        ? 'border-main01 bg-[#FCEDDA] font-bold text-sm'
                        : 'border-[#f1f1f1] bg-[#f1f1f1] font-normal text-sm'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 리뷰 내용 */}
        <div className="mb-4">
          <h2 className="text-base font-semibold mb-2">리뷰 내용</h2>
          <textarea
            className="flex items-start w-full rounded-md border bg-white text-sm mb-3"
            style={{
              minHeight: '120px',
              padding: '16px',
              gap: '10px',
              alignSelf: 'stretch',
              borderRadius: '4px',
              border: '1px solid #E4E4E4',
            }}
            placeholder="리뷰 내용을 작성해주세요."
            value={reviewContent}
            onChange={(e) => setReviewContent(e.target.value)}
          ></textarea>
          {/* 사진 추가 */}
          <div className="mb-4">
            <div className="flex space-x-2">
              <button
                onClick={handleImageUpload}
                className="flex flex-col justify-center items-center text-xs rounded-[2px]"
                style={{
                  width: '96px',
                  height: '96px',
                  padding: '38px 12px',
                  background: '#F1F1F1',
                }}
              >
                + 사진 추가
              </button>
              {uploadedImages.map((image, index) => (
                <div
                  key={index}
                  className="relative w-24 h-24 rounded-[2px] flex justify-center items-center bg-gray-100"
                >
                  <img
                    src={image}
                    className="object-cover w-full h-full rounded-[2px]"
                  />
                  <button
                    onClick={() => handleImageRemove(index)}
                    className="absolute top-0 right-0 text-black w-6 h-6 flex justify-center items-center focus:outline-none"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 구매 의사 */}
        <div className="mb-4">
          <div
            onClick={() => setWillBuyAgain(!willBuyAgain)}
            className="inline-flex items-center cursor-pointer gap-2"
          >
            {/* SVG 체크박스 */}
            {willBuyAgain ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <g clipPath="url(#clip0_650_11119)">
                  <path
                    d="M19 3.35938H5C3.89 3.35938 3 4.25937 3 5.35938V19.3594C3 20.4594 3.89 21.3594 5 21.3594H19C20.11 21.3594 21 20.4594 21 19.3594V5.35938C21 4.25937 20.11 3.35938 19 3.35938ZM10 17.3594L5 12.3594L6.41 10.9494L10 14.5294L17.59 6.93937L19 8.35938L10 17.3594Z"
                    fill="#EE4E34"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_650_11119">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 0.359375)"
                    />
                  </clipPath>
                </defs>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <rect
                  x="3"
                  y="3.35938"
                  width="18"
                  height="18"
                  rx="2"
                  stroke="#D9D9D9"
                  strokeWidth="2"
                />
              </svg>
            )}
            <span className="text-black text-base">
              다음에 또 구매하고 싶어요!
            </span>
          </div>
        </div>

        {/* 등록 버튼 */}
        <div className="flex flex-col items-end w-full">
          <div className="h-[20px]">
            <p
              className={`text-main01 text-sm ${
                errorMessage ? 'visible' : 'invisible'
              }`}
            >
              {errorMessage}
            </p>
          </div>
          <button
            onClick={handleSubmit}
            className="w-[92px] h-[32px] bg-main01 text-white px-[26px] py-[4px] focus:outline-none text-base rounded-[8px] mt-[8px]"
          >
            저장
          </button>
        </div>
      </div>

      {/* 팝업 */}
      {isPopupVisible && (
        <Popup
          title="작성하신 리뷰를 수정하시겠습니까?"
          description=""
          confirmText="확인"
          cancelText="취소"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}

      {/* Toast 메시지 */}
      {showToast && (
        <Toast2
          title="리뷰가 정상적으로 수정되었습니다."
          message=""
          onClose={handleToastClose}
        />
      )}
    </div>
  );
};

export default ModifyReview;
