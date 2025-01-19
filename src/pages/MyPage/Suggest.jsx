import React, { useState } from 'react';
import Sidebar from '../../components/Mypage/Sidebar';
import SearchHeader from '../../components/SearchHeader';
import ProductRegistrationBox from '../../components/Mypage/ProductRegistrationBox';
import RequestProductRegistration from '../../components/Mypage/RequestProductRegistration';

const Suggest = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const lists = [
    {
      date: '2024.10.30',
      brand: '(주)코카콜라',
      productName: '제로콜라',
      status: '대기 중',
    },
    {
      date: '2024.10.30',
      brand: '(주)코카콜라',
      productName: '제로사이다',
      status: '반려',
    },
    {
      date: '2024.10.30',
      brand: '(주)코카콜라',
      productName: '제로환타',
      status: '등록 완료',
    },
  ];

  const handleOpenModal = () => {
    setIsModalOpen(true); // 모달 열기
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 헤더 */}
      <SearchHeader />

      {/* 메인 타이틀 */}
      <div className="max-w-[1098px] mx-auto mt-8 mb-4">
        <h1 className="text-3xl font-bold">마이페이지</h1>
      </div>

      {/* 컨테이너 */}
      <div className="flex mx-auto max-w-[1098px]">
        {/* 왼쪽 사이드바 */}
        <Sidebar />

        {/* 오른쪽 제품 등록 현황 */}
        <section className="flex flex-col items-center w-[816px] border bg-white py-[32px] rounded-[4px] ml-6">
          <div className="flex flex-col w-[712px]">
            {/* 제품 등록 현황 */}
            <div className="flex flex-row justify-between">
              <h2 className="font-normal text-2xl">제품 등록 현황</h2>
              <button
                className="bg-main01 text-white w-[130px] h-[36px] py-[8px] px-[12px] rounded-[8px] text-[15px] font-normal"
                onClick={handleOpenModal}
              >
                제품 등록 요청
              </button>
            </div>

            {/* 구분선 */}
            <hr className="w-full border-t-2 border-[#d9d9d9] mt-6 mb-3" />

            {/* 제품 등록 리스트 */}
            {lists.length > 0 ? (
              <>
                {/* 타이틀 */}
                <div className="flex flex-row">
                  <div className="flex w-[125px] h-[48px] py-[12px] px-[16px] justify-center items-center bg-[#f1f1f1] text-[#707070] text-base font-normal">
                    등록 요청일
                  </div>
                  <div className="flex w-[470px] h-[48px] py-[12px] px-[16px] justify-center items-center bg-[#f1f1f1] text-[#707070] text-base font-normal">
                    내용
                  </div>
                  <div className="flex w-[114px] h-[48px] py-[12px] px-[16px] justify-center items-center bg-[#f1f1f1] text-[#707070] text-base font-normal">
                    처리 상태
                  </div>
                </div>

                {/* 리스트 */}
                <div>
                  {lists.map((item, index) => (
                    <ProductRegistrationBox
                      key={index}
                      date={item.date}
                      brand={item.brand}
                      productName={item.productName}
                      status={item.status}
                    />
                  ))}
                </div>
              </>
            ) : (
              <p className="text-center text-[#707070] text-base font-normal py-10">
                내역이 없습니다.
              </p>
            )}
          </div>
        </section>
      </div>

      {/* 모달 */}
      {isModalOpen && <RequestProductRegistration onClose={handleCloseModal} />}
    </div>
  );
};

export default Suggest;
