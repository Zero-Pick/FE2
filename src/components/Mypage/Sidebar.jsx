import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo2 from '../../images/logo2.png';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="flex flex-col w-[256px] flex-start gap-[16px]">
      {/* 위에 있는 박스 */}
      <div className="flex h-[52px] flex-row justify-center items-center self-stretch bg-[#F1F1F1] rounded-[8px]">
        <img src={logo2} className="h-5 mr-2" alt="Logo" />
        <p className="font-semibold text-[15px]">
          닉네임여섯자님, <span className="text-main01">건강하세요!</span>
        </p>
      </div>

      {/* 아래에 있는 박스 */}
      <div className="flex h-[480px] py-[32px] justify-center items-start gap-[10px] self-stretch bg-[#F1F1F1] rounded-[8px]">
        {/* 아래 박스 내부 내용 */}
        <ul className="flex w-[191px] flex-col items-start gap-[24px] font-normal">
          <li
            className={`flex items-center cursor-pointer text-[15px] ${
              location.pathname === '/mypage/favorites'
                ? 'text-main01'
                : 'hover:text-black'
            }`}
            onClick={() => navigate('/mypage/favorites')}
          >
            찜한 제품 &nbsp;
            <span
              className={`${
                location.pathname === '/mypage/favorites' ? 'font-bold' : ''
              }`}
            >
              13
            </span>
          </li>
          <li
            className={`flex items-center cursor-pointer text-[15px] ${
              location.pathname === '/mypage/reviews'
                ? 'text-main01'
                : 'hover:text-black'
            }`}
            onClick={() => navigate('/mypage/reviews')}
          >
            내가 쓴 리뷰 &nbsp;
            <span
              className={`${
                location.pathname === '/mypage/reviews' ? 'font-bold' : ''
              }`}
            >
              2
            </span>
          </li>

          {/* 구분선 */}
          <hr className="w-full border-t border-[#d9d9d9]" />

          <li
            className={`cursor-pointer text-[15px] ${
              location.pathname === '/mypage/suggest'
                ? 'text-main01'
                : 'hover:text-black'
            }`}
            onClick={() => navigate('/mypage/suggest')}
          >
            제품 등록 현황
          </li>
          <li
            className={`flex items-center cursor-pointer text-[15px] ${
              location.pathname === '/mypage/report'
                ? 'text-main01'
                : 'hover:text-black'
            }`}
            onClick={() => navigate('/mypage/report')}
          >
            정보 수정 요청 현황
            <span
              className="ml-1 text-main01"
              style={{
                position: 'relative',
                top: '-8px',
              }}
            >
              •
            </span>
          </li>

          {/* 구분선 */}
          <hr className="w-full border-t border-[#d9d9d9]" />
          
          <li
            className={`cursor-pointer text-[15px] ${
              location.pathname === '/mypage/suggest'
                ? 'text-main01'
                : 'hover:text-black'
            }`}
            onClick={() => navigate('/mypage/edit')}
          >
            회원정보 수정
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
