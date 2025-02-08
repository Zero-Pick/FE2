import React from 'react';
import SearchHeader from '../../components/SearchHeader';
import GoBackProduct from '../../components/Detail/GoBackProduct';
import DetailBox from '../../components/Detail/DetailBox';
import SumUpReview from '../../components/Detail/SumUpReview';
import SumUpZero from '../../components/Detail/SumUpZero';
import ProductReview from '../../components/Detail/ProductReview';

const Detail = () => {
  return (
    <div className="w-full h-auto">
      <SearchHeader />
      <main className="mx-auto w-[1100px]">
        {/* 뒤로가기 */}
        <GoBackProduct label="검색결과" />
        {/* 상품 상단  */}
        <DetailBox />
        {/* 구분선 */}
        <hr className="my-[58px] h-1 bg-buttongray"></hr>
        {/* 상품정보 요약 */}
        <p className="font-bold text-[32px] pb-9 ">상품정보 요약</p>
        {/* 한눈에 보는 리뷰 */}
        <div className="mb-9">
          <SumUpReview overallRating={'4.22'} reviewCount={'4'} />
        </div>
        {/* 한눈에 보는 성분 */}
        <div>
          <SumUpZero
            sugarContent={'“찐” 제로슈거 인증!'}
            calorieContent={'제로칼로리 표시 기준치 이하예요!'}
          />
        </div>
        {/* 구분선 */}
        <hr className="my-[58px] h-1 bg-buttongray"></hr>
        <ProductReview />
      </main>
    </div>
  );
};

export default Detail;
