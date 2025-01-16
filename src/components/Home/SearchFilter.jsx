import React, { useState, useEffect, useRef } from 'react';

const SearchFilter = () => {
  const [activeFilters, setActiveFilters] = useState(new Set());
  const [excludedFilters, setExcludedFilters] = useState(new Set());
  const [tempFilters, setTempFilters] = useState(new Set());
  const [tempExcludes, setTempExcludes] = useState(new Set());
  const [isFilterOptionsVisible, setFilterOptionsVisible] = useState(false);
  const [isExcludeOptionsVisible, setExcludeOptionsVisible] = useState(false);

  const filterRef = useRef(null);
  const excludeRef = useRef(null);

  const toggleActiveFilter = (filterName) => {
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

  const toggleTempFilter = (filterName) => {
    setTempFilters((prev) => {
      const newFilters = new Set(prev);
      if (newFilters.has(filterName)) {
        newFilters.delete(filterName);
      } else {
        newFilters.add(filterName);
      }
      return newFilters;
    });
  };

  const toggleTempExclude = (excludeName) => {
    setTempExcludes((prev) => {
      const newExcludes = new Set(prev);
      if (newExcludes.has(excludeName)) {
        newExcludes.delete(excludeName);
      } else {
        newExcludes.add(excludeName);
      }
      return newExcludes;
    });
  };

  const applyFilters = () => {
    setActiveFilters((prev) => new Set([...prev, ...tempFilters]));
    setFilterOptionsVisible(false);
  };

  const applyExcludes = () => {
    setExcludedFilters(new Set(tempExcludes));
    setExcludeOptionsVisible(false);
  };

  const renderFilterOptions = () => (
    <div
      ref={filterRef}
      className="absolute top-full w-[481px] mt-2 right-0 bg-white p-4 border shadow-lg"
      onClick={(e) => e.stopPropagation()}
    >
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
            className={`px-4 py-2 rounded-lg text-[14px] box-content border-2 ${
              tempFilters.has(filter)
                ? 'border-main01 bg-[#FCEDDA] font-bold'
                : 'border-[#f1f1f1] bg-[#f1f1f1] font-normal'
            }`}
            onClick={() => toggleTempFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="flex justify-end space-x-2">
        <button
          className="text-main01"
          onClick={() => setFilterOptionsVisible(false)}
        >
          닫기
        </button>
        <button
          className="text-white bg-main01 px-3 py-1"
          onClick={applyFilters}
        >
          적용
        </button>
      </div>
    </div>
  );

  const renderExcludeOptions = () => (
    <div
      ref={excludeRef}
      className="absolute top-full mt-2 right-0 bg-white p-4 border shadow-lg w-80"
      onClick={(e) => e.stopPropagation()}
    >
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
            className={`px-4 py-2 rounded-lg text-[14px] box-content border-2 ${
              tempExcludes.has(exclude)
                ? 'border-main01 bg-[#FCEDDA] font-bold'
                : 'border-[#f1f1f1] bg-[#f1f1f1] font-normal'
            }`}
            onClick={() => toggleTempExclude(exclude)}
          >
            {exclude}
          </button>
        ))}
      </div>
      <div className="flex justify-end space-x-2">
        <button
          className="text-main01"
          onClick={() => setExcludeOptionsVisible(false)}
        >
          닫기
        </button>
        <button
          className="text-white bg-main01 px-3 py-1"
          onClick={applyExcludes}
        >
          적용
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex items-center justify-between my-4 mt-10">
      {/* 제로 관련 버튼 */}
      <div className="flex items-center space-x-4">
        <button
          className={`px-4 py-2  rounded-lg  text-[14px] box-content   border-2
        ${
          activeFilters.has('zero-sugar')
            ? 'border-main01 bg-[#FCEDDA] font-bold'
            : 'border-[#f1f1f1] bg-[#f1f1f1] font-normal'
        }`}
          onClick={() => toggleActiveFilter('zero-sugar')}
        >
          제로슈거
        </button>
        <button
          className={`px-4 py-2  rounded-lg  text-[14px] box-content   border-2
        ${
          activeFilters.has('zero-calories')
            ? 'border-main01 bg-[#FCEDDA] font-bold'
            : 'border-[#f1f1f1] bg-[#f1f1f1] font-normal'
        }`}
          onClick={() => toggleActiveFilter('zero-calories')}
        >
          제로칼로리
        </button>
        <button
          className={`px-4 py-2  rounded-lg  text-[14px] box-content   border-2
        ${
          activeFilters.has('blood-sugar-management')
            ? 'border-main01 bg-[#FCEDDA] font-bold'
            : 'border-[#f1f1f1] bg-[#f1f1f1] font-normal'
        }`}
          onClick={() => toggleActiveFilter('blood-sugar-management')}
        >
          혈당 관리 인증
        </button>
      </div>

      {/* 드롭다운 필터 */}
      <div className="flex items-center space-x-4">
        <div
          className={`flex items-center justify-between px-4 py-2 rounded-lg text-txtgray text-[14px] box-content border-2 cursor-pointer relative ${
            isFilterOptionsVisible
              ? 'border-[#707070] bg-white'
              : 'border-[#f1f1f1] bg-[#f1f1f1]'
          }`}
          onClick={(e) => {
            setFilterOptionsVisible(!isFilterOptionsVisible);
          }}
        >
          <p>이런 상품을 찾아요</p>
          <span className="ml-2">
            {isFilterOptionsVisible ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clipPath="url(#clip0_748_9053)">
                  <path
                    d="M6.175 12.8418L10 9.02513L13.825 12.8418L15 11.6668L10 6.6668L5 11.6668L6.175 12.8418Z"
                    fill="#707070"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_748_9053">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="matrix(1 0 0 -1 0 20)"
                    />
                  </clipPath>
                </defs>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clipPath="url(#clip0_777_10660)">
                  <path
                    d="M6.175 7.1582L10 10.9749L13.825 7.1582L15 8.3332L10 13.3332L5 8.3332L6.175 7.1582Z"
                    fill="#707070"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_777_10660">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            )}
          </span>
          {isFilterOptionsVisible && renderFilterOptions()}
        </div>

        <div
          className={`flex items-center justify-between px-4 py-2 rounded-lg text-txtgray text-[14px] box-content border-2 cursor-pointer relative ${
            isExcludeOptionsVisible
              ? 'border-[#707070] bg-white'
              : 'border-[#f1f1f1] bg-[#f1f1f1]'
          }`}
          onClick={(e) => {
            setExcludeOptionsVisible(!isExcludeOptionsVisible);
          }}
        >
          <p>제외할 대체감미료</p>
          <span className="ml-2">
            {isExcludeOptionsVisible ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clipPath="url(#clip0_748_9053)">
                  <path
                    d="M6.175 12.8418L10 9.02513L13.825 12.8418L15 11.6668L10 6.6668L5 11.6668L6.175 12.8418Z"
                    fill="#707070"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_748_9053">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="matrix(1 0 0 -1 0 20)"
                    />
                  </clipPath>
                </defs>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clipPath="url(#clip0_777_10660)">
                  <path
                    d="M6.175 7.1582L10 10.9749L13.825 7.1582L15 8.3332L10 13.3332L5 8.3332L6.175 7.1582Z"
                    fill="#707070"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_777_10660">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            )}
          </span>
          {isExcludeOptionsVisible && renderExcludeOptions()}
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
