import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="Announcement">
        <div className="container ">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center display-none">
              <p>+255 768 356 890</p>
              <p>info@zpinet.com</p>
            </div>
            <div className="col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center">
              <Link to="">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link to="">
                <i className="fab fa-youtube"></i>
              </Link>
              <Link to="">
                <i className="fab fa-pinterest-p"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* header */}
      <div className="header">
        <div className="container">
          {/* mobile header */}
          <div className="mobile-header">
            <div className="container">
              <div className="row">
                <div className="col-6 d-flex align-items-center">
                  <Link className="navbar-brand" to="/">
                    <img src="/images/logo.png" alt="logo" />
                  </Link>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-end Login-Register">
                  {}
                  <Link to="/cart" className="cart-mobile-icon">
                    <i className="fas fa-shopping-bag"></i>
                    <span className="bage">test{}</span>
                  </Link>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <form action="">
                    <input type="search" />
                    <button></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="pc-header">
            <div className="row">
              <div className="col-md-3 col-6 d-flex align-items-center">
                <Link className="navbar-brand" to="/">
                  <img src="/images/logo.png" alt="logo" />
                </Link>
              </div>
              <div className="col-md-6 col-8 d-flex align-items-center">
                <form action="" className="input-group">
                  <input
                    type="search"
                    className="form-control rounded search"
                  />
                  <button className="search-button">search</button>
                </form>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
                test{}
                <Link to="/cart">
                  <i className="fas fa-shopping-bag">
                    <span className="badge"></span>
                  </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
