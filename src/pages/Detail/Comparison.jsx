import React from "react";
import SearchHeader from '../../components/SearchHeader';
import GoBack from "../../components/Home/GoBack";
import ProductInfo from "../../components/Comparison/ProductInfo";
import Ingredient from "../../components/Comparison/Ingredient";
import RateTopReview from "../../components/Comparison/RateTopReview";

const Comparison = () => {
 

  return (
    <div className="w-full h-auto">
      <SearchHeader />
      <main className="mx-auto bg-slate-500 w-[1100px]">
        <GoBack className="mb-[60px]" label="제품 비교하기" />
          {/* 제품정보 색션 */}
          <div className="bg-yellow-200 h-[360px] ">
            <h1> 제품정보 </h1>
            
          <ProductInfo/>
          </div>

          {/* 구분선  */}
          <div className="bg-buttongray h-[1px] my-10"> </div>

          {/* 당류, 칼로리양, 대체감미료 색션  */}
          <div  className="bg-pink-300 h-[296px]">
            <div>
          <h1> 당류 </h1>
          <h1> 칼로리양양 </h1>
          <h1> 대체감미료료 </h1>
          </div>
            <Ingredient/>
          </div>

          {/* 구분선  */}
          <div className="bg-buttongray h-[1px] my-10"> </div>

          {/* 별점, 리뷰 TOP 태그 섹션 */}
          <div className="bg-gray-400 h-[480px] mb-20">
            <div>
              <h1>벌점</h1>
              <h1> 리뷰 TOP</h1>
            </div>
            <RateTopReview />
          </div>
       
      </main>
    </div>
  );
};

export default Comparison;
