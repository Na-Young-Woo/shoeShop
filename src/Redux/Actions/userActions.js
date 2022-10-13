import { USER_LOGOUT } from "../Constants/userConstants";
export const login = () => {
  return "test";
};
export const logout = (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
  return "test";
};
