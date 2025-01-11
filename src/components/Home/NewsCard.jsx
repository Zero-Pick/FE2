import React from "react";

const NewsCard = ({ image, title, content }) => {
  return (
    <div className="flex items-start bg-white w-[540px] h-[178px] py-[26px] rounded-[4px] border border-[#D9D9D9] mx-auto">
      {/* 이미지 */}
      <img
        src={image}
        alt={title}
        className="w-[120px] h-[120px] object-cover rounded-[4px] mr-6 ml-[34px] bg-buttongray"
      />

      {/* 텍스트 */}
      <div className="flex flex-col w-[327px]">
        {/* 제목 */}
        <h3 className="text-txtgray  font-bold text-base mb-2">기사 제목 기사 제목 {title}</h3>

        {/* 내용 */}
        <p className="text-xs font-normal w-full h-[88px] overflow-hidden text-ellipsis">기사 내용 기사 내용 {content}</p>
      </div>
    </div>
  );
};

export default NewsCard;
