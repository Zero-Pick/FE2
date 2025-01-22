import React, { useState } from "react";
import Header from "../../components/Header";
import Toast from "../../components/Toast";
import DeleteCheck from "../../components/Mypage/DeleteCheck";
import FilterButton from "../../components/FilterButton";
import RadioButton from "../../components/RadioButton";
import Sidebar from "../../components/Mypage/Sidebar" 


const ProfileEdit = () => {

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
          <div className="mb-10 ">
            <label className="block text-sm font-bold mr-2 mb-3">이메일</label>
            <div className="text-base font-normal">ab******@naver.com</div>
          </div>

          {/* 낙네임 */}
          <div className="">
          <label className="block text-sm font-bold mr-2 mb-3">닉네임</label>
            <input
              type="text"
              className="w-[400px] h-12 border-[1px] bg-white border-[#e4e4e4] rounded-10px px-4 text-base font-normal"
              placeholder="엎질러진엎질"
            />
          </div>

          {/* 구분선  */}
          <hr className="w-full my-10 h-[2px] bg-buttongray" />

          {/* 관심있는 제로 유형 */}
          <div className="mb-10  ">
            <label className="block text-sm font-bold mb-3">관심 있는 제로 유형</label>
            <div className="flex space-x-4">
              <FilterButton label={"제로슈거"}/>
              <FilterButton label={"제로칼로리"}/>
             
            </div>
          </div>

          {/*당뇨 관리 */}
          <div className="mb-10  ">
            <label className="block text-sm font-bold mb-3">당뇨 환자이거나 혈당 관리에 집중하고 있나요?</label>
            <div className="flex px-4">
              <RadioButton label={"맞아요"}/>
              <RadioButton label={"아뇨, 딱히요"}/>
            </div>
          </div>

          {/* 저장 버튼*/}
          <div className="mb-10">
            <button className="w-[400px] h-[52px] bg-main01 text-white rounded-lg font-bold text-[18px]">저장</button>
          </div>

          {/* 회원 탈퇴 */}
          <div className="text-left">
            <button className="text-sm font-normal text-[#707070]">회원 탈퇴</button>
          </div>
        </div>

        </div>
      </main>
      </div>
    </div>
  );
};

export default ProfileEdit;
