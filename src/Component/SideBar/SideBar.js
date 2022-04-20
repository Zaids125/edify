import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import classes from "./SideBar.module.css";
import { IconContext } from "react-icons";
import LogoFull from "../../Imgs/logofull.png";
import { Button } from "@mui/material";

function SideBar() {
  // const [sidebar, setSidebar] = useState(false);
  // const showSidebar = () => setSidebar(!sidebar);

  return (
    <nav className={classes.navMenu}>
      <ul className={classes.navMenuItems}>
        {SidebarData.map((item, index) => {
          return (
            <li key={index} className={classes.navText}>
              <Link className={classes.link} to={item.path}>
                <div className={classes.icon}>{item.icon}</div>
                <span className={classes.title}>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default SideBar;
