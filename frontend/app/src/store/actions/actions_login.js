import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_REQUEST } from "../constants";

const loginSuccess = (data) => {
  localStorage.setItem("dataSesion", JSON.stringify(data));
  return {
    type: LOGIN_SUCCESS,
    data,
  };
};

const loginFailure = (data) => {
  localStorage.setItem("dataSesion", JSON.stringify(data));
  return {
    type: LOGIN_FAILURE,
    data,
  };
};

export { loginSuccess, loginFailure,  };
