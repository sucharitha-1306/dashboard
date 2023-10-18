import React from "react";
import {
  FiChevronRight,
  FiHome,
  FiSettings,
  FiBriefcase,
  FiChevronDown
} from "react-icons/fi";
import {BiSolidCommentDots} from "react-icons/bi"
import {BsFillBoxFill,BsPersonSquare} from "react-icons/bs"
import { RiSettingsLine } from "react-icons/ri";
import User from "../assets/User.jpg";  
const Sidebar=()=>{
    return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
    <div className="fixed top-0 left-0 bg-blue-950 text-white h-screen w-1/9 p-4">
      {/* Logo and App Name */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
     
      <div className="flex items-center mb-4">
        <RiSettingsLine size={20} />
        <h1 className="text-lg font-semibold ml-2">Dashboard</h1>
      </div>
    </div>
      

      {/* Menu Items */}
      <ul>
        <li className="flex justify-between items-center mb-4 bg-white/30 p-1 font-semibold rounded-md">
          <div className="flex items-center">
            {" "}
            <FiHome className="mr-2" />
            Dashboard
          </div>{" "}
          {/* <span className="ml-2">
            <FiArrowRight />
          </span> */}
        </li>
        <li className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            {" "}
            <BsFillBoxFill className="mr-2" />
            Product
          </div>{" "}
          <span className="ml-2">
            <FiChevronRight />
          </span>
        </li>
        <li className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            {" "}
            <BsPersonSquare className="mr-2" />
            Customers
          </div>{" "}
          <span className="ml-2">
            <FiChevronRight />
          </span>
        </li>
        <li className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            {" "}
            <FiBriefcase className="mr-2" />
           Income
          </div>{" "}
          <span className="ml-2">
            <FiChevronRight />
          </span>
        </li>
        <li className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            {" "}
            <FiSettings className="mr-2" />
            Promote
          </div>{" "}
          <span className="ml-2">
            <FiChevronRight />
          </span>
        </li>
        <li className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            {" "}
            <BiSolidCommentDots className="mr-2" />
            Help
          </div>{" "}
          <span className="ml-2">
            <FiChevronRight />
          </span>
        </li>
      </ul> 

      {/* User Info at the Bottom */}
      <div className="flex justify-between items-center mt-44 bg-white/30 p-1 rounded-md">
        <div className="flex items-center">
          <img
            src={User}
            alt="User"
            className="w-8 h-8 object-cover rounded"
          />
          <div className="ml-2">
            <p className="text-sm font-semibold">Evano</p>
            <p className="text-xs">Project Manager</p>
          </div>
        </div>
        <span className="ml-2">
          <FiChevronDown />
        </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
