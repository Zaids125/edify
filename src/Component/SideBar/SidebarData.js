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
    title: "Courses",
    path: "/courses",
    icon: <IoIcons.IoIosPaper />,
    cName: "navText",
  },
  {
    title: "Coding Hub",
    path: "/products",
    icon: <FaIcons.FaCartPlus />,
    cName: "navText",
  },
  {
    title: "Endorsement",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
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
