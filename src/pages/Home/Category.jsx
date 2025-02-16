import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductBox from "../../components/Home/ProductBox";
import SearchHeader from '../../components/SearchHeader';
// import FilterButton from "../../components/FilterButton";
// import FilterDropButton from "../../components/Home/FilterDropButton";
import GoBack from "../../components/Home/GoBack";
import SearchFilter from "../../components/Home/SearchFilter"
import HotReview from "../../components/Home/HotReview";
import { categoryMap } from "../../components/Home/CategoryBar"; //카테고리명 가져오기
import api from "../../api/axiosInstance";

const Category = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category") || "BEVERAGE_TEA"; // 기본값

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 

    // 해당 카테고리 상품 불러오기
    useEffect(() => {
      fetchCategoryProducts(selectedCategory);
    }, [selectedCategory]);
  
    const fetchCategoryProducts = async (category) => {
      try {
        setLoading(true);
        const response = await api.get("/product/search", {
          params: { category, sort: "POPULARITY" },
        });
  
        if (response.data && response.data.information && response.data.information.content) {
          setProducts(response.data.information.content);
        } else {
          console.error("예상된 데이터 구조가 아닙니다:", response.data);
          setProducts([]);
        }
      } catch (error) {
        console.error("Error fetching category products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    
  return (
    <div className="w-full h-auto">
    <SearchHeader />
      <main className="mx-auto w-[1100px]">

        {/* 뒤로가기 버튼 */}
        <GoBack label={categoryMap[selectedCategory] || "카테고리"} />

        {/* 배너 */}
        <section className="mb-16">
          <div className="w-full h-[180px] bg-buttongray flex items-center justify-center text-white font-bold text-xl">
            <span>배너영역</span>
          </div>
        </section>

        {/* HOT 리뷰 섹션 */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 flex justify-center">방금 올라온 HOT 리뷰 🔥</h2>
          <div className="flex justify-between items-center">
          <HotReview/>
          <HotReview/>
          <HotReview/>
          <HotReview/>
          <HotReview/>
          </div>
        </section>

        {/* 구분선 */}
        <hr className="mb-16 border-t  border-gray-300" />
        {/* 전 상품 섹션 */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold flex justify-center mb-8">전 상품</h2>
          {/* 필터 메뉴 */}
          <SearchFilter />
        {/* 구분선 */}
          <hr className="mb-6 mt-6 border-t border-gray-300" />

           {/* 정렬 메뉴 */}
           <div className="flex items-center justify-between mb-6">
            <div className="flex text-xl font-bold">
              <h2 className="ml-4">총 <span className="text-main01 ">{products.length}</span>개</h2> 
            </div>
            <div className="flex space-x-8 font-normal text-base">
              <button >인기순</button>
              <button  >신상품순</button>
              <button >리뷰 많은 순</button>
              <button className="pr-4">별점 높은 순</button>  
            </div>
          </div>
 
        {/* 구분선 */}
        <hr className="mb-8 border-t border-gray-300" />

        {/* 상품 리스트 */}
        {loading ? (
            <p className="text-center text-gray-500">상품 정보를 불러오는 중입니다...</p>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-4 gap-x-6 gap-y-16">
              {products.map((product) => (
                <ProductBox key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">해당 카테고리에 상품이 없습니다.</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default Category;
