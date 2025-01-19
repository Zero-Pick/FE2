import React from 'react';
import Exclamation from '../images/Exclamation.svg';

const Popup = ({
  title,
  description,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-[400px] shadow-lg flex flex-col items-center">
        {/* Icon */}
        <div className="mb-4">
          <img src={Exclamation} alt="Exclamation Icon" className="w-8 h-8" />
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>

        {/* Description */}
        <p className="text-gray-600 text-center mb-6">{description}</p>

        {/* Buttons */}
        <div className="flex justify-between w-full">
          <button
            className="w-full py-2 border rounded-lg text-gray-600 font-semibold mr-2 hover:bg-gray-100"
            onClick={onCancel}
          >
            {cancelText}
          </button>
          <button
            className="w-full py-2 bg-[#EE4E34] text-white rounded-lg font-semibold hover:bg-[#d9442e]"
            onClick={onConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
