import React from "react";
import { TbLocationExclamation } from "react-icons/tb";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  console.log(location)
  if (location.pathname == "/address") {
    return null;
  }
  return (
    <div className="h-[75px] w-[100vw] text-white bg-blue-500 flex justify-between items-center">
      <div className="w-[15%] text-xl text-center"><Link to="/">QspiderFashion</Link></div>
      <div className="w-[55%]">
        <ul className="flex justify-around">
          <NavLink
            className={({ isActive }) => (isActive ? "font-semibold text-red-600" : "")}
            to="/mens"
          >
            <li>Mens</li>
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "font-semibold text-red-600" : "")}  to="/womens">
            <li>Womens</li>
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "font-semibold text-red-600" : "")} to="/grocery">
            <li>Grocery</li>
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "font-semibold text-red-600" : "")} to="/electronics">
            <li>Electronics</li>
          </NavLink>
        </ul>
      </div>
      <div className="w-[20%] text-center">Authentication</div>
    </div>
  );
};

export default Navbar;
