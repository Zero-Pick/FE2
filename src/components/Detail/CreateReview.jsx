import React, { useState } from 'react';

const CreateReview = ({ onClose }) => {
  const [rating, setRating] = useState(0);
  const [tags, setTags] = useState([]);
  const [reviewContent, setReviewContent] = useState('');
  const [uploadedImages, setUploadedImages] = useState([
    'https://via.placeholder.com/96',
    'https://via.placeholder.com/96',
  ]);
  const [willBuyAgain, setWillBuyAgain] = useState(false);

  const handleTagClick = (tag) => {
    setTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  const handleImageRemove = (index) => {
    setUploadedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleImageUpload = () => {
    alert('이미지 업로드 기능은 구현되지 않았습니다.');
  };

  const handleSubmit = () => {
    alert('리뷰가 등록되었습니다.');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-4/5 max-w-3xl p-8 shadow-lg relative">
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black focus:outline-none w-10 h-10 text-2xl flex justify-center items-center"
        >
          &times;
        </button>

        {/* 제목 */}
        <div className="flex justify-start mb-6">
          <h1 className="text-2xl font-bold">리뷰 작성하기</h1>
          <p className="ml-3 mt-2 text-gray-600">| 라라스윗 저당 초코우유</p>
        </div>

        {/* 별점 */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold">별점</h2>
          <div className="flex items-center">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`text-2xl cursor-pointer ${
                    rating > index ? 'text-red-500' : 'text-gray-400'
                  }`}
                  onClick={() => setRating(index + 1)}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="ml-2 mt-2 text-lg text-black">{rating}</span>
          </div>
        </div>

        {/* 태그 선택 */}
        <div className="mb-6">
          <div className="flex justify-start">
            <h2 className="text-lg font-semibold mb-2">태그</h2>
            <p className="text-sm text-gray-600 ml-2 mt-1">
              어울리는 키워드를 골라주세요. (긍정 부정 각각 최소 1개)
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              '달달해요',
              '담백하고 깔끔해요',
              '식사 대신 든든해요',
              '간식으로 딱 좋아요',
              '다이어트에 딱이에요',
            ].map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`bg-gray-200 px-3 py-1 rounded-md text-sm ${
                  tags.includes(tag) ? 'bg-gray-300' : ''
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* 리뷰 내용 */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">리뷰 내용</h2>
          <textarea
            className="w-full border rounded-md p-3 text-sm bg-gray-100"
            placeholder="리뷰 내용을 작성해주세요."
            value={reviewContent}
            onChange={(e) => setReviewContent(e.target.value)}
          ></textarea>
        </div>

        {/* 사진 추가 */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">사진 추가</h2>
          <div className="flex space-x-2">
            <button
              onClick={handleImageUpload}
              className="w-24 h-24 border rounded-md flex justify-center items-center bg-gray-100 text-gray-600 focus:outline-none"
            >
              + 사진 추가
            </button>
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
                  onClick={() => handleImageRemove(index)}
                  className="absolute top-0 right-0 text-black w-6 h-6 flex justify-center items-center rounded-full hover:bg-gray-600 focus:outline-none"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 구매 의사 */}
        <div className="mb-4">
          <label className="inline-flex items-center">
            <span className="text-gray-black">다음에 또 구매하고 싶어요!</span>
            <input
              type="checkbox"
              checked={willBuyAgain}
              onChange={() => setWillBuyAgain(!willBuyAgain)}
              className="ml-2 w-4 h-4 border border-main-01 rounded bg-transparent"
            />
          </label>
        </div>

        {/* 등록 버튼 */}
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-main-01 text-white px-6 py-2 rounded-md focus:outline-none"
          >
            등록
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateReview;
