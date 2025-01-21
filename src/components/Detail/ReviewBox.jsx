import React from 'react';
import FilterButton from '../FilterButton';

const ReviewBox = () => {
  return (
    <div className="flex flex-col items-start gap-2 self-stretch">
      <div className="flex justify-between items-center self-stretch">
        {/* 프로필 및 정보 */}
        <div className="flex items-center gap-[18px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="49"
            viewBox="0 0 48 49"
            fill="none"
          >
            <circle cx="24" cy="24.5078" r="24" fill="#D9D9D9" />
          </svg>
          <p>id*****ng</p>
          <div className="flex gap-[2px]">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill={index < 4 ? '#EE4E34' : '#D9D9D9'}
              >
                <path
                  d="M8.42105 13.3668L13.6253 16.5078L12.2442 10.5878L16.8421 6.60465L10.7874 6.09097L8.42105 0.507812L6.05474 6.09097L0 6.60465L4.59789 10.5878L3.21684 16.5078L8.42105 13.3668Z"
                  fill="#EE4E34"
                />
              </svg>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button className="flex px-4 py-2 justify-center items-center gap-[10px] border border-[#707070] rounded-lg">
              <p className="text-[#707070] text-[13px]">추천 👍</p>
            </button>
            <p className="text-[16px] font-bold text-main01">1</p>
          </div>
        </div>

        {/*  날짜 및 신고 버튼 */}
        <div className="flex items-center gap-4">
          <p className="text-[#707070]">2024.10.30</p>
          <button className="text-[#d9d9d9]">신고</button>
        </div>
      </div>

      {/* 리뷰 상세 내용 */}
      <div className="flex justify-between items-start self-stretch">
        {/* 텍스트 및 태그*/}
        <div className="flex flex-col items-start gap-6 w-full">
          <p>
            포장도 꼼꼼하고 입맛에 딱이에요~~ 포장도 꼼꼼하고 입맛에 딱이에요~~
            포장도 꼼꼼하고 입맛에 딱이에요~~ 포장도 꼼꼼하고 입맛에 딱이에요~~
            포장도 꼼꼼하고 입맛에 딱이에요~~ 맛있게 잘먹었습니다^^
          </p>
          <div className="flex items-center gap-3">
            <FilterButton label="달달해요" />
            <FilterButton label="다이어트에 딱이에요" />
            <FilterButton label="소화가 잘 안돼요" />
          </div>
        </div>
        {/* 이미지 */}
        <div className="w-[144px] h-[144px] flex-shrink-0 bg-[#707070] border rounded-sm overflow-hidden">
          <img
            src="https://via.placeholder.com/144"
            alt="리뷰 이미지"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 구분선 */}
      <div className="flex py-[32px] flex-col items-start gap-[10px] self-stretch">
        <div className="w-full border-t border-[#d9d9d9]" />
      </div>
    </div>
  );
};

export default ReviewBox;
