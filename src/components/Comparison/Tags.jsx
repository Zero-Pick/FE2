import React from "react";

const Tags = ({ tags }) => {
  return (
    <div className="flex flex-col gap-2">
      {tags.map((tag, index) => (
        <span 
          key={index} 
          className="w-[151px] min-h-8 flex items-center justify-center bg-[#f1f1f1] px-4 py-0 rounded-lg"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;
