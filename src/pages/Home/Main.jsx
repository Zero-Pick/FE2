import React from "react";
import FloatingBox from "../../components/FloatingBox";
import CategoryBar from "../../components/Home/CategoryBar";

function Main() {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-500">
      <h1 className="text-2xl font-bold">여기는 메인입니다</h1>
      <FloatingBox/>
      <CategoryBar/>
    </div>
  );
}

export default Main;
