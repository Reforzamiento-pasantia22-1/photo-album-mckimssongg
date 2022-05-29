const initialState = {
  user: {},
  error: null,
};

const reducer_login = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.data,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        user: {},
        error: true,
      };
    default:
      return state;
  }
};

export default reducer_login;
