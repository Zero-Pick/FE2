import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';
import { ReactComponent as MenuIcon } from '../images/Menu.svg';

const categoryMap = { // 카테고리 매핑 
  '음료 · 차': 'BEVERAGE_TEA',
  '과자 · 빵': 'SNACK_BREAD',
  '유가공품': 'DAIRY_PRODUCTS',
  '아이스크림 · 빙과': 'ICE_CREAM',
  '초콜릿': 'CHOCOLATE',
  '면 · 떡': 'NOODLE_RICE_CAKE',
  '농수산가공식품': 'AGRICULTURAL_PRODUCTS',
  '기타': 'ETC',
};

const SearchHeader = ({ onSearch }) => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsMenuVisible((prev) => !prev);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownVisible((prev) => !prev);
  };

  const closeMenu = (e) => {
    if (!e.target.closest('#menu') && !e.target.closest('.menu-popup')) {
      setIsMenuVisible(false);
    }
  };

  const closeDropdown = (e) => {
    if (!e.target.closest('#mypage') && !e.target.closest('#dropdown')) {
      setIsDropdownVisible(false);
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeDropdown);
    document.addEventListener('click', closeMenu);
    return () => {
      document.removeEventListener('click', closeDropdown);
      document.removeEventListener('click', closeMenu);
    };
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
      setSearchActive(false);
    }
  };

  const handleFocus = () => {
    setSearchActive(true);
  };

  return (
    <header className="flex justify-center items-center bg-white shadow-[0px_2px_8px_0px_rgba(0,0,0,0.15)] h-[80px]">
      <nav className="flex w-[1100px] justify-between items-center">
        {/* MenuIcon, Logo */}
        <div className="flex items-center gap-[24px]">
          <div className="relative">
            <MenuIcon
              id="menu"
              className="w-6 h-6 hover:cursor-pointer"
              onClick={toggleMenu}
            />
            {isMenuVisible && (
              <div className="menu-popup absolute top-9 left-0 mt-2 p-[16px] rounded-[4px] bg-white shadow-[0px_1px_8px_0px_rgba(0,0,0,0.25)]">
                {Object.keys(categoryMap).map((text, index) => (
                  <button
                    key={index}
                    className="flex group font-bold w-[216px] h-[48px] px-[32px] justify-between items-center rounded-[10px] bg-white text-[#707070] hover:bg-[var(--main-02,#FCEDDA)] hover:text-main01 mb-2 last:mb-0"
                    onClick={() => navigate(`/category?category=${categoryMap[text]}`)} 
                  >
                    <span>{text}</span>
                    <span className="text-main01 opacity-0 group-hover:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                        <path d="M0.888672 11.8956L5.28393 6.99961L0.888672 2.10361L2.2418 0.599609L7.99978 6.99961L2.2418 13.3996L0.888672 11.8956Z" fill="#EE4E34"/>
                      </svg>
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <img
            id="logo"
            src={logo1}
            alt="zeropick logo"
            className="w-[150px] hover:cursor-pointer"
            onClick={() => navigate('/main')}
          />
        </div>

        {/* Search */}
        <div class="flex items-center w-[411px] h-[36px] bg-[#f1f1f1] py-[6px] px-[12px] rounded-[6px] border border-transparent focus-within:border-[#EE4E34] focus-within:bg-[#f1f1f1]">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="찾는 제로 식품을 검색하세요.(제품명, 브랜드, 성분 등)"
            className={`flex-grow text-xs bg-transparent ${
              searchActive ? 'text-[#707070]' : 'text-black'
            } focus:outline-none`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            class="ml-2"
          >
            <path
              d="M12.5098 11.2549H11.7198L11.4398 10.9849C12.4198 9.84488 13.0098 8.36488 13.0098 6.75488C13.0098 3.16488 10.0998 0.254883 6.50977 0.254883C2.91977 0.254883 0.00976562 3.16488 0.00976562 6.75488C0.00976562 10.3449 2.91977 13.2549 6.50977 13.2549C8.11977 13.2549 9.59976 12.6649 10.7398 11.6849L11.0098 11.9649V12.7549L16.0098 17.7449L17.4998 16.2549L12.5098 11.2549ZM6.50977 11.2549C4.01977 11.2549 2.00977 9.24488 2.00977 6.75488C2.00977 4.26488 4.01977 2.25488 6.50977 2.25488C8.99977 2.25488 11.0098 4.26488 11.0098 6.75488C11.0098 9.24488 8.99977 11.2549 6.50977 11.2549Z"
              fill="#EE4E34"
            />
          </svg>
        </div>

        {/* MyPage */}
        <div className="relative inline-block font-bold">
          <a
            id="mypage"
            href="#"
            className="p-4 text-[#707070] hover:text-black"
            onClick={toggleDropdown}
          >
            마이페이지
          </a>
          {/* Mypage Popup */}
          {isDropdownVisible && (
            <div
              id="dropdown"
              className="absolute top-9 right-0 mt-2 w-[320px] bg-[#f1f1f1] shadow-lg rounded-lg p-[20px] z-10"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-base">
                  <img src={logo2} alt="logo" className="h-[18px] mr-2" />
                  <p className="font-semibold">
                    닉네임님,{' '}
                    <span className="text-main01 font-bold">건강</span>
                    하세요!
                  </p>
                </div>
                <button
                  id="myInfoBtn"
                  className="w-[56px] h-[20px] text-black border border-[#707070] rounded-[4px] text-[12px]"
                  onClick={() => navigate('/')}
                >
                  내 정보
                </button>
              </div>
              <div className="flex justify-between text-center py-2">
                <button
                  id="likedProducts"
                  className="w-1/2 bg-white hover:bg-[#d9d9d9] py-[12px] mr-3 rounded-[4px]"
                  onClick={() => navigate('/mypage/favorites')}
                >
                  <p className="text-black text-sm">찜한 제품</p>
                  <p className="text-main01 font-bold text-xl">13</p>
                </button>
                <button
                  id="myReviews"
                  className="w-1/2 bg-white hover:bg-[#d9d9d9] py-[12px] rounded-[4px]"
                  onClick={() => navigate('/mypage/reviews')}
                >
                  <p className="text-black text-sm">내가 쓴 리뷰</p>
                  <p className="text-main01 font-bold text-xl">2</p>
                </button>
              </div>
              <button
                id="productStatus"
                className="w-full flex justify-between items-center py-2 px-4 bg-white hover:bg-[#d9d9d9] rounded-[4px] my-3"
                onClick={() => navigate('/mypage/suggest')}
              >
                <div className="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M7.2 7.2C7.37 7.2 7.5126 7.1424 7.6278 7.0272C7.7426 6.9124 7.8 6.77 7.8 6.6V5.4H9C9.17 5.4 9.3124 5.3424 9.4272 5.2272C9.5424 5.1124 9.6 4.97 9.6 4.8C9.6 4.63 9.5424 4.4874 9.4272 4.3722C9.3124 4.2574 9.17 4.2 9 4.2H7.8V3C7.8 2.83 7.7426 2.6874 7.6278 2.5722C7.5126 2.4574 7.37 2.4 7.2 2.4C7.03 2.4 6.8876 2.4574 6.7728 2.5722C6.6576 2.6874 6.6 2.83 6.6 3V4.2H5.4C5.23 4.2 5.0876 4.2574 4.9728 4.3722C4.8576 4.4874 4.8 4.63 4.8 4.8C4.8 4.97 4.8576 5.1124 4.9728 5.2272C5.0876 5.3424 5.23 5.4 5.4 5.4H6.6V6.6C6.6 6.77 6.6576 6.9124 6.7728 7.0272C6.8876 7.1424 7.03 7.2 7.2 7.2ZM3.6 9.6C3.27 9.6 2.9876 9.4826 2.7528 9.2478C2.5176 9.0126 2.4 8.73 2.4 8.4V1.2C2.4 0.87 2.5176 0.5874 2.7528 0.3522C2.9876 0.1174 3.27 0 3.6 0H10.8C11.13 0 11.4126 0.1174 11.6478 0.3522C11.8826 0.5874 12 0.87 12 1.2V8.4C12 8.73 11.8826 9.0126 11.6478 9.2478C11.4126 9.4826 11.13 9.6 10.8 9.6H3.6ZM1.2 12C0.87 12 0.5876 11.8826 0.3528 11.6478C0.1176 11.4126 0 11.13 0 10.8V3C0 2.83 0.0576001 2.6874 0.1728 2.5722C0.2876 2.4574 0.43 2.4 0.6 2.4C0.77 2.4 0.9126 2.4574 1.0278 2.5722C1.1426 2.6874 1.2 2.83 1.2 3V10.8H9C9.17 10.8 9.3124 10.8576 9.4272 10.9728C9.5424 11.0876 9.6 11.23 9.6 11.4C9.6 11.57 9.5424 11.7124 9.4272 11.8272C9.3124 11.9424 9.17 12 9 12H1.2Z"
                      fill="#707070"
                    />
                  </svg>
                  <span className="text-black text-sm text-left">
                    제품 등록 현황
                  </span>
                </div>
                <div className="flex">
                  <span className="text-[#707070] mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_822_7366)">
                        <path
                          d="M7.1582 13.825L10.9749 10L7.1582 6.175L8.3332 5L13.3332 10L8.3332 15L7.1582 13.825Z"
                          fill="#707070"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_822_7366">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>
              </button>
              <button
                id="modifyInfo"
                className="w-full flex justify-between items-center py-2 px-4 bg-white hover:bg-[#d9d9d9] rounded-[4px]"
                onClick={() => navigate('/mypage/report')}
              >
                <div className="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M0 9.50035V12H2.49965L9.87196 4.62769L7.37231 2.12804L0 9.50035ZM11.805 2.69463C12.065 2.43466 12.065 2.01472 11.805 1.75476L10.2452 0.194973C9.98528 -0.064991 9.56534 -0.064991 9.30537 0.194973L8.08554 1.4148L10.5852 3.91446L11.805 2.69463Z"
                      fill="#707070"
                    />
                  </svg>
                  <span className="text-black text-sm text-left">
                    정보 수정 요청 현황
                  </span>
                </div>
                <div className="flex">
                  <span className="text-[#707070]  mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_822_7366)">
                        <path
                          d="M7.1582 13.825L10.9749 10L7.1582 6.175L8.3332 5L13.3332 10L8.3332 15L7.1582 13.825Z"
                          fill="#707070"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_822_7366">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>
              </button>
              <div
                className="text-center text-[#707070] mt-4 hover:text-black cursor-pointer"
                onClick={() =>
                  alert('로그아웃 기능은 아직 구현되지 않았습니다.')
                }
              >
                로그아웃
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default SearchHeader;
