import React from 'react';
import Sidebar from '../../components/Mypage/Sidebar';
import SearchHeader from '../../components/SearchHeader';

const Favorites = () => {
  const products = Array.from({ length: 13 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    image: 'https://via.placeholder.com/150',
  }));

  return (
    <div className="bg-white min-h-screen">
      {/* 헤더 */}
      <SearchHeader />

      {/* 메인 타이틀 */}
      <div className="max-w-screen-lg mx-auto mt-8 mb-4">
        <h1 className="text-3xl font-bold">마이페이지</h1>
      </div>

      {/* 컨테이너 */}
      <div className="flex mx-auto max-w-screen-lg">
        {/* 왼쪽 사이드바 */}
        <Sidebar />

        {/* 오른쪽 상품 목록 */}
        <section className="w-3/4 bg-white p-6 shadow-md rounded-lg ml-6">
          <h2 className="font-bold text-2xl mb-4">찜한 제품</h2>
          <p className="text-gray-500 mb-6">총 13개</p>
          <div id="productList" className="grid grid-cols-4 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="border rounded-md shadow-md p-4 flex flex-col items-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 object-cover mb-2"
                />
                <p className="text-sm font-semibold">{product.name}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Favorites;
