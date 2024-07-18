import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-[100vw] h-[70px] bg-blue-500 text-white font-semibold flex justify-around items-center" >
      <Link to="/logo ">Logo</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/auth">Authentication</Link>
    </div>
  );
};

export default Home;
