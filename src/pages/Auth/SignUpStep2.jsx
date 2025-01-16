import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import LoginHeader from "../../components/LoginHeader";
import FilterButton from "../../components/FilterButton";
import RadioButton from "../../components/RadioButton";

function SignUpStep2() {
  const navigate = useNavigate();

  const [selectedInterest, setSelectedInterest] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("Selected Interest State:", selectedInterest);
    console.log("Is Correct State:", isCorrect);
  }, [selectedInterest, isCorrect]);

  const handleNextClick = (e) => {
    e.preventDefault();
    if (selectedInterest.length === 0 || isCorrect === null) {
      setError("모든 질문에 응답해주세요.");
      return;
    }
    setError("");
    navigate("/signup/fin");
  };

  const handleFilterClick = (label) => {
    if (selectedInterest.includes(label)) {
      setSelectedInterest(selectedInterest.filter((item) => item !== label));
    } else {
      setSelectedInterest([...selectedInterest, label]);
    }
    console.log("Filter clicked:", label);
  };

  const handleRadioClick = (label) => {
    setIsCorrect(label);
    console.log("Radio clicked:", label);
  };

  return (
    <div>
      <LoginHeader />
      <div className="flex mt-16 justify-center h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold">회원가입이 거의 완료되었어요!</h1>
          <p className="text-txtgray text-base font-normal mt-4">
            아래 몇 가지 정보만 더 기입하면 끝이에요.
          </p>

          <div className="mt-12">
            <form onSubmit={handleNextClick}>
              {/* Q1 */}
              <div>
                <h2 className="font-bold text-left text-sm mb-6">
                  어떤 제로에 관심이 있나요?
                </h2>
                <div className="flex space-x-4 mb-10">
                  <FilterButton
                    label="제로슈거"
                    onClick={handleFilterClick}
                    isSelected={selectedInterest.includes("제로슈거")}
                  />
                  <FilterButton
                    label="제로칼로리"
                    onClick={handleFilterClick}
                    isSelected={selectedInterest.includes("제로칼로리")}
                  />
                </div>
              </div>

              {/* Q2 */}
              <div>
                <h2 className="font-bold text-left text-sm mb-5">
                  당뇨 환자이거나 혈당 관리에 집중하고 있나요?
                </h2>
                <div className="ml-4 flex space-x-4 mb-[52px]">
                  <RadioButton
                    label={"맞아요"}
                    isSelected={isCorrect === "맞아요"}
                    onClick={handleRadioClick}
                  />
                  <RadioButton
                    label={"아뇨, 딱히요"}
                    isSelected={isCorrect === "아뇨, 딱히요"}
                    onClick={handleRadioClick}
                  />
                </div>
              </div>

              {/* 완료 버튼 */}
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="w-[350px] h-[52px] bg-main01 text-white font-bold text-lg rounded-10px"
                >
                  완료
                </button>
              </div>
              {error && (
                <p className="text-main01 text-sm mt-[6px] text-left">{error}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpStep2;
