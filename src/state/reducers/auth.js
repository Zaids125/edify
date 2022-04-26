const initialState = {
  token: localStorage.getItem("token"),
  user: JSON.parse(localStorage.getItem("user")),
  userId: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN":
    case "SIGNUP_SET_PASSWORD":
    case "GOOGLE_LOGIN":
    case "GOOGLE_SIGN_UP":
    case "SIGNUP":
      localStorage.setItem("token", payload.token);
      localStorage.setItem("user", JSON.stringify(payload.user));
      localStorage.setItem("userId", payload.user._id);
      return {
        ...state,
        token: payload.token,
        user: payload.user,
        userId: payload.user._id,
      };

    case "FORGOT_START":
      localStorage.setItem("userId", payload.user._id);
      return {
        ...state,
        userId: payload.user._id,
        user: payload.user,
      };

    case "ADD_PHONE_NUMBER":
      return {
        ...state,
        userId: state.user._id,
      };

    case "PHONE_NUMBER_VERIFIED":
      localStorage.setItem("user", JSON.stringify(payload.user));
      localStorage.setItem("userId", payload.user._id);
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        user: payload.user,
        userId: payload.user._id,
        token: payload.token,
      };

    case "UPDATE_USER_INFO":
      localStorage.setItem("user", JSON.stringify(payload.user));
      return {
        ...state,
        user: payload.user,
      };

    case "LOGOUT":
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("userId");
      return {
        ...state,
        token: null,
        user: null,
        userId: null,
      };
    default:
      return state;
  }
};

export default authReducer;
