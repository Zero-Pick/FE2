import React, { useEffect, useState } from "react";
import api from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";

const FloatingBox = () => {
  const [recentProducts, setRecentProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRecentProducts();
  }, []);

  // 최근 본 상품 목록 불러오기
  const fetchRecentProducts = async () => {
    try {
      console.log(" 최근 본 상품 목록 불러오기 요청");
      const response = await api.get("/recent", {withCredentials : true});
      if (response.data && response.data.information) {
        console.log("✅  최근 본 상품 불러오기 완료:", response.data.information);
        setRecentProducts(response.data.information.slice(0, 3)); // 최대 3개까지 저장
      } else {
        console.warn("⚠️ 응답 데이터 형식이 예상과 다릅니다:", response.data);
      }
    } catch (error) {
      console.error("❌최근 본 상품 불러오기 실패:", error);
    }
  };

   // 화면 맨 위로 스크롤
   const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-10 right-10 flex flex-col items-center">
      {recentProducts.length > 0 && (
        <div className="bg-white w-full p-4 rounded-[4px] shadow-lg">
          <h3 className="text-base font-medium mb-[18px] flex flex-col items-center">
            최근 본 상품
          </h3>
          <div className="space-y-4">
            {recentProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => navigate(`/product/detail/${product.id}`)} // 상품 클릭 시 이동
                className="bg-buttongray w-28 h-28 p-2 cursor-pointer flex flex-col rounded-[4px] justify-end items-start relative group"
              >
                <img
                  src={product.imageUrl }
                  alt={product.productName || "상품명 없음"}
                  className="w-full h-full object-cover rounded-[4px]"
                />
                <p className="text-[10px] text-white rounded absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {product.productName}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TOP 버튼은 항상 표시 */}
      <button
        onClick={scrollToTop}
        className="mt-6 w-16 h-16 bg-white border-[1px] shadow-lg border-buttongray text-black font-medium text-sm rounded-full"
      >
        TOP
      </button>
    </div>
  );
};

export default FloatingBox;
