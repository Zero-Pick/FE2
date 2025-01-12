  import React from "react";

const ZeroTag = ({ text }) => {
  return (
    <span className="bg-txtgray text-white text-xs font-normal px-2 py-1 rounded-lg ">
      제로칼로리{text}
    </span>
  );
};

export default ZeroTag;
