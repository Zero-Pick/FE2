import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';

// import 페이지
import SignUpStep1 from './pages/Auth/SignUpStep1';
import SignUpStep2 from './pages/Auth/SignUpStep2';
import SignUpFin from './pages/Auth/SignUpFin';
import Search from './pages/Home/Search';
import Login from './pages/Auth/Login';
import Favorites from './pages/MyPage/Favorites';
import Main from './pages/Home/Main';
import Category from './pages/Home/Category';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/" />} />
        <Route path="/main" element={<Main />} />
        <Route path="/category" element={<Category />} />

        {/* 회원가입 단계 (path 수정 필요) */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup/step1" element={<SignUpStep1 />} />
        <Route path="/signup/step2" element={<SignUpStep2 />} />
        <Route path="/signup/fin" element={<SignUpFin />} />

        <Route path="/search" element={<Search />} />
        <Route path="/mypage/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
