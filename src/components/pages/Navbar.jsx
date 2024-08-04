import React, { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import Profile from "./Profile";
import { Provider } from "../../api/ContextApi";

const Navbar = () => {
  let navigate = useNavigate();
  const location = useLocation();

  if (
    location.pathname === "/address" ||
    location.pathname === "/addNewAddress" ||
    location.pathname === "/updateData" ||
    location.pathname === "/login"
  ) {
    return null;
  }

  let handleLogin = () => {
    if (!profileData.name) {
      navigate("/login");
    }
  };

  const data = useContext(Provider);
  const { profileData, setProfileData } = data;

  console.log(profileData);

  return (
    <div className="flex h-[70px] w-full bg-blue-500 items-center text-white gap-[20px] justify-around sticky top-0 z-20">
      <div className="w-[15%]">
        <Link to="/">
          <b className="text-xl">Qspider Fashion</b>
        </Link>
      </div>
      <div className="w-[50%]">
        <ul className="flex justify-around">
          <NavLink
            to="/mens"
            className={({ isActive }) =>
              isActive ? "text-slate-800 font-bold" : undefined
            }
          >
            <li>Mens</li>
          </NavLink>
          <NavLink
            to="/womens"
            className={({ isActive }) =>
              isActive ? "text-slate-800 font-bold" : ""
            }
          >
            <li>Womens</li>
          </NavLink>
          <NavLink
            to="/electronics"
            className={({ isActive }) =>
              isActive ? "text-slate-800 font-bold" : ""
            }
          >
            <li>Electronics</li>
          </NavLink>
          <NavLink
            to="/grocery"
            className={({ isActive }) =>
              isActive ? "text-slate-800 font-bold " : ""
            }
          >
            <li>Grocery</li>
          </NavLink>
        </ul>
      </div>
      <div className="relative group w-[19%]">
        <div className="w-[30%] flex justify-center items-center ml-[100px]">
          <span
            className="text-3xl cursor-pointer"
            onClick={() => {
              handleLogin();
            }}
          >
            {sessionStorage.getItem("token") ? (
              <img
                className="rounded-full"
                height="50px"
                src={profileData?.avatar}
              />
            ) : (
              <FaRegUserCircle />
            )}
          </span>
          <span className="ml-2 text-slate-800 font-semibold cursor-pointer">
            {profileData.name}
          </span>
        </div>
        {sessionStorage.getItem("token") ? (
          <div className="absolute hidden group-hover:block w-auto z-30">
            <Profile />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
