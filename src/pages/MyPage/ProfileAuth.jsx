import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Sidebar from "../../components/Mypage/Sidebar"
import api from "../../api/axiosInstance";

const ProfileAuth = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [maskedEmail, setMaskedEmail] = useState(""); // 마스킹된 이메일 
  const [emailMatchError, setEmailMatchError] = useState(false); // 이메일 불일치 
  const navigate = useNavigate(); 

   // 마스킹된 이메일 가져오기
   useEffect(() => {
    const fetchMaskedEmail = async () => {
      try {
        const response = await api.get("/member/getEmail");
        setMaskedEmail(response.data.maskEmail);
      } catch (error) {
        console.error("마스킹된 이메일 불러오기 실패:", error);
      }
    };

    fetchMaskedEmail();
  }, []);

    // 이메일 입력 처리
    const handleEmailChange = (e) => {
      const value = e.target.value;
      setEmail(value);

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailRegex.test(value) && value !== ""); // 이메일 형식이 아니고 값이 비어있지 않을 때만 에러 표시
    setEmailMatchError(false); 
  };

    // 이메일 확인 요청
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!emailError) {
        try {
          const response = await api.post("/member/checkEmail", { email });
          
          if (response.data) {
            // 이메일이 일치
            navigate("/myPage/edit");
          } else {
            // 이메일이 불일치
            setEmailMatchError(true);
          }
        } catch (error) {
          console.error("이메일 확인 요청 실패:", error);
          setEmailMatchError(true);
        }
      }
    };

  return (
    <div className="w-full h-auto">
      <Header />
      {/* 메인 타이틀 */}
      <div className="max-w-[1098px] mx-auto mt-8 mb-8">
        <h1 className="text-3xl font-bold">마이페이지</h1>
      </div>

      {/* 컨테이너 */}
      <div className="flex mx-auto  max-w-[1098px]">
        {/* 왼쪽 사이드바 */}
        <Sidebar />

      {/* 오른쪽 */}
      <main className="w-[816px] h-[548px] py-8 mx-auto border-[1px] ml-[26px] border-[#d9d9d9] ">        
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
                  {maskedEmail || "loading..."}
                </p>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="이메일을 입력하세요"
                  value={email}
                  onChange={handleEmailChange}
                  className={`w-full border-[1px] outline-none text-[#707070] font-normal text-base rounded-[10px] px-4 h-12 ${
                    emailError || emailMatchError ? "border-main01 border-[2px] bg-[#F5F5F5]" : "border-[#e4e4e4] bg-white"
                  }`}
                />
                {emailError && (
                  <p className="text-sm text-main01 font-normal mt-[6px] absolute top-12">
                    올바른 이메일 형식이 아닙니다.
                  </p>
                )}
                {emailMatchError && (
                  <p className="text-sm text-main01 font-normal mt-[6px] absolute top-12">
                    입력하신 정보가 맞지 않습니다.
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
    </div>
  );
};

export default ProfileAuth;
