import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';
import { ReactComponent as MenuIcon } from '../images/Menu.svg';

const Header = () => {
  const navigate = useNavigate();

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

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

  useEffect(() => {
    document.addEventListener('click', closeDropdown);
    document.addEventListener('click', closeMenu);
    return () => {
      document.removeEventListener('click', closeDropdown);
      document.removeEventListener('click', closeMenu);
    };
  }, []);

  return (
    <header className="flex justify-center items-center bg-white shadow-[0px_2px_8px_0px_rgba(0,0,0,0.15)] h-[80px]">
      <nav className="flex w-[1100px] justify-between items-center">
        {/* MenuIcon, Logo */}
        <div className="flex items-center gap-[24px]">
          <MenuIcon
            id="menu"
            className="w-6 h-6 hover:cursor-pointer"
            onClick={toggleMenu}
          />
          <img
            id="logo"
            src={logo1}
            alt="zeropick logo"
            className="w-[150px] hover:cursor-pointer"
            onClick={() => navigate('/main')}
          />
        </div>
        {/* MyPage */}
        <div className="font-bold">
          <a
            id="mypage"
            href="#"
            className="p-4 text-gray-700 hover:text-black"
            onClick={toggleDropdown}
          >
            마이페이지
          </a>
        </div>
      </nav>
      {/* Menu Popup */}
      {isMenuVisible && (
        <div className="menu-popup flex flex-col items-center absolute left-[405px] top-[65px] p-[16px] rounded-[4px] bg-white shadow-[0px_1px_8px_0px_rgba(0,0,0,0.25)]">
          {[
            '음료 · 차',
            '과자 · 빵',
            '유가공품',
            '아이스크림 · 빙과',
            '초콜릿',
            '면 · 떡',
            '농수산가공식품',
            '기타',
          ].map((text, index) => (
            <button
              key={index}
              className="flex group font-bold w-[216px] h-[48px] px-[32px] justify-between items-center rounded-[10px] bg-white text-[#707070] hover:bg-[var(--main-02,#FCEDDA)] hover:text-main01 mb-2 last:mb-0"
            >
              <span>{text}</span>
              <span className="text-main01 opacity-0 group-hover:opacity-100">
                &gt;
              </span>
            </button>
          ))}
        </div>
      )}
      {/* Mypage Popup */}
      {isDropdownVisible && (
        <div
          id="dropdown"
          className="absolute right-[400px] top-[65px] w-[320px] bg-[#f1f1f1] shadow-lg rounded-lg p-4 z-10"
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
              className="text-black border border-gray-300 px-2 py-1 rounded hover:bg-gray-100"
              onClick={() => navigate('/')}
            >
              내 정보
            </button>
          </div>
          <div className="flex justify-between text-center py-2">
            <button
              id="likedProducts"
              className="w-1/2 bg-white hover:bg-gray-100 p-2 mr-3"
              onClick={() => navigate('/mypage/favorites')}
            >
              <p className="text-black text-sm">찜한 제품</p>
              <p className="text-main01 font-bold text-2xl">13</p>
            </button>
            <button
              id="myReviews"
              className="w-1/2 bg-white hover:bg-gray-100 p-2"
              onClick={() => navigate('/mypage/reviews')}
            >
              <p className="text-black text-sm">내가 쓴 리뷰</p>
              <p className="text-main01 font-bold text-2xl">2</p>
            </button>
          </div>
          <button
            id="productStatus"
            className="w-full flex justify-between items-center py-2 px-2 bg-white hover:bg-gray-100 my-3"
            onClick={() => navigate('/mypage/suggest')}
          >
            <span className="text-black text-left">제품 등록 현황</span>
            <span className="text-[#707070] mr-2">&gt;</span>
          </button>
          <button
            id="modifyInfo"
            className="w-full flex justify-between items-center py-2 px-2 bg-white hover:bg-gray-100"
            onClick={() => navigate('/mypage/report')}
          >
            <span className="text-black text-left">정보 수정 요청 현황</span>
            <span className="text-[#707070]  mr-2">&gt;</span>
          </button>
          <div
            className="text-center text-gray-400 mt-4 hover:text-black cursor-pointer"
            onClick={() => alert('로그아웃 기능은 아직 구현되지 않았습니다.')}
          >
            로그아웃
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
