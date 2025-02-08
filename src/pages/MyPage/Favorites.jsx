import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../components/Mypage/Sidebar';
import SearchHeader from '../../components/SearchHeader';
import FavoriteProductBox from '../../components/Mypage/FavoriteProductBox';

const Favorites = () => {
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const fetchFavorites = async () => {
    try {
      const response = await axios.get(
        'http://15.164.252.103:8080/product/bookmark',
        {
          params: {
            page: 0,
            size: 10,
          },
        }
      );

      const { content, totalElements } = response.data.information;
      setProducts(content);
      setTotalCount(totalElements);
    } catch (error) {
      console.error('찜한 상품 조회 실패:', error);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

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

        {/* 오른쪽 상품 목록 */}
        <section className="flex flex-col items-center w-[816px] border bg-white py-[32px] rounded-[4px] ml-6">
          <div className="flex flex-col w-[712px]">
            <h2 className="font-normal text-2xl">찜한 제품</h2>

            {/* 구분선 */}
            <hr className="w-full border-t-2 border-[#d9d9d9] my-6" />

            {products.length > 0 ? (
              <>
                {/* 총 개수 */}
                <p className="text-[#707070] mb-[16px]">총 {totalCount}개</p>

                {/* 찜한 상품 */}
                <div id="productList" className="grid grid-cols-4 gap-6">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="flex flex-col items-center"
                    >
                      <FavoriteProductBox product={product} />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="flex justify-center items-center my-[40px] text-[#707070]">
                <p className="text-base font-normal">찜한 제품이 없습니다.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Favorites;
