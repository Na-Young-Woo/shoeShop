import "./App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import ProfileScreen from "./screens/ProfileScreen";
import Register from "./screens/Register";
import NotFound from "./screens/NotFound";
import CartScreen from "./screens/CartScreen";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} exact />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProfileScreen />} />

        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        {/* id 추가 예정 */}
        <Route path="/cart" element={<CartScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
