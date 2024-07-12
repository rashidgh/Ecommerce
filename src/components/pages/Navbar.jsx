import React from "react";
import { TbLocationExclamation } from "react-icons/tb";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
  const location = useLocation();
  console.log(location);
  if (
    location.pathname == "/address" ||
    location.pathname == "/addNewAddress" ||
    location.pathname == "/updateData" ||
    location.pathname == "/ordered" ||
    location.pathname == "/login"
  ) {
    return null;
  }
  return (
    <div className="h-[75px] w-[100vw] text-white bg-blue-500 flex justify-between items-center">
      <div className="w-[15%] text-xl text-center">
        <Link to="/">QspiderFashion</Link>
      </div>
      <div className="w-[55%]">
        <ul className="flex justify-around">
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-semibold text-red-600" : ""
            }
            to="/mens"
          >
            <li>Mens</li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-semibold text-red-600" : ""
            }
            to="/womens"
          >
            <li>Womens</li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-semibold text-red-600" : ""
            }
            to="/grocery"
          >
            <li>Grocery</li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-semibold text-red-600" : ""
            }
            to="/electronics"
          >
            <li>Electronics</li>
          </NavLink>
        </ul>
      </div>
      <div className="w-[10%] text-center">
        <div>
          <Link to="/login">
            <span className="text-3xl">
              <FaRegCircleUser />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
