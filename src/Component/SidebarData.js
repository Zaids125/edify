import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <IoIcons.IoIosHome color="#989898" />,
    cName: "navText",
  },
  {
    title: "Courses",
    path: "/courses",
    icon: <IoIcons.IoIosPaper color="#989898" />,
    cName: "navText",
  },
  {
    title: "Coding Hub",
    path: "/products",
    icon: <FaIcons.FaCartPlus color="#989898" />,
    cName: "navText",
  },
  {
    title: "Endorsement",
    path: "/team",
    icon: <IoIcons.IoMdPeople color="#989898" />,
    cName: "navText",
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText color="#989898" />,
    cName: "navText",
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle color="#989898" />,
    cName: "navText",
  },
];
