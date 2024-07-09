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

  // !handleSubmit:
  const handleSubmit = async e => {
    e.preventDefault();
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
            value={state.ename}
            onChange={handleChange}
          />
          <input
            data-aos="fade-left"
            className="p-[12px] w-[300px] rounded"
            type="text"
            name="mob"
            id=""
            placeholder="Enter Number"
            value={state.mob}
            onChange={handleChange}
          />
          <input
            data-aos="fade-right"
            className="p-[12px] w-[300px] rounded"
            type="text"
            name="email"
            id=""
            placeholder="Enter Email Id"
            value={state.email}
            onChange={handleChange}
          />
          <input
            data-aos="fade-left"
            className="p-[12px] w-[300px] rounded"
            type="text"
            name="address"
            id=""
            placeholder="Enter Address"
            value={state.address}
            onChange={handleChange}
          />
          <input
            data-aos="fade-right"
            className="p-[12px] w-[300px] rounded"
            type="text"
            placeholder="Enter pincode"
            value={state.pincode}
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
