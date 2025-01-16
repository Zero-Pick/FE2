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
import Reviews from './pages/MyPage/Reviews';
import Suggest from './pages/MyPage/Suggest';
import Report from './pages/MyPage/Report';

import ModifyInformation from './components/Detail/ModifyInformation';
import CreateReview from './components/Detail/CreateReview';

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

        {/* Home */}
        <Route path="/search" element={<Search />} />

        {/* Mypage */}
        <Route path="/mypage/favorites" element={<Favorites />} />
        <Route path="/mypage/reviews" element={<Reviews />} />
        <Route path="/mypage/suggest" element={<Suggest />} />
        <Route path="/mypage/report" element={<Report />} />

        {/* 모달 테스트용 */}
        <Route path="/modi" element={<ModifyInformation />} />
        <Route path="/revi" element={<CreateReview />} />
      </Routes>
    </Router>
  );
}

export default App;
