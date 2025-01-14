import React, { useState } from "react";
import Header from "../../components/Header";

const ProfileEdit = () => {

  return (
    <div className="w-full h-auto">
      <Header />
      {/* mt 임의로 넣음 수정필요 */}
      <main className="w-[816px] h-[548px] py-8 mx-auto border-[1px] border-[#d9d9d9] mt-20">        
        <div className="w-[712px] mx-auto">
        {/* 제목 */}
        <h1 className="text-2xl font-normal mb-6">회원정보 수정</h1>
        
        {/* 구분선 */}
        <hr className=" w-[712px] mb-6 h-[2px] bg-buttongray"></hr>

        {/* 메인 컨텐츠 */}
        <div className="py-4 w-[400px] mx-auto">
          <p className="mb-10 text-base font-normal text-center">
            회원님의 개인정보 보호를 위해
            <br />
            비밀번호 인증 후 정보 열람 및 변경이 가능합니다.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-10">
              <label className="flex text-sm font-bold mb-2">
                이메일
                <p className="pl-3 font-normal text-[#707070] text-sm">
                  ab******@naver.com
                </p>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="이메일을 입력하세요"
                  value={email}
                  onChange={handleEmailChange}
                  className={`w-full border-[1px] outline-none text-[#707070] font-normal text-base rounded-[10px] px-4 h-12 ${
                    emailError
                      ? "border-main01 border-[2px] bg-[#F5F5F5]"
                      : "border-[#e4e4e4] bg-white"
                  }`}
                />
                {emailError && (
                  <p className="text-sm text-main01 font-normal mt-[6px] absolute top-12">
                    올바른 이메일 형식이 아닙니다.
                  </p>
                )}
              </div>
            </div>
            <button
              type="submit"
              className={`w-full font-bold text-lg h-[52px] rounded-[10px] ${
                email && !emailError
                  ? "bg-main01  text-white" // 이메일 유효
                  : "bg-buttongray text-[#707070]" // 기본 상태
              }`}
              disabled={!email || emailError} // 이메일이 없거나 에러가 있으면 비활성화
            >
              확인
            </button>
          </form>
        </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileEdit;
