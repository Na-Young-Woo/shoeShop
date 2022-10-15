// https://velog.io/@anotherhoon/createStore%EB%A5%BC-configureStore%EB%A1%9C-%EB%B0%94%EA%BE%B8%EA%B8%B0
//
// import { combineReducers, createStore } from "redux";

import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const reducers = {
  userLogin: "",
};
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : {};

const initialState = {
  cart: { userLogin: { userInfo: userInfoFromLocalStorage } },
};
// const middleware = [thunk];
// 유효한 리듀서 넣어라..
const store = configureStore({ reducer: {} });

export default store;
