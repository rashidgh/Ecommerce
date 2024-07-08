import React, { useState } from "react";
import toast from "react-hot-toast";
import { AxiosInstance2 } from "../../../api/AxiosInstance";
import { Link, useNavigate } from "react-router-dom";

const AddNewAddress = () => {
  const [state, setState] = useState({
    ename: "",
    mob: "",
    email: "",
    address: "",
    pincode: "",
  });
  
  let navigate = useNavigate();
  const { ename, mob, email, address, pincode } = state;
  // !handleSubmit:
  const handleSubmit = e => {
    e.preventDefault();
    console.log(state);
    if (!ename && !mob && !email && !address && !pincode) {
      return toast.error("Credentials can not be empty");
    }
    if (!ename) {
      return toast.error("name field can't be empty");
    }
    if (!mob) {
      return toast.error("mobile field can't be empty");
    }
    if (!email) {
      return toast.error("email field can't be empty");
    }
    if (!address) {
      return toast.error("address field can't be empty");
    }
    if (!pincode) {
      return toast.error("pincode field can't be empty");
    }
    try {
      AxiosInstance2.post("/data", state);
      toast.success("Address has been added");
      setState({ ename: "", mob: "", email: "", address: "", pincode: "" });
      navigate("/address");
    } catch (error) {
      toast.error("something went wrong");
    }
  };
  // !handleChange:
  const handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div className="bg-slate-100 w-[100vw] h-[100vh]">
      <div className="flex h-[90vh] w-[100vw] justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-1 text-slate-700 font-semibold "
        >
          <input
            className="p-[12px] w-[300px] rounded"
            type="text"
            name="ename"
            value={ename}
            id=""
            placeholder="Enter Name"
            onChange={handleChange}
          />
          <input
            className="p-[12px] w-[300px] rounded"
            type="text"
            name="mob"
            value={mob}
            id=""
            placeholder="Enter Number"
            onChange={handleChange}
          />
          <input
            className="p-[12px] w-[300px] rounded"
            type="text"
            name="email"
            value={email}
            id=""
            placeholder="Enter Email Id"
            onChange={handleChange}
          />
          <input
            className="p-[12px] w-[300px] rounded"
            type="text"
            name="address"
            value={address}
            id=""
            placeholder="Enter Address"
            onChange={handleChange}
          />
          <input
            className="p-[12px] w-[300px] rounded"
            type="text"
            placeholder="Enter pincode"
            onChange={handleChange}
            name="pincode"
            value={pincode}
            id=""
          />

          {/* <Link to="/address"> */}
          <button className="w-full bg-blue-500 text-white p-[12px] mt-2 ">
            Add Address
          </button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
};

export default AddNewAddress;
