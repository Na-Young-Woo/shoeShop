import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function PrivateRoute() {
  return <Navigate to="/login" />;
}
export default PrivateRoute;
