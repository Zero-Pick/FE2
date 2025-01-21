import React from 'react';
import Sidebar from '../../components/Mypage/Sidebar';
import SearchHeader from '../../components/SearchHeader';
import ReviewBox from '../../components/Mypage/ReviewBox';

const Reviews = () => {
  const reviews = [
    {
      brand: '브랜드명',
      productName: '제품명 제품명 제품명',
      rating: 4,
      content:
        '포장도 꼼꼼하고 입맛에 딱이에요~~ 포장도 꼼꼼하고 입맛에 딱이에요~~ 맛있게 잘 먹었습니다^^',
      tags: ['달달해요', '다이어트에 딱이에요'],
      date: '2024.10.30',
    },
    {
      brand: '다른 브랜드',
      productName: '다른 제품명',
      rating: 5,
      content: '정말 좋아요! 추천합니다.',
      tags: ['가성비가 좋아요', '맛이 다양해요'],
      date: '2024.10.29',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 헤더 */}
      <SearchHeader />

      {/* 메인 타이틀 */}
      <div className="max-w-[1098px] mx-auto mt-8 mb-4">
        <h1 className="text-3xl font-bold">마이페이지</h1>
      </div>

      {/* 컨테이너 */}
      <div className="flex mx-auto max-w-[1098px]">
        {/* 왼쪽 사이드바 */}
        <Sidebar />

        {/* 오른쪽 리뷰 목록 */}
        <section className="flex flex-col items-center w-[816px] border bg-white py-[32px] rounded-[4px] ml-6">
          <div className="flex flex-col w-[712px]">
            <h2 className="font-normal text-2xl">내가 쓴 리뷰</h2>

            {/* 구분선 */}
            <hr className="w-full border-t-2 border-[#d9d9d9] my-6" />

            {reviews.length > 0 ? (
              <>
                {/* 총 개수 */}
                <p className="text-[#707070] mb-[16px]">
                  총 {reviews.length}개
                </p>

                {/* 리뷰 리스트 */}
                <div className="space-y-6">
                  {reviews.map((review, index) => (
                    <ReviewBox
                      key={index}
                      brand={review.brand}
                      productName={review.productName}
                      rating={review.rating}
                      content={review.content}
                      tags={review.tags}
                      date={review.date}
                    />
                  ))}
                </div>
              </>
            ) : (
              <p className="text-center text-[#707070] text-base font-normal py-[40px]">
                작성한 리뷰가 없습니다.
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Reviews;
