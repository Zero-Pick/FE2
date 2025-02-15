import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Toast from "../../components/Toast";
import DeleteCheck from "../../components/Mypage/DeleteCheck";
import FilterButton from "../../components/FilterButton";
import RadioButton from "../../components/RadioButton";
import Sidebar from "../../components/Mypage/Sidebar" 
import api from "../../api/axiosInstance"; 
import { useNavigate } from "react-router-dom";


const ProfileEdit = () => {

  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [selectedInterests, setSelectedInterests] = useState([]); // 다중 선택 가능
  const [diabetes, setDiabetes] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false); // 탈퇴 확인 팝업 
  const [showToast, setShowToast] = useState(false)
  const navigate = useNavigate(); 

  // 마이페이지 정보 불러오기
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await api.get("/member/myPage/info");
        const { email, nickname, interest, diabetes } = response.data;

        setEmail(email);
        setNickname(nickname);
        setDiabetes(diabetes);

        // 관심 있는 제로 유형 처리
        if (interest === "BOTH") {
          setSelectedInterests(["ZEROSUGAR", "ZEROKCAL"]);
        } else if (interest) {
          setSelectedInterests([interest]);
        } else {
          setSelectedInterests([]);
        }
      } catch (error) {
        console.error("사용자 정보 불러오기 실패:", error);
      }
    };

    fetchUserInfo();
  }, []);

   // 관심 있는 제로 유형 선택/해제
  const handleInterestClick = (type) => {
    setSelectedInterests((prev) => {
      const isSelected = prev.includes(type);
      if (isSelected) {
        return prev.filter((item) => item !== type); // 선택 해제
      } else {
        return [...prev, type]; // 선택 추가
      }
    });
  };

  // 당뇨 여부 선택
  const handleDiabetesClick = (selected) => {
    setDiabetes(selected === "맞아요");
  };

  // 저장 버튼 클릭 시 PUT 요청
  const handleSave = async () => {
    let interest = null; // 기본값 null

    if (selectedInterests.length === 2) {
      interest = "BOTH";
    } else if (selectedInterests.length === 1) {
      interest = selectedInterests[0];
    }

    try {
      await api.put("/member/myPage/info", {
        email,
        nickname,
        interest,
        diabetes,
      });

       // 저장 성공 시 토스트 메시지
       setShowToast(true);
       setTimeout(() => setShowToast(false), 3000); // 3초 
     } catch (error) {
       console.error("정보 수정 실패:", error);
       alert("정보 수정 실패했습니다. 다시 시도해주세요.");
     }
  };

   // 회원 탈퇴 요청
   const handleDeleteAccount = async () => {
    try {
      await api.post("/member/delete"); // 회원 탈퇴 요청 api 수정 필요!!!!
      navigate("/myPage/delete"); // 탈퇴 완료 후 페이지 이동
    } catch (error) {
      console.error("회원 탈퇴 실패:", error);
      alert("탈퇴 요청이 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="w-full h-auto">
      <Header />
      {/* 메인 타이틀 */}
      <div className="max-w-[1098px] mx-auto mt-8 mb-8 ">
        <h1 className="text-3xl font-bold">마이페이지</h1>
      </div>

     {/* 컨테이너 */}
      <div className="flex mx-auto  max-w-[1098px]">
        {/* 왼쪽 사이드바 */}
        <Sidebar />

      {/* 오른쪽 */}
      <main className="w-[816px] h-[748px] mb-[222px] ml-[26px] py-8 mx-auto border-[1px] border-[#d9d9d9] ">        
        <div className="w-[712px] mx-auto">
        {/* 제목 */}
        <h1 className="text-2xl font-normal">회원정보 수정</h1>
        
        {/* 구분선 */}
        <hr className=" w-[712px] my-6 h-[2px] bg-buttongray"></hr>
 
        {/* 메인 컨텐츠 */}
        <div className="w-[400px] mx-auto py-4 ">
          {/* 이메일 */}
          <div className="mb-10">
            <label className="block text-sm font-bold mr-2 mb-3">이메일</label>
            <div className="text-base font-normal">{email || "loading..."}</div>
          </div>

          {/* 낙네임 */}
          <div className="">
          <label className="block text-sm font-bold mr-2 mb-3">닉네임</label>
          <input
              type="text"
              className="w-[400px] h-12 border-[1px] bg-white border-[#e4e4e4] rounded-10px px-4 text-base font-normal"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="닉네임을 입력하세요"
            />
          </div>

          {/* 구분선  */}
          <hr className="w-full my-10 h-[2px] bg-buttongray" />

            {/* 관심 있는 제로 유형 */}
            <div className="mb-10">
              <label className="block text-sm font-bold mb-3">관심 있는 제로 유형</label>
              <div className="flex space-x-4">
                <FilterButton
                  label={"제로슈거"}
                  onClick={() => handleInterestClick("ZEROSUGAR")}
                  isSelected={selectedInterests.includes("ZEROSUGAR")}
                />
                <FilterButton
                  label={"제로칼로리"}
                  onClick={() => handleInterestClick("ZEROKCAL")}
                  isSelected={selectedInterests.includes("ZEROKCAL")}
                />
              </div>
            </div>
            
          {/* 당뇨 관리 */}
          <div className="mb-10">
            <label className="block text-sm font-bold mb-3">당뇨 환자이거나 혈당 관리에 집중하고 있나요?</label>
            <div className="flex px-4">
              <RadioButton label={"맞아요"} onClick={handleDiabetesClick} isSelected={diabetes === true} />
              <RadioButton label={"아뇨, 딱히요"} onClick={handleDiabetesClick} isSelected={diabetes === false} />
            </div>
          </div>

          {/* 저장 버튼 */}
          <div className="mb-10">
            <button onClick={handleSave} className="w-[400px] h-[52px] bg-main01 text-white rounded-lg font-bold text-[18px]">
              저장
            </button>
          </div>

          {/* 회원 탈퇴 */}
          <div className="text-left">
            <button className="text-sm font-normal text-[#707070]" onClick={() => setShowDeletePopup(true)}>
              회원 탈퇴
            </button>
          </div>
        </div>

        </div>
      </main>
      </div>

      {/* 회원 탈퇴 팝업 */}
      {showDeletePopup && (
        <DeleteCheck onConfirm={handleDeleteAccount} onCancel={() => setShowDeletePopup(false)} />
      )}

      {/* 토스트 메시지 */}
      {showToast && <Toast message="변경 사항이 저장되었습니다." />}
    </div>
  );
};

export default ProfileEdit;
