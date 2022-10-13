// https://velog.io/@anotherhoon/createStore%EB%A5%BC-configureStore%EB%A1%9C-%EB%B0%94%EA%BE%B8%EA%B8%B0
//
import { combineReducers, createStore } from "redux";

const reducer = combineReducers;
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : {};

const initialState = {
  cart: { userLogin: { userInfo: userInfoFromLocalStorage } },
};

const store = createStore();

export default store;
