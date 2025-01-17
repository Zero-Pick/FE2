import React from "react";
import PutButton from "../components/Detail/PutButton";
import DetailRound from "../components/Detail/DetailRound";
import CompareBox from "../components/Detail/CompareBox";
import ZeroTag from "../components/Home/ZeroTag";
import RateBox from "../components/Detail/RateBox";
import GoBackProduct from "../components/Detail/GoBackProduct";


const Test = () => { 
  return (
    <div className="min-h-screen bg-gray-500">
      <GoBackProduct label={"검색결과"}/>
      <div className="flex">
      <DetailRound label="당류" value={0} />
      <DetailRound label="칼로리" value={15} />
      </div>
      <div className="flex space-x-2">
    <ZeroTag label="제로슈거" />
    <ZeroTag label="제로칼로리" />
    </div>
    <div className="">
      <CompareBox />
      </div>
      <div className="">
      <RateBox rating="4.22" reviews="12"  />
      </div>
      <div>
        <PutButton label="찜"/>
        <PutButton label="비교함담기"/>
      </div>
    </div>
  );
};

export default Test;
