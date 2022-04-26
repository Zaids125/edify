export const update_portfolio_details = (inputData, inputName) => {
  //   dispatch({
  //     type: "UPDATE_PORTFOLIO_DETAILS",
  //     payload: { inputData, inputName },
  //   });
  return {
    type: "UPDATE_PORTFOLIO_DETAILS",
    payload: { inputData, inputName },
  };
};

export const update_portfolio_modal =
  (inputData, inputName, modalName) => (dispatch) => {
    return {
      type: "UPDATE_PORTFOLIO_MODAL",
      payload: { inputData, inputName, modalName },
    };
  };
