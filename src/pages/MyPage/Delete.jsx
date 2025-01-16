import React from "react";

const Delete = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-100">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          회원 탈퇴가 완료되었습니다.
        </h1>
        <p className="text-gray-600 mb-8">
          회원님의 계정이 성공적으로 삭제되었습니다.
          <br />
          제로팩을 이용해 주셔서 감사합니다.
        </p>
        <button
          onClick={() => (window.location.href = "/main")}
          className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition"
        >
          홈으로 돌아가기
        </button>
      </div>
    </div>
  );
};

export default Delete;
