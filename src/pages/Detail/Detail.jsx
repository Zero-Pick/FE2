import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import SearchHeader from '../../components/SearchHeader';
import GoBackProduct from '../../components/Detail/GoBackProduct';
import DetailBox from '../../components/Detail/DetailBox';
import SumUpZero from '../../components/Detail/SumUpZero';
import ProductReview from '../../components/Detail/ProductReview';
import api from "../../api/axiosInstance";

// 상품 상세 정보 가져오기
const Detail = () => {
  const { productId } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState(location.state?.product || null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await api.post(`/product/detail/${productId}`);

        if (response.data && response.data.check) {
          setProduct(response.data.information);
        } else {
          throw new Error("올바르지 않은 데이터 형식입니다.");
        }
      } catch (error) {
        console.error("상품 정보를 불러오는 데 실패했습니다.", error);
      } finally {
      }
    };

    fetchProductDetail();
  }, [productId]);


  return (
    <div className="w-full h-auto">
      <SearchHeader />
      <main className="mx-auto w-[1100px]">
        {/* 뒤로가기 */}
        <GoBackProduct label="검색결과" />
        {/* 상품 상단  */}
        <DetailBox product={product} />
        {/* 구분선 */}
        <hr className="my-[58px] h-1 bg-buttongray"></hr>
        {/* 상품정보 요약 */}
        <p className="font-bold text-[32px] pb-9 ">상품정보 요약</p>

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
