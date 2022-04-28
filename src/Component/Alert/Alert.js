import React from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";
import { useDispatch } from "react-redux";

function PopUp({ type, alertMessage, location }) {
  const dispatch = useDispatch();
  if (["ManualSalaryEntry", "CompareSalary"].includes(location)) {
    let salaries = "";
    if (["ManualSalaryEntry"].includes(location)) {
      salaries = JSON.parse(localStorage.getItem("salaries"));
    } else salaries = JSON.parse(localStorage.getItem("compareSalaries"));
    alertMessage = alertMessage.map((alert) => {
      return salaries.length <= 1 ? (
        <li>
          <span>{alert.cardName}</span>
        </li>
      ) : (
        <li>
          {alert.salary ? (
            <b>Salary {alert.salary} </b>
          ) : (
            <b>{alert?.company} - </b>
          )}
          <span>{alert.cardName}</span>
        </li>
      );
    });
    alertMessage = (
      <div>
        <p>Please fill below mentioned fields</p>
        {alertMessage}
      </div>
    );
  }

  console.log("FROM ALERT", alertMessage, type, location);

  return (
    <Snackbar
      open={true}
      autoHideDuration={
        ["ManualSalaryEntry", "CompareSalary"].includes(location)
          ? 100000
          : 5000
      }
      onClose={() => {
        !["ManualSalaryEntry", "CompareSalary"].includes(location) &&
          dispatch({ type: "REMOVE_ALERT" });
      }}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        onClose={() => {
          dispatch({ type: "REMOVE_ALERT" });
        }}
        severity={type}
        sx={{ width: "100%" }}
      >
        {alertMessage}
      </Alert>
    </Snackbar>
  );
}

export default PopUp;
