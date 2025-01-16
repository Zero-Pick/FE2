import React from 'react';
import LoginHeader from '../../components/LoginHeader';
import logo1 from '../../images/logo1.png';

const LoginPage = () => {
  return (
    <div>
      {/* 헤더 */}
      <LoginHeader />

      {/* 메인 컨텐츠 */}
      <div className="flex flex-col justify-center items-center text-center w-2/3 mx-auto h-screen mt-[-100px]">
        <h1 className="font-extrabold text-2xl mb-3">
          건강한&nbsp;
          <span className="text-main01">제로</span>를 위한 시작,
        </h1>
        <img src={logo1} className="h-10" alt="Logo" />

        <div className="space-y-3 w-80 mt-12">
          {/* 카카오 로그인 */}
          <button className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg flex items-center justify-center">
            카카오 로그인
          </button>

          {/* 구글 로그인 */}
          <button className="w-full bg-gray-100 text-gray-600 font-bold py-3 rounded-lg flex items-center justify-center border border-gray-300">
            구글 로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
