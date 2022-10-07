import React from "react";
import Header from "../components/Header";

const ShippingScreen = () => {
  return (
    <div>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form action="" className="Login col-md-8 col-lg-4 col-11">
          <h6>DELEVERY ADRESS</h6>
          <input type="text" placeholder="Enter adress" required />
          <button type="submit">Continue</button>
        </form>
      </div>
    </div>
  );
};

export default ShippingScreen;
