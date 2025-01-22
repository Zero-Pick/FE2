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
      <Toast/>
      <Sidebar/> 
      <DeleteCheck />
      {/* mt 임의로 넣음 수정필요 */}
      <main className="w-[816px] h-[548px] py-8 mx-auto border-[1px] border-[#d9d9d9] mt-20">        
        <div className="w-[712px] mx-auto">
        {/* 제목 */}
        <h1 className="text-2xl font-normal mb-6">회원정보 수정</h1>
        
        {/* 구분선 */}
        <hr className=" w-[712px] mb-6 h-[2px] bg-buttongray"></hr>
 
        {/* 메인 컨텐츠 */}
        <div className="py-4 w-[400px] mx-auto">
          이메일
          ab******@naver.com

          닉네임

          {/* 구분선 */}
        <hr className=" w-[400px] mb-6 h-[2px] bg-buttongray"></hr>

        관심 있는 제로 유형

        <FilterButton label="제로슈거"/>
        <FilterButton label="제로칼로리"/>

        당뇨 환자이거나 혈당 관리에 집중하고 있나요?
        <RadioButton label={"맞아요"}/>
        <RadioButton label={"아뇨, 딱히요"}/>

        <button> 저장 </button>
        
        회원탈퇴
 
        </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileEdit;
