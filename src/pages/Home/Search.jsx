import React, { useState } from 'react';
import axios from 'axios';
import SearchHeader from '../../components/SearchHeader';
import SearchFilter from '../../components/Home/SearchFilter';
import ProductBox from '../../components/Home/ProductBox';

const SearchResult = () => {
  const [products, setProducts] = useState([]);
  const [selectedSort, setSelectedSort] = useState('POPULARITY');
  const [totalCount, setTotalCount] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState('');

  // 제로 필터 버튼
  const [zeroSugar, setZeroSugar] = useState(false);
  const [zeroKcal, setZeroKcal] = useState(false);

  const fetchProducts = async (keyword = searchKeyword) => {
    try {
      setSearchKeyword(keyword);
      const response = await axios.get(
        'http://15.164.252.103:8080/product/search',
        {
          params: {
            keyword,
            zeroSugar: zeroSugar || null,
            zeroKcal: zeroKcal || null,
            exceptErythritol: false,
            exceptAllulose: false,
            tags: [],
            category: null,
            sort: selectedSort,
          },
        }
      );

      const { content, totalElements } = response.data.information;
      setProducts(content);
      setTotalCount(totalElements);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  React.useEffect(() => {
    if (searchKeyword) {
      fetchProducts();
    }
  }, [zeroSugar, zeroKcal, selectedSort]);

  const handleSortClick = (sortType) => {
    setSelectedSort(sortType);
  };

  const toggleZeroSugar = () => {
    setZeroSugar((prev) => !prev);
  };

  const toggleZeroKcal = () => {
    setZeroKcal((prev) => !prev);
  };

  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
    setZeroSugar(false);
    setZeroKcal(false);
    fetchProducts(keyword);
  };

  return (
    <div>
      {/* 헤더 */}
      <SearchHeader onSearch={handleSearch} />

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
          <h1 className="font-bold text-3xl">'{searchKeyword}' 검색 결과</h1>
        </header>

        {/* 필터 버튼 */}
        <SearchFilter
          zeroSugar={zeroSugar}
          zeroKcal={zeroKcal}
          toggleZeroSugar={toggleZeroSugar}
          toggleZeroKcal={toggleZeroKcal}
        />

        {/* 구분선 */}
        <hr className="my-7 border-t  border-gray-300" />

        {/* 정렬 버튼 */}
        <div className="flex justify-between items-center my-[-10px]">
          <p className="font-bold text-xl">
            총 <span className="text-main01">{totalCount}</span>개
          </p>
          <div>
            <button
              className={`px-3 py-2 mr-3 ${
                selectedSort === 'POPULARITY' ? 'font-bold' : 'font-normal'
              }`}
              onClick={() => handleSortClick('POPULARITY')}
            >
              인기순
            </button>
            <button
              className={`px-3 py-2 mr-3 ${
                selectedSort === 'NEWEST' ? 'font-bold' : 'font-normal'
              }`}
              onClick={() => handleSortClick('NEWEST')}
            >
              신상품순
            </button>
            <button
              className={`px-3 py-2 mr-3 ${
                selectedSort === 'MOST_REVIEWED' ? 'font-bold' : 'font-normal'
              }`}
              onClick={() => handleSortClick('MOST_REVIEWED')}
            >
              리뷰 많은 순
            </button>
            <button
              className={`px-3 py-2 ${
                selectedSort === 'HIGHEST_RATED' ? 'font-bold' : 'font-normal'
              }`}
              onClick={() => handleSortClick('HIGHEST_RATED')}
            >
              별점 높은 순
            </button>
          </div>
        </div>

        {/* 구분선 */}
        <hr className="my-7 border-t  border-gray-300" />

        {/* 상품 리스트 */}
        <div className="grid grid-cols-4 gap-4 mb-16">
          {products.map((product) => (
            <ProductBox key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
