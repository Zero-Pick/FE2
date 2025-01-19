import React from 'react';

const GoBackProduct = ({ label, onClick }) => {
  return (
    <div className="flex items-center mt-16 mb-[37px] cursor-pointer" onClick={onClick}>
     <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
    <path d="M11.4806 1.94965L9.7541 0.218262L0 10.0001L9.7541 19.782L11.4806 18.0506L3.45295 10.0001L11.4806 1.94965Z" fill="black"/>
    </svg>
      <span className="font-bold text-2xl ml-6">{label}</span>
    </div>
  );
};
  
export default GoBackProduct;
