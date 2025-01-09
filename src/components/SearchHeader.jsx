import React, { useState } from 'react';
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';

const SearchHeader = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownVisible((prev) => !prev);
  };

  const closeDropdown = (e) => {
    if (!e.target.closest('#mypage') && !e.target.closest('#dropdown')) {
      setIsDropdownVisible(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', closeDropdown);
    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);

  return (
    <header>
      <nav className="flex items-center justify-between p-4 px-20 py-5 shadow-md">
        <img
          id="logo"
          src={logo1}
          alt="zeropick logo"
          className="w-1/6 hover:cursor-pointer"
          onClick={() => (window.location.href = '../html/index.html')}
        />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="찾는 제로 식품을 검색하세요.(제품명, 브랜드, 성분 등)"
          className="w-1/2 justify-between bg-gray-200 text-black p-4 mx-10 focus:outline-none"
        />
        <div className="flex space-x-4 font-bold">
          <a id="lately" href="#" className="p-4">
            찜한 상품
          </a>
          <a id="mypage" href="#" className="p-4" onClick={toggleDropdown}>
            마이페이지
          </a>
          <a id="login" href="../html/login.html" className="p-4">
            로그인
          </a>
        </div>
      </nav>
      {isDropdownVisible && (
        <div
          id="dropdown"
          className="absolute right-20 mt-4 w-80 bg-white shadow-lg rounded-lg p-4 z-10"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <img src={logo2} alt="logo" className="h-6 mr-2" />
              <p className="font-semibold text-lg">
                닉네임님, <span className="text-main01 font-bold">건강</span>
                하세요!
              </p>
            </div>
            <button
              id="myInfoBtn"
              className="text-gray-600 border border-gray-300 px-2 py-1 rounded hover:bg-gray-100"
              onClick={() =>
                (window.location.href = '../html/mypage-profile-1.html')
              }
            >
              내 정보
            </button>
          </div>
          <div className="flex justify-between text-center border-t border-b py-4">
            <button
              id="likedProducts"
              className="w-1/2 border-r hover:bg-gray-100 p-2"
              onClick={() =>
                (window.location.href = '../html/mypage-liked.html')
              }
            >
              <p className="text-gray-500 text-sm">찜한 제품</p>
              <p className="text-red-500 font-bold text-2xl">13</p>
            </button>
            <button
              id="myReviews"
              className="w-1/2 hover:bg-gray-100 p-2"
              onClick={() =>
                (window.location.href = '../html/mypage-review.html')
              }
            >
              <p className="text-gray-500 text-sm">내가 쓴 리뷰</p>
              <p className="text-red-500 font-bold text-2xl">2</p>
            </button>
          </div>
          <button
            id="productStatus"
            className="w-full flex justify-between items-center py-2 px-2 hover:bg-gray-100 rounded-lg"
            onClick={() =>
              (window.location.href = '../html/mypage-product.html')
            }
          >
            <span className="text-gray-700 text-left">제품 등록 현황</span>
            <span className="text-gray-400">&gt;</span>
          </button>
          <button
            id="modifyInfo"
            className="w-full flex justify-between items-center py-2 px-2 hover:bg-gray-100 rounded-lg"
            onClick={() =>
              (window.location.href = '../html/mypage-modify-information.html')
            }
          >
            <span className="text-gray-700 text-left">정보 수정 요청 현황</span>
            <span className="text-gray-400">&gt;</span>
          </button>
          <div className="text-center text-gray-400 mt-4 hover:text-black cursor-pointer">
            로그아웃
          </div>
        </div>
      )}
    </header>
  );
};

export default SearchHeader;
