import React from "react";
import Navbar from "./components/pages/Navbar";
import "./global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mens from "./components/pages/collection/Mens";
import Womens from "./components/pages/collection/Womens";
import Electronics from "./components/pages/collection/Electronics";
import Grocery from "./components/pages/collection/Grocery";
import Cheif from "./components/pages/Cheif";
import Address from "./components/pages/crud/Address";
import ContextApi from "./api/ContextApi";

const App = () => {
  return (
   
    <ContextApi>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Cheif />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/grocery" element={<Grocery />} />
          <Route path="/address" element={<Address />} />
        </Routes>
      </BrowserRouter>
    </ContextApi>
  );
};

export default App;
