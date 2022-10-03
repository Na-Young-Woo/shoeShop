import React from "react";
import Toast from "../loadingError/Toast";

const ProfileTabs = () => {
  return (
    <div>
      <Toast />
      <form className="row form-container">
        <div className="col-md-6">
          <div className="form">
            <label htmlFor="" className="account-fn">
              Username
            </label>
            <input type="text" className="form-control" required />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form">
            <label htmlFor="" className="accont-email">
              E-mail Adress
            </label>
            <input type="email" className="form-control" required />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileTabs;
