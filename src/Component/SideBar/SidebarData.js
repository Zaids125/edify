import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <IoIcons.IoIosHome />,
    cName: "navText",
  },
  {
    title: "Dashboard",
    path: "/my-courses",
    icon: <IoIcons.IoMdPeople />,
    cName: "navText",
  },
  {
    title: "Explore Courses",
    path: "/courses",
    icon: <IoIcons.IoIosPaper />,
    cName: "navText",
  },
  {
    title: "Portfolio",
    path: "/portfolio",
    icon: <FaIcons.FaCartPlus />,
    cName: "navText",
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "navText",
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "navText",
  },
];
