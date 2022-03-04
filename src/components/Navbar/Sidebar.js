import React from "react";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as CgIcons from "react-icons/cg";

export const SidebarData = [
  {
    title: "Dashbaord",
    path: "/home",
    icon: <MdIcons.MdOutlineDashboardCustomize />,
    cName: "nav-text",
  },
  {
    title: "New Prescription",
    path: "/prescription",
    icon: <FaIcons.FaPrescription />,
    cName: "nav-text",
  },
  {
    title: "Patient List",
    path: "/patient/data",
    icon: <CgIcons.CgDatabase />,
    cName: "nav-text",
  },
  {
    title: "Admin",
    path: "/admins",
    icon: <BsIcons.BsFillPeopleFill />,
    cName: "nav-text",
  },
  {
    title: "Activities",
    path: "/activity",
    icon: <FaIcons.FaBell />,
    cName: "nav-text",
  },
  {
    title: "My Account",
    path: "/account",
    icon: <MdIcons.MdManageAccounts />,
    cName: "nav-text",
  },
];
