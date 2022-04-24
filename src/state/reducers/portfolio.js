const initialState = {
  firstName: localStorage.getItem("token"),
  lastName: JSON.parse(localStorage.getItem("user")),
  email: null,
  mobile: null,
  city: null,
  district: null,
};

const portfolioReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};
