import React, { useState } from "react";
import classes from "./Navbar.module.css";
import logo from "../../Imgs/Logo.svg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState(true);

  return (
    <div className={classes.Navbar}>
      <Link to="/">
        <div className={classes.NavbarLeft}>
          <img className={classes.NavbarLogo} src={logo} alt="logo" />
        </div>
      </Link>
      <div
        className={
          user
            ? classes.NavbarRight
            : `${classes.NavbarRight} ${classes.NavbarRightLogged} `
        }
      >
        {user ? (
          <>
            <Button className={`${classes.btnColored} ${classes.btn}`}>
              Sign Up
            </Button>
            <Button className={classes.btn}>Log in</Button>
          </>
        ) : (
          <Button className={classes.btn}>Log out</Button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
