import React, { useState } from "react";
import classes from "./ForgotPassword.module.css";
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

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const [disable, setDisable] = useState(true);

  const onChangeHandler = (e) => {
    if (e.target.name === "email") {
      if (emailValidator(e.target.value) || phoneValidator(e.target.value)) {
        setDisable(false);
      } else setDisable(true);
      setEmail(e.target.value);
    }
  };

  return (
    <div className={classes.ForgotPassword}>
      <div className={classes.ForgotPasswordContainer}>
        <div className={classes.ForgotPasswordLeft}>
          <img className={classes.Auth} src={Auth} alt="Auth" />
          <img className={classes.Logo} src={Logo} alt="Logo" />
        </div>
        <FormControl
          className={classes.ForgotPasswordRight}
          variant="standard"
          fullWidth
          sx={{ m: 1 }}
        >
          <h1>Forgot your password?</h1>
          <p className={classes.Instructions}>
            Enter the email address you used when you joined and we’ll send you
            instructions to reset your password.
            <br />
            <br /> For security reasons, we do NOT store your password. So rest
            assured that we will never send your password via mail.
          </p>
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
          <Button className={classes.ForgotPasswordBtn} disabled={disable}>
            Send Reset Instructions
          </Button>
        </FormControl>
      </div>
    </div>
  );
}

export default ForgotPassword;
