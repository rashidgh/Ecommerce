import React from "react";
import { Link, Outlet } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <div className="w-[100vw] h-[70px] bg-blue-500 text-white font-semibold flex justify-around items-center">
        <Link to="mens">Mens</Link>
        <Link to="womens">Womens</Link>
        <Link to="grocery">Grocery</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Menu;
