const initialState = {
  isFetching: false,
  isAuthenticated: false,
  user: {},
  error: null,
};

const reducer_login = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        user: action.data,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        user: {},
        error: true,
      };
    default:
      return state;
  }
};

export default reducer_login;
