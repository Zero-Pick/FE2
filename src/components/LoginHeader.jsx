import React, { useState } from 'react';
import logo1 from '../images/logo1.png';

const LoginHeader = () => {
  return (
    <header>
      <nav className="flex items-center justify-between p-4 px-20 py-5 shadow-md">
        <img
          id="logo"
          src={logo1}
          alt="zeropick logo"
          className="w-1/6 hover:cursor-pointer"
          onClick={() => (window.location.href = 'main')}
        />
        <div className="flex space-x-4 font-bold">
          <a id="login" href="login" className="p-4">
            로그인
          </a>
        </div>
      </nav>
    </header>
  );
};

export default LoginHeader;
