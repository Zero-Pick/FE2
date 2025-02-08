import axios from "axios";

const api = axios.create({
  baseURL: "http://15.164.252.103:8080", // 서버 주소
  timeout: 10000, // 요청 제한 시간 (ms)
});

export default api;
