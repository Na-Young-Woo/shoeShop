import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Register = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <div className="container d-flex flex-column justify-content-center align-item-center login-center">
        <form action="" className="Login col-md-4 col-lg-8 col-11">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Password" />
          <button>submit</button>
          <p>
            <Link>
              I Have Account <strong>Login</strong>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
