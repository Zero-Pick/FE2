import React from "react";
import Header from "../../components/Header";

const Delete = () => {
  return (
    <div className="w-full h-auto bg-white">
      <Header />   
      <div className="text-center mt-20">
        <h1 className="text-[32px] font-bold mb-8">
          회원 탈퇴가 완료되었습니다.
        </h1>
        <p className="text-[#707070] mb-8">
          회원님의 계정이 성공적으로 삭제되었습니다.
          <br />
          제로픽을 이용해 주셔서 감사합니다.
        </p>
        <button
          onClick={() => (window.location.href = "/main")}
          className="bg-[#707070] h-12 text-white px-5 text-base rounded-10px"
        >
          홈으로 돌아가기
        </button>
      </div>
      </div> 
  );
};

export default Delete;
