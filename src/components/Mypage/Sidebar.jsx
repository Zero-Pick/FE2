import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo2 from '../../images/logo2.png';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="flex flex-col w-[270px] flex-start gap-[16px]">
      {/* 위에 있는 박스 */}
      <div className="flex h-[52px] flex-row justify-between items-center self-stretch bg-[#F1F1F1] rounded-[8px] p-2">
        <img src={logo2} className="h-6" alt="Logo" />
        <p className="font-bold text-lg">
          닉네임여섯님, <span className="text-main01">건강</span>하세요!
        </p>
      </div>

      {/* 아래에 있는 박스 */}
      <div className="flex h-[480px] p-[32px_0px] justify-center items-start gap-[10px] self-stretch bg-[#F1F1F1] rounded-[8px]">
        {/* 아래 박스 내부 내용 */}
        <ul className="flex w-[191px] flex-col items-start gap-[24px] text-gray-600">
          <li
            className={`flex items-center cursor-pointer ${
              location.pathname === '/mypage/favorites'
                ? 'text-main01 font-bold'
                : 'hover:text-black'
            }`}
            onClick={() => navigate('/mypage/favorites')}
          >
            찜한 제품 13
          </li>
          <li
            className={`flex items-center cursor-pointer ${
              location.pathname === '/mypage/reviews'
                ? 'text-main01 font-bold'
                : 'hover:text-black'
            }`}
            onClick={() => navigate('/mypage/reviews')}
          >
            내가 쓴 리뷰 2
          </li>
          <li
            className={`cursor-pointer ${
              location.pathname === '/mypage/suggest'
                ? 'text-main01 font-bold'
                : 'hover:text-black'
            }`}
            onClick={() => navigate('/mypage/suggest')}
          >
            제품 등록 현황
          </li>
          <li
            className={`flex items-center cursor-pointer ${
              location.pathname === '/mypage/report'
                ? 'text-main01 font-bold'
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
          <li className="hover:text-black cursor-pointer">회원정보 수정</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
