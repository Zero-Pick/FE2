import React from "react";
import { useNavigate } from "react-router-dom";
import LoginHeader from '../../components/LoginHeader';

function SignUpStep2() {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/main");
  };

  return (
    <div>
    <LoginHeader />
    <div className="flex mt-16 justify-center h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold ">
        회원가입이 완료되었습니다.
        </h1>
        <p className="text-txtgray text-base font-normal mt-4">지금 바로 
            <span className="text-main01" > 제로픽</span>에서 건강한 선택을 시작하세요!</p>

        <div className="mt-12">
          {/* 시작하기 버튼 */}
          <div className="flex items-center justify-center">
            <button 
            onClick={handleNextClick}
            className="w-[350px] h-[52px] font-bold text-lg bg-main01 text-white rounded-10px">
              시작하기
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SignUpStep2;
