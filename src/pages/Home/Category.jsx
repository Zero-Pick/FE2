import React from "react";
import ProductBox from "../../components/Home/ProductBox";
import ProductBest from "../../components/Home/ProductBest";
import SearchHeader from '../../components/SearchHeader';

const Category = () => {
  return (
    <div className="w-full h-auto  bg-yellow-50">
        {/* 뒤로가기 */}
        <div>
        <span> 음료</span>
        </div>
    <SearchHeader />
      <main className="px-40 [w-110px]">
        {/* 배너 */}
        <section className="mb-16">
          <div className="w-full h-[180px] bg-main01 flex items-center justify-center text-white font-bold text-xl">
            <span>배너영역</span>
          </div>
        </section>
        {/* BEST 섹션 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 ">음료 BEST👑</h2>
          <div className="grid grid-cols-4  bg-slate-500">
            <ProductBest />
            <ProductBest />
            <ProductBest />
            <ProductBest />
          </div>
        </section>

        {/* 구분선 */}
        <hr className="mb-16 border-t  border-gray-300" />

        {/* 전 상품 섹션 */}
        <section className="mb-32">
          <h2 className="text-2xl font-bold mb-8">전 상품</h2>
          {/* 필터 메뉴 */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-buttongray rounded">제품순위</button>
              <button className="px-4 py-2 bg-buttongray rounded">제품리뷰</button>
              <button className="px-4 py-2 bg-buttongray rounded">혈당 관리 인증</button>
            </div>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-buttongray rounded">이번 상품을 찾아요</button>
              <button className="px-4 py-2 bg-buttongray  rounded">제외할 대체감미료</button>
            </div>
          </div>

        {/* 구분선 */}
          <hr className="mb-6 border-t border-gray-300" />

           {/* 정렬 메뉴 */}
           <div className="flex items-center justify-between mb-6">
            <div className="flex space-x-4">
              <button className="px-4 py-2 ">총 30개</button> 
            </div>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-buttongray rounded">인기순</button>
              <button className="px-4 py-2 bg-buttongray rounded">신상품순순</button>
              <button className="px-4 py-2 bg-buttongray rounded">리뷰 많은 순</button>
              <button className="px-4 py-2 bg-buttongray rounded">별점 높은 순</button>
            </div>
          </div>
 
        {/* 구분선 */}
        <hr className="mb-8 border-t border-gray-300" />

          {/* 상품 리스트 */}
          <div className="grid grid-cols-4 gap-x-6 gap-y-16 bg-slate-500">
            {Array(12)
              .fill(null)
              .map((_, index) => (
                <ProductBox key={index} />
              ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Category;
