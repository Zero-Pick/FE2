import React, { useState } from 'react';
import Popup from '../Popup';
import Toast2 from '../Toast2';

const ModifyInformation = ({ onClose }) => {
  const [uploadedImages, setUploadedImages] = useState([
    'https://via.placeholder.com/96',
    'https://via.placeholder.com/96',
  ]);
  const [textAreaValue, setTextAreaValue] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleImageUpload = () => {
    alert('사진 업로드 기능은 구현되지 않았습니다.');
  };

  const handleRemoveImage = (index) => {
    setUploadedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (!textAreaValue.trim()) {
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        className="relative w-[720px] h-[594px] bg-white rounded-lg p-8"
        style={{
          boxShadow: '0px 1px 8px 0px rgba(0, 0, 0, 0.25)',
        }}
      >
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

        {/* 내용 컨테이너 */}
        <div
          className="flex flex-col items-start gap-8"
          style={{ width: '640px' }}
        >
          {/* 제목 및 설명 */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3.5">
              <h1 className="text-[32px] font-bold">정보 수정 요청</h1>
              <p className="text-base text-[#707070]">
                | 라라스윗 저당 초코우유
              </p>
            </div>
            <p className="text-sm text-[#707070] mt-4">
              잘못된 정보를 알려주시면 빠르게 수정하겠습니다.
              <br />
              상품명, 성분, 기능적인 정보, 상품 이미지 등 어떤 것이라도
              괜찮아요!
            </p>
            <p className="text-sm mt-4 text-main01">
              ※ 새로운 상품을 제출하시려면 ~에 있는 ‘상품 제출’ 기능을 이용해
              주세요.
            </p>
          </div>

          {/* 수정 내용 입력 */}
          <div className="flex flex-col gap-2 w-full">
            <h2 className="text-base font-semibold">수정 필요한 내용</h2>
            <textarea
              className="flex items-start w-full rounded-md border bg-white text-sm"
              style={{
                minHeight: '120px',
                padding: '16px',
                gap: '10px',
                alignSelf: 'stretch',
                borderRadius: '4px',
                border: '1px solid #E4E4E4',
              }}
              placeholder="구체적으로 적어주시거나, 이미지를 첨부해 주시면 더 원활하게 처리할 수 있어요."
              value={textAreaValue}
              onChange={(e) => setTextAreaValue(e.target.value)}
            ></textarea>
            {/* 사진 추가 */}
            <div className="flex gap-4">
              {/* 첫 번째 버튼: 업로드 */}
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

              {/* 사진 미리보기 */}
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
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-0 right-0 text-black w-6 h-6 flex justify-center items-center focus:outline-none"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* 제출 버튼 */}
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
              제출
            </button>
          </div>
        </div>
      </div>

      {/* 팝업 */}
      {isPopupVisible && (
        <Popup
          title="수정 요청을 제출하시겠습니까?"
          description="잘못된 정보는 빠르게 검토 후 반영하겠습니다."
          confirmText="확인"
          cancelText="취소"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}

      {/* Toast 메시지 */}
      {showToast && (
        <Toast2
          title="수정 요청이 제출되었습니다."
          message="요청 내역은 마이페이지 - 정보 수정 요청 현황에서 확인하실 수 있습니다."
          onClose={handleToastClose}
        />
      )}
    </div>
  );
};

export default ModifyInformation;
