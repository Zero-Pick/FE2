import React, { useState } from 'react';

const ModifyInformation = ({ onClose }) => {
  const [uploadedImages, setUploadedImages] = useState([
    'https://via.placeholder.com/96',
    'https://via.placeholder.com/96',
  ]);
  const [textAreaValue, setTextAreaValue] = useState('');

  const handleUploadClick = () => {
    alert('사진 업로드 기능은 구현되지 않았습니다.');
  };

  const handleRemoveImage = (index) => {
    setUploadedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    alert('수정 요청이 제출되었습니다.');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        className="flex-shrink-0 w-[720px] h-[594px] bg-white rounded-lg shadow-md p-8"
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

        {/* 내용 컨테이너 */}
        <div
          className="flex flex-col items-start gap-8"
          style={{ width: '640px' }}
        >
          {/* 제목 및 설명 */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold">정보 수정 요청</h1>
              <p className="text-gray-600">| 라라스윗 저당 초코우유</p>
            </div>
            <p className="text-gray-600 mt-4">
              잘못된 정보를 알려주시면 빠르게 수정하겠습니다.
              <br />
              상품명, 성분, 기능적인 정보, 상품 이미지 등 어떤 것이라도
              괜찮아요!
            </p>
            <p className="text-main-01 mt-4 text-main01">
              ※ 새로운 상품을 제출하시려면 ~에 있는 ‘상품 제출’ 기능을 이용해
              주세요.
            </p>
          </div>

          {/* 수정 내용 입력 */}
          <div className="flex flex-col mt-1 gap-2 w-full">
            <h2 className="text-lg font-semibold">수정 필요한 내용</h2>
            <textarea
              className="flex items-start w-full rounded-md border bg-white"
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
          </div>

          {/* 사진 추가 */}
          <div className="flex gap-4">
            {/* 첫 번째 버튼: 업로드 */}
            <button
              onClick={handleUploadClick}
              className="flex flex-col justify-center items-center gap-2 text-xs"
              style={{
                width: '96px',
                height: '96px',
                padding: '38px 29px',
                borderRadius: '2px',
                background: '#F1F1F1',
              }}
            >
              + 사진 추가
            </button>

            {/* 사진 미리보기 */}
            {uploadedImages.map((image, index) => (
              <div
                key={index}
                className="relative w-24 h-24 border rounded-md flex justify-center items-center bg-gray-100"
              >
                <img
                  src={image}
                  alt={`Uploaded Image ${index + 1}`}
                  className="object-cover w-full h-full rounded-md"
                />
                <button
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-0 right-0 text-black w-6 h-6 flex justify-center items-center rounded-full hover:bg-gray-600 focus:outline-none"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>

          {/* 제출 버튼 */}
          <div className="flex justify-end w-full">
            <button
              onClick={handleSubmit}
              className="bg-main01 text-white px-6 py-2 rounded-md focus:outline-none"
            >
              제출
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModifyInformation;
