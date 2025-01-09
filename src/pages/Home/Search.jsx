import React, { useState } from 'react';
import SearchHeader from '../../components/SearchHeader';
import SearchFilter from '../../components/Home/SearchFilter';

const SearchResult = () => {
  const [products, setProducts] = useState([]);

  React.useEffect(() => {
    const mockProducts = Array.from({ length: 30 }, (_, index) => ({
      id: index + 1,
      name: `Product ${index + 1}`,
      image: 'https://via.placeholder.com/150',
    }));
    setProducts(mockProducts);
  }, []);

  return (
    <div>
      {/* 헤더 */}
      <SearchHeader />

      <div className="container mx-auto pt-10">
        <header className="flex items-center space-x-3 mb-6">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-10 h-10 stroke-2 cursor-pointer"
              onClick={() => window.history.back()}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <h1 className="font-bold text-3xl">"오레오" 검색 결과</h1>
        </header>

        <SearchFilter />

        <div className="flex justify-between items-center mb-6">
          <p className="font-bold text-xl">총 {products.length}개</p>
          <div>
            <button className="bg-gray-200 px-3 py-2 mr-3">인기순</button>
            <button className="bg-gray-200 px-3 py-2 mr-3">신상품순</button>
            <button className="bg-gray-200 px-3 py-2 mr-3">리뷰 많은 순</button>
            <button className="bg-gray-200 px-3 py-2">별점 높은 순</button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 object-cover mb-4"
              />
              <h2 className="font-bold text-lg">{product.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
