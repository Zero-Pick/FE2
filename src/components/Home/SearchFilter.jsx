import React, { useState } from 'react';

const SearchFilter = () => {
  const [activeFilters, setActiveFilters] = useState(new Set());
  const [excludedFilters, setExcludedFilters] = useState(new Set());
  const [isFilterOptionsVisible, setFilterOptionsVisible] = useState(false);
  const [isExcludeOptionsVisible, setExcludeOptionsVisible] = useState(false);

  const toggleFilter = (filterName) => {
    setActiveFilters((prev) => {
      const newFilters = new Set(prev);
      if (newFilters.has(filterName)) {
        newFilters.delete(filterName);
      } else {
        newFilters.add(filterName);
      }
      return newFilters;
    });
  };

  const toggleExclude = (excludeName) => {
    setExcludedFilters((prev) => {
      const newExcludes = new Set(prev);
      if (newExcludes.has(excludeName)) {
        newExcludes.delete(excludeName);
      } else {
        newExcludes.add(excludeName);
      }
      return newExcludes;
    });
  };

  const renderFilterOptions = () => (
    <div className="absolute top-full mt-2 right-0 bg-white p-4 border shadow-lg w-80">
      <div className="grid grid-cols-3 gap-2 mb-4">
        {[
          '달달해요',
          '달지 않고 깔끔해요',
          '식사 대신 든든해요',
          '간식으로 딱 좋아요',
          '다이어트에 딱이에요',
          '혈당 걱정 덜어줘요',
          '가성비가 좋아요',
          '맛의 종류가 다양해요',
          '휴대하기 편해요',
        ].map((filter) => (
          <button
            key={filter}
            className={`filter-option bg-gray-200 px-3 py-2 ${
              activeFilters.has(filter) ? 'bg-gray-400' : ''
            }`}
            onClick={() => toggleFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="flex justify-end space-x-2">
        <button
          className="text-red-500"
          onClick={() => setFilterOptionsVisible(false)}
        >
          닫기
        </button>
        <button
          className="text-white bg-red-500 px-3 py-1"
          onClick={() => setFilterOptionsVisible(false)}
        >
          적용
        </button>
      </div>
    </div>
  );

  const renderExcludeOptions = () => (
    <div className="absolute top-full mt-2 right-0 bg-white p-4 border shadow-lg w-80">
      <div className="grid grid-cols-2 gap-2 mb-4">
        {[
          '감미료 A',
          '감미료 B',
          '감미료 C',
          '감미료 D',
          '감미료 E',
          '감미료 F',
        ].map((exclude) => (
          <button
            key={exclude}
            className={`exclude-option bg-gray-200 px-3 py-2 ${
              excludedFilters.has(exclude) ? 'bg-gray-400' : ''
            }`}
            onClick={() => toggleExclude(exclude)}
          >
            {exclude}
          </button>
        ))}
      </div>
      <div className="flex justify-end space-x-2">
        <button
          className="text-red-500"
          onClick={() => setExcludeOptionsVisible(false)}
        >
          닫기
        </button>
        <button
          className="text-white bg-red-500 px-3 py-1"
          onClick={() => setExcludeOptionsVisible(false)}
        >
          적용
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex items-center justify-between my-4 mt-10">
      <div className="flex items-center">
        <button
          className={`bg-gray-200 px-3 py-2 mr-3 ${
            activeFilters.has('zero-sugar') ? 'bg-gray-400' : ''
          }`}
          onClick={() => toggleFilter('zero-sugar')}
        >
          제로슈거
        </button>
        <button
          className={`bg-gray-200 px-3 py-2 mr-3 ${
            activeFilters.has('zero-calories') ? 'bg-gray-400' : ''
          }`}
          onClick={() => toggleFilter('zero-calories')}
        >
          제로칼로리
        </button>
        <button
          className={`bg-gray-200 px-3 py-2 ${
            activeFilters.has('blood-sugar-management') ? 'bg-gray-400' : ''
          }`}
          onClick={() => toggleFilter('blood-sugar-management')}
        >
          혈당 관리 인증
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <div
          className="cursor-pointer border-2 border-black p-2 flex items-center relative"
          onClick={() => setFilterOptionsVisible(!isFilterOptionsVisible)}
        >
          <p>이런 상품을 찾아요</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
          {isFilterOptionsVisible && renderFilterOptions()}
        </div>
        <div
          className="cursor-pointer border-2 border-black p-2 flex items-center relative"
          onClick={() => setExcludeOptionsVisible(!isExcludeOptionsVisible)}
        >
          <p>제외할 대체감미료</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
          {isExcludeOptionsVisible && renderExcludeOptions()}
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
