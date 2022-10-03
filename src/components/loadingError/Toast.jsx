import React from "react";
import { ToastContainer } from "react-toastify";
const Toast = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        hideProgressBar={flase}
        newestOnTop={flase}
        closeOnClick
        rtl={flase}
      />
      <ToastContainer />
    </div>
  );
};

export default Toast;
