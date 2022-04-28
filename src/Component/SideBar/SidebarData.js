import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <IoIcons.IoIosHome />,
    cName: "navText",
  },
  {
    title: "Explore Courses",
    path: "/courses",
    icon: <IoIcons.IoIosPaper />,
    cName: "navText",
  },
  {
    title: "Dashboard",
    path: "/my-courses",
    icon: <MdIcons.MdDashboard />,
    cName: "navText",
  },
  {
    title: "Portfolio",
    path: "/portfolio",
    icon: <BsIcons.BsFillFileEarmarkBarGraphFill />,
    cName: "navText",
  },
  // {
  //   title: "Messages",
  //   path: "/messages",
  //   icon: <FaIcons.FaEnvelopeOpenText />,
  //   cName: "navText",
  // },
  // {
  //   title: "Support",
  //   path: "/support",
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   cName: "navText",
  // },
];
