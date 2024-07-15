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
import toast, { Toaster } from "react-hot-toast";
import AddNewAddress from "./components/pages/crud/AddNewAddress";
import Classbased from "./Classbased";
import UpdateData from "./components/pages/crud/UpdateData";
import Ordered from "./components/pages/Ordered";
import Login from "./components/pages/auth/Login";
import Profile from "./components/pages/Profile";
import Skelton from "./components/pages/Skelton";

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
          <Route path="/addNewAddress" element={<AddNewAddress />} />
          <Route path="/updateData" element={<UpdateData />} />
          <Route path="/ordered" element={<Ordered />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </ContextApi>

    // <Classbased />
  );
};

export default App;
