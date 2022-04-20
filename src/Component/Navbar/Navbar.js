import React from "react";
import classes from "./Navbar.module.css";
import logo from "../../Imgs/Logo.svg";
import { Button } from "@mui/material";

function Navbar() {
  return (
    <div className={classes.Navbar}>
      <div className={classes.NavbarLeft}>
        <img className={classes.NavbarLogo} src={logo} alt="logo" />
      </div>
      <div className={classes.NavbarRight}>
        <Button className={`${classes.btnColored} ${classes.btn}`}>
          Sign Up
        </Button>
        <Button className={classes.btn}>Log in</Button>
      </div>
    </div>
  );
}

export default Navbar;
