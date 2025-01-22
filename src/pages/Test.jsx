import React from "react";
import AboutZero from "../components/Detail/AboutZero";
import AboutReview from "../components/Detail/AboutReview";

import SumUpZero from "../components/Detail/SumUpZero";
import SumUpReview from "../components/Detail/SumUpReview";
const Test = () => { 
  return (
    <div className=" bg-gray-500">
      <SumUpReview overallRating={"4.22"} reviewCount={"4"}/>
      <SumUpZero sugarContent={"“찐” 제로슈거 인증!"} calorieContent={"제로칼로리 표시 기준치 이하예요!"}/>
    </div>
  );
};

export default Test;
