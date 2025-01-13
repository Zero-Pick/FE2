import React from "react";
import ProductBox from "../../components/Home/ProductBox";
import ProductBest from "../../components/Home/ProductBest";
import SearchHeader from '../../components/SearchHeader';
import FilterButton from "../../components/Home/FilterButton";
import FilterDropButton from "../../components/Home/FilterDropButton";

const Category = () => {
  return (
    <div className="w-full h-auto">
    <SearchHeader />
      <main className="mx-auto w-[1100px]">

        {/* 뒤로가기 */}
        <div className="flex mt-16 mb-8 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="32" viewBox="0 0 19 32" fill="none">
          <path d="M18.832 2.832L16 0L0 16L16 32L18.832 29.168L5.664 16L18.832 2.832Z" fill="black"/>
        </svg>
        <span className="font-bold text-4xl ml-6 "> 음료 </span>
        </div>
        {/* 배너 */}
        <section className="mb-16">
          <div className="w-full h-[180px] bg-buttongray flex items-center justify-center text-white font-bold text-xl">
            <span>배너영역</span>
          </div>
        </section>

        {/* BEST 섹션 */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 flex justify-center">음료 BEST👑</h2>
          <div className="flex justify-between items-center">
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
          <h2 className="text-4xl font-bold flex justify-center mb-8">전 상품</h2>
          {/* 필터 메뉴 */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex space-x-4 ">
              <FilterButton label="제로슈거"  />
              <FilterButton label="제품리뷰"  />
              <FilterButton label="혈당 관리 인증"  />
              
            </div>
            <div className="flex space-x-4">
              <FilterDropButton label="이번 상품을 찾아요" />
              <FilterDropButton label="제외할 대체감미료" />
            </div>
          </div>

        {/* 구분선 */}
          <hr className="mb-6 border-t border-gray-300" />

           {/* 정렬 메뉴 */}
           <div className="flex items-center justify-between mb-6">
            <div className="flex text-xl font-bold">
              <h2 className="ml-4">총 <span className="text-main01 ">30</span>개</h2> 
            </div>
            <div className="flex space-x-8 font-normal text-base">
              <button >인기순</button>
              <button  >신상품순</button>
              <button >리뷰 많은 순</button>
              <buttonc className ="pr-4" >별점 높은 순</buttonc>
            </div>
          </div>
 
        {/* 구분선 */}
        <hr className="mb-8 border-t border-gray-300" />

          {/* 상품 리스트 */}
          <div className="flex justify-between items-center mb-16">
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
          </div>

          {/* 상품 리스트 */}
          <div className="flex justify-between items-center mb-16">
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
          </div>

          {/* 상품 리스트 */}
          <div className="flex justify-between items-center mb-16">
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Category;
