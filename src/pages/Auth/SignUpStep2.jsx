import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpStep2() {
  const navigate = useNavigate();

  const [selectedInterest, setSelectedInterest] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const handleNextClick = () => {
    navigate("/signup/fin"); //완료 hadlesubmit으로 변경
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">
          회원가입이 거의 완료되었어요!
        </h1>
        <p className="text-gray-600 text-base font-normal mt-4">아래 몇 가지 정보만 더 기입하면 끝이에요.</p>

        <div className="mt-12">
        <form onSubmit={handleNextClick} >
          {/* Q1 */}
          <div>
            <h2 className="font-bold text-sm mb-6">어떤 제로에 관심이 있나요?</h2>
            <div className="flex space-x-4 mb-10">
              <button
                type="button"
                className={`py-2 px-4 rounded-md border ${
                  selectedInterest === '제로슈거'
                    ? 'bg-main text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
                onClick={() => setSelectedInterest('제로슈거')}
              >
                제로슈거
              </button>
              <button
                type="button"
                className={`py-2 px-4 rounded-md border ${
                  selectedInterest === '제로칼로리'
                    ? 'bg-main text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
                onClick={() => setSelectedInterest('제로칼로리')}
              >
                제로칼로리
              </button>
            </div>
          </div>

          {/* Q2 */}
          <div>
            <h2 className="font-bold text-sm mb-6">
              당뇨 환자이거나 혈당 관리에 집중하고 있나요?
            </h2>
            <div className="flex space-x-4 mb-10">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="isCorrect"
                  value="yes"
                  className="mr-2"
                  checked={isCorrect === true}
                  onChange={() => setIsCorrect(true)}
                />
                맞아요
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="isCorrect"
                  value="no"
                  className="mr-2"
                  checked={isCorrect === false}
                  onChange={() => setIsCorrect(false)}
                />
                아니요, 딱히요
              </label>
            </div>
          </div>



          {/* 완료료 버튼 */}
          <div className="flex items-center justify-center mt-4">
            <button 
            onClick={handleNextClick}
            className="w-350px h-52px bg-main01 text-white font-bold text-lg rounded-10px">
              완료
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpStep2;
