import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo1 from '../images/logo1.png';
import { ReactComponent as MenuIcon } from '../images/Menu.svg';

const LoginHeader = () => {
  const navigate = useNavigate();

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsMenuVisible((prev) => !prev);
  };

  const closeMenu = (e) => {
    if (!e.target.closest('#menu') && !e.target.closest('.menu-popup')) {
      setIsMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeMenu);
    return () => {
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
        {/* Login */}
        <div className="font-bold">
          <a
            id="login"
            href="#"
            className="p-4 text-[#707070] hover:text-black"
          >
            로그인
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
    </header>
  );
};

export default LoginHeader;
