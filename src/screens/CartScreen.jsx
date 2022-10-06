import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const CartScreen = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="alert alert-info text-center mt-3">
          Your cart is empty
          <Link to={"/"} className="btn btn-success mx-5 px-5 py-5">
            SHOPPING NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
