import axiosInstance from "../../adapters/api/axiosInstance";

export const login = (loginData, history) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const res = await axiosInstance.post("/auth/login", loginData);
    dispatch({ type: "LOGIN", payload: res.data });
    if (!localStorage.getItem("tempUser"))
      dispatch({ type: "UPDATE_TEMP_USER_INFO", payload: res.data });
    dispatch({
      type: "SUCCESS",
      payload: { success: "Signed In Successfully" },
    });
    history.push("/courses");
  } catch (error) {
    console.log(error);
    dispatch({ type: "ERROR", payload: error.response.data });
  } finally {
    dispatch({ type: "STOP_LOADING" });
  }
};

export const signup_start = (signUpData, history) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    localStorage.setItem("email", signUpData.email);
    const res = await axiosInstance.post("/auth/signUp", signUpData);
    console.log(res.data);
    dispatch({ type: "SIGNUP", payload: res.data });
    dispatch({ type: "INFO", payload: { info: "Do Not Refresh this page" } });
    history.push("/courses");
  } catch (error) {
    dispatch({ type: "ERROR", payload: error.response.data });
    console.log(error);
  } finally {
    dispatch({ type: "STOP_LOADING" });
  }
};

export const logout = (history) => (dispatch) => {
  dispatch({
    type: "LOGOUT",
  });
  history.push("/");
  dispatch({
    type: "SUCCESS",
    payload: { success: "Logged out Successfully" },
  });
};
