import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import classes from "./SideBar.css";
import { IconContext } from "react-icons";
import LogoFull from "../Imgs/logofull.png";
import { Button } from "@mui/material";

function SideBar() {
  // const [sidebar, setSidebar] = useState(false);
  // const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        {/* <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}> */}
        <nav className={classes.navMenu}>
          <ul className={classes.navMenu_Items}>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <div>{item.icon}</div>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default SideBar;
