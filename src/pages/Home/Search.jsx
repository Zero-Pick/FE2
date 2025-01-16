import React, { useState } from 'react';
import SearchHeader from '../../components/SearchHeader';
import SearchFilter from '../../components/Home/SearchFilter';
import ProductBox from '../../components/Home/ProductBox';

const SearchResult = () => {
  const [products, setProducts] = useState([]);
  const [selectedSort, setSelectedSort] = useState('인기순');

  React.useEffect(() => {
    const mockProducts = Array.from({ length: 30 }, (_, index) => ({
      id: index + 1,
      name: `Product ${index + 1}`,
      image: 'https://via.placeholder.com/150',
    }));
    setProducts(mockProducts);
  }, []);

  const handleSortClick = (sortType) => {
    setSelectedSort(sortType);
  };

  return (
    <div>
      {/* 헤더 */}
      <SearchHeader />

      <div className="container mx-auto w-[1100px] mt-6">
        <header className="flex items-center space-x-3 mb-6">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-10 h-8 stroke-2 cursor-pointer"
              onClick={() => window.history.back()}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <h1 className="font-bold text-3xl">'오레오' 검색 결과</h1>
        </header>

        {/* 필터 버튼 */}
        <SearchFilter />

        {/* 구분선 */}
        <hr className="my-7 border-t  border-gray-300" />

        {/* 정렬 버튼 */}
        <div className="flex justify-between items-center my-[-10px]">
          <p className="font-bold text-xl">
            총 <span className="text-main01">{products.length}</span>개
          </p>
          <div>
            <button
              className={`px-3 py-2 mr-3 ${
                selectedSort === '인기순' ? 'font-bold' : 'font-normal'
              }`}
              onClick={() => handleSortClick('인기순')}
            >
              인기순
            </button>
            <button
              className={`px-3 py-2 mr-3 ${
                selectedSort === '신상품순' ? 'font-bold' : 'font-normal'
              }`}
              onClick={() => handleSortClick('신상품순')}
            >
              신상품순
            </button>
            <button
              className={`px-3 py-2 mr-3 ${
                selectedSort === '리뷰 많은 순' ? 'font-bold' : 'font-normal'
              }`}
              onClick={() => handleSortClick('리뷰 많은 순')}
            >
              리뷰 많은 순
            </button>
            <button
              className={`px-3 py-2 ${
                selectedSort === '별점 높은 순' ? 'font-bold' : 'font-normal'
              }`}
              onClick={() => handleSortClick('별점 높은 순')}
            >
              별점 높은 순
            </button>
          </div>
        </div>

        {/* 구분선 */}
        <hr className="my-7 border-t  border-gray-300" />

        {/* 상품 리스트 */}
        <div className="flex justify-between items-center mb-16">
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
        </div>

        <div className="flex justify-between items-center mb-16">
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
