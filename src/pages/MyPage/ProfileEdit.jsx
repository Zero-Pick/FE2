import React, { useState } from "react";
import Header from "../../components/Header";
import Toast from "../../components/Toast";

const ProfileEdit = () => {

  return (
    <div className="w-full h-auto">
      <Header />
      <Toast/>
      {/* mt 임의로 넣음 수정필요 */}
      <main className="w-[816px] h-[548px] py-8 mx-auto border-[1px] border-[#d9d9d9] mt-20">        
        <div className="w-[712px] mx-auto">
        {/* 제목 */}
        <h1 className="text-2xl font-normal mb-6">회원정보 수정</h1>
        
        {/* 구분선 */}
        <hr className=" w-[712px] mb-6 h-[2px] bg-buttongray"></hr>

        {/* 메인 컨텐츠 */}
        <div className="py-4 w-[400px] mx-auto">

        </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileEdit;
