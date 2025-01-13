import React from "react";
import ProductBox from "../../components/Home/ProductBox";
import ProductReview from "../../components/Home/ProductReview";
import CategoryBar from "../../components/Home/CategoryBar";
import NewsCard from "../../components/Home/NewsCard";
import Header from '../../components/Header';

const Main = () => {
  return (
    <div className="w-full h-auto">
      <Header />
        {/* 배너 */}
        <section className="mb-28">
          <div className="w-full h-[360px] bg-buttongray flex items-center justify-center text-white font-bold text-xl">
            <span>배너영역</span>
          </div>
        </section>


        { /* 메인 콘텐츠 */}
        <main className="mx-auto w-[1100px]"> 
          {/* 여백 수정 필요 */}

          {/* 카테고리 바 및 ProductReview */}
          <section className="mb-28">
          <h2 className="text-3xl font-bold mb-8">카테고리별 BEST👑</h2>
          <div className="flex bg-slate-200 h-[517px] justify-between items-start relative">
            <CategoryBar />
            <div className="flex justify-between w-[820px] align-stretch bg-slate-100">
              <ProductReview />
              <ProductReview />
              <ProductReview />

              {/* 더 많은상품보기 버튼 */}
              <button 
                className="text-[14px] text-txtgray font-normal px-6 py-1 border border-buttongray bg-white rounded-[4px] flex justify-center items-center absolute right-[0px] bottom-[0px]"
              >
                더 많은 상품 보기
              </button>
            </div>
          </div>
        </section>

        {/* 배너 */}
        <section className="mb-28">
          <div className="w-full h-[180px] bg-buttongray flex items-center justify-center text-white font-bold text-xl">
            <span>배너영역</span>
          </div>
        </section> 

        {/* 많은 분들이 주목하는 섹션 */}
        <section className="mb-28">
          <h2 className="text-3xl font-bold mb-8">지금 많은 분들이 주목하는📢</h2>
          <div className="flex justify-between items-center">
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
          </div>
        </section>

        {/* 취향별 추천 섹션 */}
        <section className="mb-28">
          <h2 className="text-3xl font-bold mb-8">당신의 취향에 딱 맞는✅</h2>
          <div className="flex justify-between items-center">
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
          </div>
        </section>

        {/* 뉴스 카드 섹션 */}
        <section className="mb-28" > 
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-3xl font-bold">제로식품 이모저모 📰</h2>
            <span className="text-[#707070] text-base font-normal">2024.10.08 23:59 갱신</span>
          </div>
          <div className="grid grid-cols-2 gap-7">
            <NewsCard 
              image="https://via.placeholder.com/120"
              title="기사 제목 1"
              content="기사 내용 1"
            />
            <NewsCard 
              image="https://via.placeholder.com/120"
              title="기사 제목 2"
              content="기사 내용 2"
            />
            <NewsCard 
              image="https://via.placeholder.com/120"
              title="기사 제목 3"
              content="기사 내용 3"
            />
            <NewsCard 
              image="https://via.placeholder.com/120"
              title="기사 제목 4"
              content="기사 내용 4"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Main;
