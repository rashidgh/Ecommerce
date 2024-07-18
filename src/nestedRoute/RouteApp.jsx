import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logo from "./Logo";
import Menu from "./Menu";
import Authenticatio from "./Authenticatio";
import Home from "./Home";
import Mens from "./menu/Mens";
import Womens from "./menu/Womens";
import Grocery from "./menu/Grocery";

const RouteApp = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logo" element={<Logo />} />
          <Route path="/menu" element={<Menu />}>
            <Route path="mens" element={<Mens />} />
            <Route path="womens" element={<Womens />} />
            <Route path="grocery" element={<Grocery />} />
          </Route>
          <Route path="/auth" element={<Authenticatio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouteApp;
