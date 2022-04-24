const initialState = {
  portfolioData: JSON.parse(localStorage.getItem("portfolioData")) || {},
  //   portfoliofirstName: localStorage.getItem("portfoliofirstName"),
  //   portfoliolastName: localStorage.getItem("portfoliolastName"),
  //   portfolioemail: localStorage.getItem("portfolioemail"),
  //   portfoliomobile: localStorage.getItem("portfoliomobile"),
  //   portfoliocity: localStorage.getItem("portfoliocity"),
  //   portfoliodistrict: localStorage.getItem("portfoliodistrict"),
  //   district: localStorage.getItem("token"),
};

const portfolioReducer = (state = initialState, action) => {
  const { type, payload } = action;
  let inputName;
  let inputData;
  switch (type) {
    case "UPDATE_PORTFOLIO_DETAILS":
      inputName = payload.inputName;
      inputData = payload.inputData;
      console.log("REACHED HERE", payload.inputName, payload.inputData);
      let portfolioData = JSON.parse(localStorage.getItem("portfolioData"));

      //   if (inputName === "firstName") {
      portfolioData[inputName] = inputData;
      //   }

      console.log(portfolioData);

      //   localStorage.setItem(JSON.stringify(inputName), inputData);
      localStorage["portfolioData"] = JSON.stringify(portfolioData);

      return {
        ...state,
        portfolioData,
      };

    default:
      return state;
  }
};

module.exports = portfolioReducer;
