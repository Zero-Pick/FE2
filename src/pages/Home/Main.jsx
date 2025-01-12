import React from "react";
import FloatingBox from "../../components/FloatingBox";
import CategoryBar from "../../components/Home/CategoryBar";
import NewsCard from "../../components/Home/NewsCard";
import ProductBox from "../../components/Home/ProductBox";
import ProductBest from "../../components/Home/ProductBest";
import ProductReview from "../../components/Home/ProductReview";

function Main() {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-500">
      <FloatingBox/>
      <CategoryBar/>
      <NewsCard />
      <ProductBox />
      <ProductBest/>
      <ProductReview />
      
    </div>
  );
}

export default Main;
