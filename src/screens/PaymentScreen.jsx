import React from "react";
import Header from "../components/Header";

const PaymentScreen = () => {
  return (
    <div>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form action="" className="Login2 col-md-8 col-lg-4 col-11">
          <h6>SELECT PAYMENT METHOD</h6>
          <div className="payment-container">
            <div className="radio-container">
              <input type="radio" className="form-check-input" />
              <label htmlFor="" className="form-check-label">
                Paypal Or Credit Card
              </label>
            </div>
          </div>
          <button type="submit">Continue</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentScreen;
