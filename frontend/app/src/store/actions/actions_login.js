import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_REQUEST } from "../constants";

const loginSuccess = (data) => {
  localStorage.setItem(
    "dataSesion",
    JSON.stringify({
      auth: data.auth,
      token: data.token,
      user: {
        id: data.user.id,
        username: data.user.username,
        email: data.user.email,
      },
    })
  );
  return {
    type: LOGIN_SUCCESS,
    data,
  };
};

const loginFailure = (data) => {
  delete localStorage.dataSesion;
  return {
    type: LOGIN_FAILURE,
    data,
  };
};

export { loginSuccess, loginFailure };
