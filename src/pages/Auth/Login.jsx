import React from 'react';
import LoginHeader from '../../components/LoginHeader';
import logo1 from '../../images/logo1.png';
import kakao from '../../images/kakao 1.png';
import google from '../../images/g-logo 1.png';

const LoginPage = () => {
  return (
    <div>
      {/* 헤더 */}
      <LoginHeader />

      {/* 메인 컨텐츠 */}
      <div className="flex flex-col justify-center items-center text-center w-2/3 mx-auto h-screen mt-[-100px]">
        <h1 className="font-extrabold text-xl mb-2">
          건강한&nbsp;
          <span className="text-main01">제로</span>를 위한 시작,
        </h1>
        <img src={logo1} className="w-[214px]" alt="Logo" />

        <div className="space-y-4 w-[350px] mt-12">
          {/* 카카오 로그인 */}
          <button className="w-full h-[52px] bg-[#fee500] text-black font-normal rounded-[12px] flex items-center pl-4 pr-6 relative">
            <img src={kakao} alt="Kakao Logo" className="absolute left-4 h-6" />
            <span className="flex-1 text-center">카카오 로그인</span>
          </button>

          {/* 구글 로그인 */}
          <button className="w-full h-[52px] bg-white text-black font-normal rounded-[12px] flex items-center pl-4 pr-6 relative border border-[#d9d9d9]">
            <img
              src={google}
              alt="Google Logo"
              className="absolute left-4 h-6"
            />
            <span className="flex-1 text-center">구글 로그인</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
