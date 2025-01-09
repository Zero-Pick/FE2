import React from 'react';
import logo2 from '../../images/logo2.png';

const Sidebar = () => {
  return (
    <aside className="w-1/4 bg-white shadow-md rounded-lg p-6 self-start">
      <div className="flex items-center mb-6">
        <img src={logo2} className="h-6 w-6 mr-2" alt="Logo" />
        <p className="font-bold text-lg">
          닉네임여섯님, <span className="text-main01">건강</span>하세요!
        </p>
      </div>
      <ul className="space-y-4 text-gray-600">
        <li className="font-bold text-main01">
          찜한 제품 <span>13</span>
        </li>
        <li className="hover:text-black cursor-pointer">
          내가 쓴 리뷰 <span>2</span>
        </li>
        <li className="hover:text-black cursor-pointer">제품 등록 현황</li>
        <li className="hover:text-black cursor-pointer">
          정보 수정 요청 현황<span className="text-main01">•</span>
        </li>
        <li className="hover:text-black cursor-pointer">회원정보 수정</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
