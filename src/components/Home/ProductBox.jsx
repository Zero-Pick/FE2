import React, { useState  } from "react";
import { useNavigate } from "react-router-dom";
import ZeroTag from "./ZeroTag";
import api from "../../api/axiosInstance";

const ProductBox = ({ product }) => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  // 최근 본 상품 저장
  const saveRecentProduct = async (productId) => {
    try {
      console.log(`📌 최근 본 상품 저장 : ${productId}`);
      const response = await api.post(`/recent/${productId}`);
      console.log(`✅ 최근 본 상품 저장 완료: ${productId}`, response.data);
    } catch (error) {
      console.error(`❌ 최근 본 상품 저장 실패 (productId: ${productId})`, error);
    }
  };


  //  상품 클릭 시 상세페이지 이동 + 최근 본 상품 저장
  const handleClick = async () => {
    try {
      console.log(` 상품 : ${product.id}`);
      // 최근 본 상품 저장
      await saveRecentProduct(product.id);

      // 상품 상세 페이지로 이동
      const response = await api.post(`/product/detail/${product.id}`);

      if (response.data && response.data.check) {
        // 상품 상세 정보가 포함된 상태로 페이지 이동
        navigate(`/product/detail/${product.id}`, { state: { product: response.data.information } });
      } else {
        console.error("잘못된 응답 형식:", response.data);
      }
    } catch (error) {
      console.error("상품 상세 정보를 가져오는 데 실패했습니다:", error);
    }
  };

  const handleIconClick = async (event) => {
    event.stopPropagation(); // 부모 div 클릭 방지
  
    try {
      if (isClicked) {
        // 찜 취소 
        const response = await api.delete(`/product/bookmark/${product.id}`);
        if (response.data && response.data.check) {
          console.log(`상품 ID ${product.id} - 찜 취소 완료`);
          setIsClicked(false);
        }
      } else {
        // 찜 추가
        const response = await api.post(`/product/bookmark/${product.id}`);
        if (response.data && response.data.check) {
          console.log(` 상품 ID ${product.id} - 찜 추가 완료`);
          setIsClicked(true);
        }
      }
    } catch (error) {
      console.error(` 상품 ID ${product.id} - 찜하기 API 요청 실패:`, error);
    }
  };
  
  if (!product) {
    return <div>상품 정보를 불러오는 중입니다...</div>;
  }

  return (
    <div className="max-w-64 cursor-pointer" onClick={handleClick}>
      <img
        src={product.imageUrl || "https://via.placeholder.com/150"}
        alt={product.productName || "상품명 없음"}
        className="w-64 h-64 rounded-[4px] object-cover mb-3"
      />

      {/* 상품 정보 */}
      <div>
        {/* 제로 태그 */}
        <div className="flex space-x-[6px] mb-3">
          {product.zeroSugar && <ZeroTag label="제로슈거" />}
          {product.zeroKcal && <ZeroTag label="제로칼로리" />}
        </div>

        {/* 상품명 / 찜 버튼 */}
        <div className="flex justify-between mb-3 items-center">
          <h2 className="text-base font-medium mb-3">{product.productName || "상품명 없음"}</h2>
          <div onClick={handleIconClick} className="cursor-pointer flex items-center">
            {isClicked ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M14.1665 2.5H5.83317C4.9165 2.5 4.17484 3.25 4.17484 4.16667L4.1665 17.5L9.99984 15L15.8332 17.5V4.16667C15.8332 3.25 15.0832 2.5 14.1665 2.5Z" fill="black" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M14.1665 2.5H5.83317C4.9165 2.5 4.17484 3.25 4.17484 4.16667L4.1665 17.5L9.99984 15L15.8332 17.5V4.16667C15.8332 3.25 15.0832 2.5 14.1665 2.5ZM14.1665 15L9.99984 13.1833L5.83317 15V4.16667H14.1665V15Z" fill="black" />
              </svg>
            )}
          </div>
        </div>

        {/* 별점 / 가격 */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8.00016 11.513L12.1202 13.9997L11.0268 9.31301L14.6668 6.15967L9.8735 5.75301L8.00016 1.33301L6.12683 5.75301L1.3335 6.15967L4.9735 9.31301L3.88016 13.9997L8.00016 11.513Z" fill="#EE4E34" />
            </svg>
            <div className="w-[65px] font-normal text-base">
              <span className="mr-1">{product.starRate || 0}</span>
              <span className="text-[#707070]">({product.reviewCount || 0})</span>
            </div>
          </div>
          <span>{product.price ? product.price.toLocaleString() : "가격 정보 없음"}원</span>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
