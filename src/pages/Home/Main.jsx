import React, { useState, useEffect } from "react";
import ProductBox from "../../components/Home/ProductBox";
import ProductReview from "../../components/Home/ProductReview";
import CategoryBar from "../../components/Home/CategoryBar";
import NewsCard from "../../components/Home/NewsCard";
import Header from '../../components/Header';
import FloatingBox from '../../components/FloatingBox';
import SearchBanner from "../../components/Home/SearchBanner";
import { useNavigate } from "react-router-dom";
import api from "../../api/axiosInstance"

const Main = () => {

  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("BEVERAGE_TEA"); // 카테고리 선택
  const [products, setProducts] = useState([]);
  const [topProducts, setTopProducts] = useState([]); // 주목하는 상품


  useEffect(() => {
    fetchProducts(selectedCategory); // 카테고리
    fetchTopProducts(); // 주목하는 상품
  }, [selectedCategory]);

  // 카테고리 상품품
  const fetchProducts = async (category) => {
    try {
      const response = await api.get("/home/category", {
        params: { category },
      });
      setProducts(response.data.information);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // 주목하는 상품
  const fetchTopProducts = async () => {
    try {
      const response = await api.get("/home");
      setTopProducts(response.data.topPopularityProducts);
    } catch (error) {
      console.error("Error fetching top products:", error);
    }
  };

  return (
    <div className="w-full h-auto">
      <Header />
        {/* 배너 */}
        <section className="mb-28">
          <SearchBanner/>
        </section>


        { /* 메인 콘텐츠 */}
        <main className="mx-auto w-[1100px]"> 
          {/* 여백 수정 필요 */}

          {/* 카테고리 바 및 ProductReview */}
          <section className="mb-28">
          <h2 className="text-3xl font-bold mb-8">카테고리별 BEST👑</h2>
          <div className="flex h-[517px] justify-between items-start relative">
          <CategoryBar 
            onSelectCategory={setSelectedCategory}
            selectedCategory={selectedCategory} />
            <div className="flex justify-between w-[820px] align-stretch flex-wrap">
              {products.slice(0, 3).map((product, index) => (
                <ProductReview key={product.id} product={product} rank={index + 1} />
              ))}

              {/* 더 많은상품보기 버튼 */}
              <button 
                onClick={() => navigate("/category")}
                className="text-[14px] text-txtgray font-normal px-6 py-1 border border-buttongray bg-white rounded-[4px] flex justify-center items-center absolute right-[0px] bottom-[-20px]"
              >
                더 많은 상품 보기
              </button>
            </div>
          </div>
        </section>

        {/* 배너 */}
        <section className="mb-28">
          <div className="w-full h-[180px] bg-buttongray flex items-center justify-center text-white font-bold text-xl">
            <span>배너영역</span>
          </div>
        </section> 

        {/* 많은 분들이 주목하는 섹션 */}
        <section className="mb-28">
          <h2 className="text-3xl font-bold mb-8">지금 많은 분들이 주목하는📢</h2>
          <div className="flex justify-between items-center">
          {topProducts.length > 0 
            ? topProducts.map((product) => (
                <ProductBox key={product.id} product={product} />
              ))
            : <p>상품 정보를 불러오는 중입니다...</p>}
          </div>
        </section>

        {/* 취향별 추천 섹션 */}
        <section className="mb-28">
          <h2 className="text-3xl font-bold mb-8">당신의 취향에 딱 맞는✅</h2>
          <div className="flex justify-between items-center">
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
          </div>
        </section>

        {/* 뉴스 카드 섹션 */}
        <section className="mb-28" > 
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-3xl font-bold">제로식품 이모저모 📰</h2>
            <span className="text-[#707070] text-base font-normal">2024.10.08 23:59 갱신</span>
          </div>
          <div className="grid grid-cols-2 gap-7">
          <NewsCard 
              image="https://product-image.kurly.com/product/image/c9dc2d27-f7ff-4167-b11e-3aac18b97528.jpg"
              title="기사 제목"
              content="기사 내용"
            />
            <NewsCard 
              image="https://product-image.kurly.com/product/image/c9dc2d27-f7ff-4167-b11e-3aac18b97528.jpg"
              title="기사 제목"
              content="기사 내용"
            />
            <NewsCard 
              image="https://product-image.kurly.com/product/image/c9dc2d27-f7ff-4167-b11e-3aac18b97528.jpg"
              title="기사 제목"
              content="기사 내용"
            />
            <NewsCard 
              image="https://product-image.kurly.com/product/image/c9dc2d27-f7ff-4167-b11e-3aac18b97528.jpg"
              title="기사 제목"
              content="기사 내용"
            />
          </div>
        </section>
      </main>
      {/* Floating Box 추가 */}
      <FloatingBox />
    </div>
  ); 
};

export default Main;
