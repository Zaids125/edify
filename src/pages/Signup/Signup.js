import React, { useEffect, useState } from "react";
import classes from "./Signup.module.css";
import Logo from "../../Imgs/Logo.svg";
import Auth from "../../Imgs/Auth.png";
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import {
  emailValidator,
  passwordValidator,
  phoneValidator,
} from "../../utils/validators";
import { signup_start } from "../../state/actions/auth";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import validator from "validator";

const ariaLabel = { "aria-label": "description" };

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [disable, setDisable] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const onChangeHandler = (e) => {
      // if (e.target.name === "email") setEmail(e.target.value);
      // else if (e.target.name === "password") setPassword(e.target.value);
      // else if (e.target.name === "firstName") setFirstName(e.target.value);
      // else if (e.target.name === "lastName") setLastName(e.target.value);
      if (!firstName || !lastName || !password || !email) setDisable(true);
      else setDisable(false);

      if (!validator.isEmail(email)) {
        dispatch({ type: "ERROR", payload: "Enter a valid email address" });
      }
      if (firstName.trim() === "") {
        dispatch({ type: "ERROR", payload: "First Name is required" });
      }
      if (password) {
        if (!passwordValidator(password)) {
          dispatch({
            type: "ERROR",
            payload:
              "Password should contain atleast 8 characters, one uppercase, one lowercase, one number and atleast one special character",
          });
        }
      }
      if (lastName.trim() === "") {
        dispatch({ type: "ERROR", payload: "Last Name is required" });
      }
    };
    onChangeHandler();
    console.log(firstName, lastName, password, email);
  }, [firstName, lastName, password, email]);

  // const onChangeHandler = (e) => {
  //   if (e.target.name === "email") setEmail(e.target.value);
  //   else if (e.target.name === "password") setPassword(e.target.value);
  //   else if (e.target.name === "firstName") setFirstName(e.target.value);
  //   else if (e.target.name === "lastName") setLastName(e.target.value);
  //   console.log(firstName, lastName, password, email);
  //   if (!firstName || !lastName || !password || !email) setDisable(true);
  //   else setDisable(false);

  //   if (!validator.isEmail(email)) {
  //     dispatch({ type: "ERROR", payload: "Enter a valid email address" });
  //   }
  //   if (firstName.trim() === "") {
  //     dispatch({ type: "ERROR", payload: "First Name is required" });
  //   }
  //   if (password) {
  //     if (!passwordValidator(password)) {
  //       dispatch({
  //         type: "ERROR",
  //         payload:
  //           "Password should contain atleast 8 characters, one uppercase, one lowercase, one number and atleast one special character",
  //       });
  //     }
  //   }
  //   if (lastName.trim() === "") {
  //     dispatch({ type: "ERROR", payload: "Last Name is required" });
  //   }
  // };

  const history = useHistory();

  return (
    <div className={classes.Signup}>
      <div className={classes.SignupContainer}>
        <div className={classes.SignupLeft}>
          <img className={classes.Auth} src={Auth} alt="Auth" />
          <img className={classes.Logo} src={Logo} alt="Logo" />
        </div>
        <form className={classes.SignupRight}>
          <h1>Welcome</h1>
          <Box className={classes.NameContainer}>
            <div>
              <p>First Name</p>
              <Input
                id="firstName"
                type="text"
                name="firstName"
                sx={{ width: 220, marginRight: 5 }}
                className={classes.Name}
                // onChange={onChangeHandler}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter First Name"
              />
            </div>
            <div>
              <p>Last Name</p>
              <Input
                id="lastName"
                type="text"
                name="lastName"
                sx={{ width: 220, marginRight: 5 }}
                className={classes.Name}
                // onChange={onChangeHandler}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter Last Name"
              />
            </div>
          </Box>
          <Box className={classes.EmailContainer}>
            <p>Email Address</p>
            <Input
              id="email"
              type="text"
              name="email"
              className={classes.Email}
              // onChange={onChangeHandler}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Address"
            />
          </Box>
          <Box className={classes.PasswordContainer}>
            {/* <InputLabel htmlFor="password">Password</InputLabel> */}
            <p>Password</p>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              className={classes.Password}
              placeholder="Enter Password"
              inputProps={ariaLabel}
              // onChange={onChangeHandler}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={(e) => e.preventDefault()}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Box>
          <Button
            sx={{ width: 410, alignSelf: "center" }}
            className={classes.SignupBtn}
            disabled={disable}
            onClick={() =>
              dispatch(
                signup_start({ email, firstName, lastName, password }, history)
              )
            }
          >
            Signup
          </Button>
          <p className={classes.NewMember}>
            Already a member? <Link to="/login"> Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
