import './App.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// import 페이지
import SignUpStep1 from "./pages/Auth/SignUpStep1";
import SignUpStep2 from "./pages/Auth/SignUpStep2";
import SignUpFin from "./pages/Auth/SignUpFin";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/" />} />
        
        {/* 회원가입 단계 (path 수정 필요) */}
        <Route path="/signup/step1" element={<SignUpStep1 />} />
        <Route path="/signup/step2" element={<SignUpStep2 />} />
        <Route path="/signup/fin" element={<SignUpFin />} />
      </Routes>
    </Router>
  );
}

export default App;
