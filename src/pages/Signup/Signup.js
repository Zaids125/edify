import React, { useState } from "react";
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
import { emailValidator, phoneValidator } from "../../utils/validators";

const ariaLabel = { "aria-label": "description" };

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [disable, setDisable] = useState(true);

  const onChangeHandler = (e) => {
    if (e.target.name === "email") {
      if (
        password &&
        (emailValidator(e.target.value) || phoneValidator(e.target.value))
      ) {
        setDisable(false);
      } else setDisable(true);

      setEmail(e.target.value);
    } else {
      if (e.target.value && (emailValidator(email) || phoneValidator(email))) {
        setDisable(false);
      } else setDisable(true);

      setPassword(e.target.value);
    }
  };

  return (
    <div className={classes.Signup}>
      <div className={classes.SignupContainer}>
        <div className={classes.SignupLeft}>
          <img className={classes.Auth} src={Auth} alt="Auth" />
          <img className={classes.Logo} src={Logo} alt="Logo" />
        </div>
        <form className={classes.SignupRight}>
          <h1>Welcome back</h1>
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
              onChange={onChangeHandler}
              placeholder="Enter Email Address"
            />
          </Box>
          <Box className={classes.PasswordContainer}>
            {/* <InputLabel htmlFor="password">Password</InputLabel> */}
            <p>Password</p>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              className={classes.Password}
              placeholder="Enter Password"
              inputProps={ariaLabel}
              onChange={onChangeHandler}
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
