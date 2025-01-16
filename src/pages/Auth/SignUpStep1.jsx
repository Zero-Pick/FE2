import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginHeader from '../../components/LoginHeader';

function SignUpStep1() {
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setNickname(e.target.value);
  };

  const handleNextClick = () => {
    if (nickname.trim() === "") {
      alert("닉네임을 입력해주세요.");
      return;
    }
    navigate("/signup/step2");
  };

  return (
    <div>
      <LoginHeader />
    <div className="flex mt-16 justify-center h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold">
          <span className="text-main01">제로픽</span>에 오신 것을 환영합니다!
        </h1>
        <p className="text-txtgray text-base font-normal mt-4">당신을 어떻게 불러드릴까요?</p>

        <div className="mt-12">
          {/* 닉네임 입력창 */}
          <div className="flex items-center justify-center">
            <input
              type="text"
              placeholder="닉네임을 입력하세요. (최대 6자)"
              value={nickname}
              onChange={handleInputChange}
              className="w-350px h-12 px-4 border border-gray-300 rounded-10px text-base"
            />
          </div>

          {/* 다음 버튼 */}
          <div className="flex items-center justify-center mt-4">
            <button 
            onClick={handleNextClick}
            className="w-[350px] h-[52px] bg-main01 text-white font-bold text-lg rounded-10px">
              다음
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SignUpStep1;
