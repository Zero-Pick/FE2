import React from 'react';
import Sidebar from '../../components/Mypage/Sidebar';
import SearchHeader from '../../components/SearchHeader';

const Suggest = () => {
    return (
      <div>
        {/* 헤더 */}
            <SearchHeader />
            
            <Sidebar />
      </div>
    );
};

export default Suggest;
