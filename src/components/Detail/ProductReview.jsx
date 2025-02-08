import React, { useState } from 'react';
import ReviewTagButton from './ReviewTagButton';
import CreateReview from './CreateReview';
import FilterButton from '../FilterButton';
import ReviewBox from './ReviewBox';
import ProductBox from '../Home/ProductBox';

const ProductReview = () => {
  const [showMore, setShowMore] = useState(false);
  const [showCreateReview, setShowCreateReview] = useState(false);
  const [selectedSort, setSelectedSort] = useState('최신등록순');
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const reviewsPerPage = 5;
  const totalReviews = 14;
  const totalPages = Math.ceil(totalReviews / reviewsPerPage);

  const handleSortClick = (sortType) => {
    setSelectedSort(sortType);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filters = [
    '달달해요 (3)',
    '달지 않고 깔끔해요 (3)',
    '식사 대신 든든해요 (1)',
    '간식으로 딱 좋아요 (1)',
    '다이어트에 딱이에요 (1)',
    '혈당 걱정 덜어줘요 (1)',
    '가성비가 좋아요 (1)',
    '맛의 종류가 다양해요 (1)',
    '휴대하기 편해요 (1)',
  ];

  const handleFilterClick = (filter) => {
    if (selectedFilters.includes(filter)) {
      // 이미 선택된 필터라면 제거
      setSelectedFilters((prev) => prev.filter((f) => f !== filter));
    } else {
      // 선택되지 않은 필터라면 추가
      setSelectedFilters((prev) => [...prev, filter]);
    }
  };

  return (
    <div className="flex flex-col w-[1100px] mx-auto rounded-lg">
      {/* 리뷰 쓰기 모달 */}
      {showCreateReview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <CreateReview onClose={() => setShowCreateReview(false)} />
        </div>
      )}

      {/* 타이틀 */}
      <div className="flex flex-row items-center self-stretch gap-4 mb-8">
        <h1 className="text-[32px] font-bold">상품 리뷰</h1>
        <button
          onClick={() => setShowCreateReview(true)}
          className="bg-main01 text-white w-[110px] h-[36px] px-[17px] py-[4px] text-base font-bold rounded-[8px]"
        >
          리뷰 쓰기
        </button>
      </div>

      {/* 요약 */}
      <div className="flex justify-center items-center border rounded-lg py-[40px]">
        <div className="flex flex-col justify-center items-center w-[1000px] gap-4">
          <div className="flex justify-between items-start w-[889px]">
            {/* 사용자 평균 평점 */}
            <div className="flex flex-col justify-center items-center">
              <div className="text-base font-bold text-black mb-6">
                사용자 평균 평점
              </div>
              <div className="text-[40px] font-bold text-black mb-[16px]">
                4.22점
              </div>
              <div className="flex items-center">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill={index < 4 ? '#EE4E34' : '#D9D9D9'}
                    >
                      <path d="M12 .587l3.668 7.57 8.332 1.151-6.004 5.853 1.413 8.26L12 18.902 4.591 23.421l1.413-8.26-6.004-5.853 8.332-1.151L12 .587z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="text-base text-[#707070] mt-4">
                재구매 의사 <span className="font-bold">90.5%</span>
              </div>
            </div>

            {/* 리뷰 수 */}
            <div className="flex flex-col w-[232px] items-center">
              <div className="text-base font-bold text-black mb-6">리뷰 수</div>
              <div className="text-5xl font-bold mb-4">💬</div>
              <div className="text-[40px] font-bold text-black">14건</div>
            </div>

            {/* 평점 분포 */}
            <div className="flex flex-col justify-center items-center">
              <div className="text-base font-bold text-black mb-6">
                평점 분포
              </div>
              <div className="flex flex-row justify-between w-full h-[144px] gap-4">
                {[5, 4, 3, 2, 1].map((star, index) => (
                  <div className="flex flex-col items-center" key={index}>
                    <div className="text-sm text-[#707070] mb-2">20%</div>

                    <div className="w-[12px] h-[96px] bg-[#f1f1f1] relative">
                      <div
                        className="absolute bottom-0 w-full bg-main01"
                        style={{
                          height: `${20}%`, // 각 막대의 높이를 %로 설정
                        }}
                      ></div>
                    </div>
                    <div className="text-sm text-gray-500 mb-2">{star}점</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 구분선 */}
          <hr className="w-full border-t border-[#d9d9d9]" />

          {/* 긍정적 및 부정적 리뷰 */}
          <div className="flex justify-center items-stretch gap-10 h-auto">
            {/* 좋았던 점 */}
            <div className="py-[10px] w-[445px]">
              <h2 className="text-[20px] font-bold mb-6 text-center">
                🥰 좋았던 점
              </h2>
              <div className="flex flex-col items-start self-stretch gap-4">
                <ReviewTagButton />
                <ReviewTagButton />
                <ReviewTagButton />
                {showMore && (
                  <>
                    <ReviewTagButton />
                    <ReviewTagButton />
                    <ReviewTagButton />
                  </>
                )}
              </div>
            </div>

            {/* 세로 구분선 */}
            <div className="w-[1px] bg-[#d9d9d9]"></div>

            {/* 아쉬운 점 */}
            <div className="py-[10px] w-[445px]">
              <h2 className="text-[20px] font-bold mb-6 text-center">
                😓 아쉬운 점
              </h2>
              <div className="flex flex-col items-start self-stretch gap-4">
                <ReviewTagButton />
                <ReviewTagButton />
                <ReviewTagButton />
                {showMore && (
                  <>
                    <ReviewTagButton />
                    <ReviewTagButton />
                    <ReviewTagButton />
                  </>
                )}
              </div>
            </div>
          </div>

          {/* 더보기 버튼 */}
          <button
            onClick={() => setShowMore((prev) => !prev)}
            className={`flex w-full justify-center items-center h-[40px] py-[8px] px-[17px] self-stretch ${
              showMore
                ? 'bg-transparent text-black hover:bg-[#d9d9d9]'
                : 'bg-[#FFF] text-black border border-[#707070]'
            } rounded-lg `}
          >
            {showMore ? '접기' : '더보기'}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className={`transform transition-transform ${
                showMore ? 'rotate-180' : ''
              }`}
            >
              <g clip-path="url(#clip0_650_10933)">
                <path
                  d="M6.175 7.1582L10 10.9749L13.825 7.1582L15 8.3332L10 13.3332L5 8.3332L6.175 7.1582Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_650_10933">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>

      {/* 리뷰 리스트 */}
      <div className="flex flex-col items-start self-stretch gap-8 mt-[64px]">
        {/* 타이틀 */}
        <div className="text-[24px] font-bold">
          리뷰 <span className="text-main01">14</span>
        </div>

        {/* 정렬 버튼 */}
        <div className="flex justify-start items-center gap-8">
          <button
            className={`${
              selectedSort === '최신등록순' ? 'font-bold' : 'font-normal'
            }`}
            onClick={() => handleSortClick('최신등록순')}
          >
            최신등록순
          </button>
          <button
            className={`${
              selectedSort === '추천순' ? 'font-bold' : 'font-normal'
            }`}
            onClick={() => handleSortClick('추천순')}
          >
            추천순
          </button>
          <button
            className={`${
              selectedSort === '별점 높은 순' ? 'font-bold' : 'font-normal'
            }`}
            onClick={() => handleSortClick('별점 높은 순')}
          >
            별점 높은 순
          </button>
          <button
            className={` ${
              selectedSort === '별점 낮은 순' ? 'font-bold' : 'font-normal'
            }`}
            onClick={() => handleSortClick('별점 낮은 순')}
          >
            별점 낮은 순
          </button>
        </div>

        {/* 태그 필터 */}
        <div className="flex w-[1100px] p-[24px] flex-col items-start border border-[#d9d9d9] rounded-lg">
          <div className="flex flex-col items-start gap-6 self-stretch">
            <div className="text-[20px] font-bold text-center">태그 필터</div>
            <div className="flex items-start content-start gap-3 self-stretch flex-wrap">
              {filters.map((filter, index) => (
                <FilterButton
                  key={index}
                  label={filter}
                  onClick={handleFilterClick}
                  isSelected={selectedFilters.includes(filter)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 리뷰 */}
        <div className="flex flex-col items-center self-stretch">
          {Array.from(
            { length: reviewsPerPage },
            (_, index) =>
              index + (currentPage - 1) * reviewsPerPage < totalReviews && (
                <ReviewBox key={index + (currentPage - 1) * reviewsPerPage} />
              )
          )}
        </div>

        {/* 페이지네이션 */}
        <div className="w-full flex justify-center items-center gap-4">
          <button
            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
            className="text-[#e4e4e4] hover:text-black"
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === index + 1
                  ? 'text-main01 font-bold'
                  : 'text-black'
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() =>
              currentPage < totalPages && handlePageChange(currentPage + 1)
            }
            className="text-gray-500 hover:text-black"
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>

        {/* 구분선 */}
        <div className="flex py-[64px] flex-col items-start self-stretch">
          <div className="w-full border-t border-[#d9d9d9] border-4" />
        </div>

        {/* 다른 상품 추천 */}
        <div className="flex w-[1100px] flex-col items-center gap-10">
          <p className="text-[36px] font-bold text-center">
            이런 제품은 어떠세요?
          </p>
          <div className="flex w-[1100px] justify-between items-center">
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
