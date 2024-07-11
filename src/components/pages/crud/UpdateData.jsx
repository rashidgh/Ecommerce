import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AxiosInstance2 } from "../../../api/AxiosInstance";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const UpdateData = () => {
  const [state, setState] = useState([]);
  const location = useLocation();
  console.log(location);
  const id = location.state.id;
  console.log(id);
  const navigate = useNavigate();

  // !fetch particular data:
  const particularData = async id => {
    try {
      let data = await AxiosInstance2.get(`data/${id}`);
      console.log(data);
      setState(data.data);
    } catch (err) {
      toast.error("something went wrong");
    }
  };
  useEffect(() => {
    if (id) {
      particularData(id);
    }
  }, [id]);
  const { ename, mob, email, address, pincode } = state;
  // !handleSubmit:
  const handleSubmit = async e => {
    e.preventDefault();
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
      await AxiosInstance2.put(`data/${id}`, state);
      navigate("/address");
    } catch (error) {
      toast.error("something went wrong");
    }
  };

  const handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  // !Aos Animation:
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="bg-slate-100 w-[100vw] h-[100vh]">
      <div className="flex h-[90vh] w-[100vw] justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-1 text-slate-700 font-semibold "
        >
          <input
            data-aos="fade-right"
            className="p-[12px] w-[300px] rounded"
            type="text"
            name="ename"
            id=""
            placeholder="Enter Name"
            value={ename}
            onChange={handleChange}
          />
          <input
            data-aos="fade-left"
            className="p-[12px] w-[300px] rounded"
            type="text"
            name="mob"
            id=""
            placeholder="Enter Number"
            value={mob}
            onChange={handleChange}
          />
          <input
            data-aos="fade-right"
            className="p-[12px] w-[300px] rounded"
            type="text"
            name="email"
            id=""
            placeholder="Enter Email Id"
            value={email}
            onChange={handleChange}
          />
          <input
            data-aos="fade-left"
            className="p-[12px] w-[300px] rounded"
            type="text"
            name="address"
            id=""
            placeholder="Enter Address"
            value={address}
            onChange={handleChange}
          />
          <input
            data-aos="fade-right"
            className="p-[12px] w-[300px] rounded"
            type="text"
            placeholder="Enter pincode"
            value={pincode}
            onChange={handleChange}
            name="pincode"
            id=""
          />

          {/* <Link to="/address"> */}
          <button
            data-aos="zoom-in"
            className="w-full bg-blue-500 text-white p-[12px] mt-2 "
          >
            Update Address
          </button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
};

export default UpdateData;
