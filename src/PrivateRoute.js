import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Login from "./screens/Login";
// React 프라이빗 라우터
// https://www.youtube.com/watch?v=0x8Dap2EIVE

const userAuth = () => {
  // 일단 여기 하드코딩, 이후 콘텍스트 아님 서버에서 받아옴
  const user = { Logged: false };
  return user && user.Logged;
};
function PrivateRoute({ component: Component, ...rest }) {
  const isAuth = userAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}
export default PrivateRoute;
