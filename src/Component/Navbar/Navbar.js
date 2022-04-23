import React, { useState } from "react";
import classes from "./Navbar.module.css";
import logo from "../../Imgs/Logo.svg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../state/actions/auth";

function Navbar() {
  const authReducer = useSelector((state) => state.authReducer);
  //   const [user, setUser] = useState(true);
  const history = useHistory();

  const dispatch = useDispatch();

  return (
    <div className={classes.Navbar}>
      <Link to="/">
        <div className={classes.NavbarLeft}>
          <img className={classes.NavbarLogo} src={logo} alt="logo" />
        </div>
      </Link>
      <div
        className={
          !authReducer.token
            ? classes.NavbarRight
            : `${classes.NavbarRight} ${classes.NavbarRightLogged} `
        }
      >
        {!authReducer.token ? (
          <>
            <Button
              onClick={() => history.push("/signup")}
              className={`${classes.btnColored} ${classes.btn}`}
            >
              Sign Up
            </Button>
            <Button
              onClick={() => history.push("/login")}
              className={classes.btn}
            >
              Log in
            </Button>
          </>
        ) : (
          <Button className={classes.btn} onClick={() => dispatch(logout())}>
            Log out
          </Button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
