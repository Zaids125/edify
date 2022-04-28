const initialState = {
  error: null,
  success: null,
  info: null,
  errorLocation: null,
};

const alertReducer = (state = initialState, action) => {
  const { type, payload, errorLocation = "auth" } = action;
  switch (type) {
    case "ERROR":
      return {
        ...state,
        error: payload.error,
        errorLocation,
      };
    case "SUCCESS":
      return {
        ...state,
        success: payload.success,
      };
    case "INFO":
      return {
        ...state,
        info: payload.info,
      };
    case "REMOVE_ALERT":
      return {
        ...state,
        error: null,
        success: null,
        info: null,
        errorLocation: null,
      };
    default:
      return state;
  }
};

export default alertReducer;
