import React, { useState } from 'react';
import Popup from '../Popup';
import Toast2 from '../Toast2';

const RequestProductRegistration = ({ onClose }) => {
  const [brandValue, setBrandValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');
  const [productName, setProductName] = useState('');
  const [details, setDetails] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [uploadedImages, setUploadedImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = [
    '음료 · 차',
    '과자 · 빵',
    '유가공품',
    '아이스크림 · 빙과',
    '초콜릿',
    '면 · 떡',
    '농수산가공식품',
    '기타',
  ];

  const handleImageUpload = () => {
    alert('사진 업로드 기능은 구현되지 않았습니다.');
  };

  const handleRemoveImage = (index) => {
    setUploadedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (!brandValue.trim() || !categoryValue.trim() || !productName.trim()) {
      setErrorMessage('내용을 입력해주세요.');
      return;
    }
    setErrorMessage('');
    setIsPopupVisible(true);
  };

  const handleConfirm = () => {
    setIsPopupVisible(false);
    setShowToast(true);
  };

  const handleToastClose = () => {
    setShowToast(false);
    if (onClose) {
      onClose();
    }
  };

  const handleCancel = () => {
    setIsPopupVisible(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const selectCategory = (category) => {
    setCategoryValue(category);
    setIsDropdownOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        className="relative w-[720px] bg-white rounded-lg p-8"
        style={{
          boxShadow: '0px 1px 8px 0px rgba(0, 0, 0, 0.25)',
        }}
      >
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black focus:outline-none w-10 h-10 text-2xl flex justify-center items-center"
        >
          &times;
        </button>

        {/* 제목 및 설명 */}
        <div className="flex flex-col items-start mb-8">
          <h1 className="text-[32px] font-bold mb-6">제품 등록 요청</h1>
          <p className="text-[#707070] font-bold">
            원하시는 제품을 찾을 수 없으신가요?
          </p>
          <p className="text-sm text-[#707070] mt-4">
            아래 안내에 따라 제품 정보를 입력해주세요.
            <br />
            검토 후 빠르게 추가해 더욱 풍요로운{' '}
            <span className="text-main01">제로픽</span>이 되겠습니다!
          </p>
        </div>

        {/* 입력 폼 */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* 브랜드 */}
          <div className="flex flex-col">
            <label className="text-base font-semibold mb-2">브랜드</label>
            <input
              type="text"
              className="border border-[#E4E4E4] rounded-md p-3 text-sm"
              placeholder="제조사명 혹은 브랜드명"
              value={brandValue}
              onChange={(e) => setBrandValue(e.target.value)}
            />
          </div>

          {/* 카테고리 */}
          <div className="flex flex-col relative">
            <label className="text-base font-semibold mb-2">카테고리</label>
            <button
              onClick={toggleDropdown}
              className="border border-[#E4E4E4] rounded-md p-3 text-sm w-full flex justify-between items-center relative z-10"
            >
              <span>{categoryValue || '선택'}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_840_6908)">
                  <path
                    d="M6.175 7.1582L10 10.9749L13.825 7.1582L15 8.3332L10 13.3332L5 8.3332L6.175 7.1582Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_840_6908">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            {isDropdownOpen && (
              <ul
                className="absolute z-50 bg-white border border-[#E4E4E4] rounded-md mt-1 w-full overflow-visible"
                style={{ top: '100%' }}
              >
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className={`p-3 text-sm hover:bg-[#FAF3E8] cursor-pointer ${
                      categoryValue === category
                        ? 'text-main01 font-semibold'
                        : ''
                    }`}
                    onClick={() => selectCategory(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* 제품명 */}
        <div className="flex flex-col mb-6">
          <label className="text-base font-semibold mb-2">제품명</label>
          <input
            type="text"
            className="border border-[#E4E4E4] rounded-md p-3 text-sm"
            placeholder="제품명을 정확히 입력해주세요."
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        {/* 전성분 및 이미지 첨부 */}
        <div className="flex flex-col mb-6">
          <label className="text-base font-semibold mb-2">
            전성분 혹은 전성분 이미지 첨부
          </label>
          <textarea
            className="border border-[#E4E4E4] rounded-md p-3 text-sm h-[80px]"
            placeholder="전성분 텍스트, 혹은 전성분이 적혀 있는 제품 사진을 첨부해주세요."
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          ></textarea>

          <div className="flex gap-4 mt-4">
            <button
              onClick={handleImageUpload}
              className="flex justify-center items-center w-24 h-24 bg-[#F1F1F1] rounded-md text-xs"
            >
              + 사진 추가
            </button>

            {uploadedImages.map((image, index) => (
              <div
                key={index}
                className="relative w-24 h-24 bg-gray-100 rounded-md flex justify-center items-center"
              >
                <img
                  src={image}
                  alt=""
                  className="object-cover w-full h-full rounded-md"
                />
                <button
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-1 right-1 text-sm text-black"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 추가사항 */}
        <div className="flex flex-col mb-6">
          <label className="text-base font-semibold mb-2">
            추가사항 <span className="font-normal">(선택)</span>
          </label>
          <textarea
            className="border border-[#E4E4E4] rounded-md p-3 text-sm h-[80px]"
            placeholder="제품에 관해 더 알려주시고 싶은 부분이 있다면 자유롭게 기재해주세요!"
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
          ></textarea>
        </div>

        {/* 제출 버튼 */}
        <div className="flex flex-col items-end">
          <p className="text-main01 text-sm mb-2">{errorMessage}</p>
          <button
            onClick={handleSubmit}
            className="bg-main01 w-[92px] text-white px-6 py-2 rounded-md text-base"
          >
            제출
          </button>
        </div>
      </div>

      {/* 팝업 */}
      {isPopupVisible && (
        <Popup
          title="등록 요청을 제출하시겠습니까?"
          description="요청하신 제품은 충분한 검토 후 등록됩니다."
          confirmText="확인"
          cancelText="취소"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}

      {/* Toast 메시지 */}
      {showToast && (
        <Toast2
          title="등록 요청이 제출되었습니다."
          message="요청 내역은 마이페이지 - 제품 등록 요청 현황에서 확인하실 수 있습니다."
          onClose={handleToastClose}
        />
      )}
    </div>
  );
};

export default RequestProductRegistration;
