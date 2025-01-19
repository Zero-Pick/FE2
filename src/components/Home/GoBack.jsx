import React from 'react';

const GoBack = ({ label, onClick }) => {
  return (
    <div className="flex items-center mt-16 mb-8 cursor-pointer" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="32"
        viewBox="0 0 19 32"
        fill="none"
        className="flex-shrink-0"
      >
        <path
          d="M18.832 2.832L16 0L0 16L16 32L18.832 29.168L5.664 16L18.832 2.832Z"
          fill="black"
        />
      </svg>
      <span className="font-bold text-4xl ml-6">{label}</span>
    </div>
  );
};

export default GoBack;
