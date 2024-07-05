import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AxiosInstance2 } from "../../../api/AxiosInstance";
import { MdDelete } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import { Provider } from "../../../api/ContextApi";
import toast from "react-hot-toast";

const Address = () => {
  let [state, setState] = useState([]);
  const data = useContext(Provider);
  const { deliver, setDeliver } = data;
  // !fetching data:
  const fetchData = async () => {
    try {
      let { data } = await AxiosInstance2.get("/data");
      console.log(data);
      setState(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // !deleting data:
  const deleteData = async id => {
    try {
      await AxiosInstance2.delete(`data/${id}`);
      setState(prev => prev.filter(val => val.id != id));
      toast.success("Address has been deleted");
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  // !Aos Animation:
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="zoom-in">
      <div className="h-[70px] bg-blue-500 w-[100vw] flex text-white items-center">
        <Link to="/" className="w-[15%] text-center text-xl">
          <p>Qspider Fashion</p>
        </Link>
        <p className="w-[70%] text-2xl text-center font-semibold">
          Delivery Address
        </p>
      </div>
      <div
        data-aos="fade-down"
        className="w-[100vw] flex justify-center items-center h-[60px ]text-xl"
      >
        <Link
          to="/addNewAddress"
          className="w-[90vw] bg-blue-400 hover:bg-blue-300 rounded text-white flex items-center justify-center mt-4 text-center h-[50px] mb-8"
        >
          Add New Address+
        </Link>
      </div>
      <div>
        {state.map((val, ind) => {
          let { ename, mobile, email, address, pincode, id } = val;
          return (
            <div className="flex justify-between w-[100vw]">
              <div className="flex  text-slate-700 m-4" key={ind}>
                <div>
                  <div className="flex gap-2 items-center">
                    <input
                      type="radio"
                      name="radiobtn"
                      className="h-[20px] w-[20px]"
                      id={ind}
                      value={val.id}
                      onChange={e => setDeliver(e.target.value)}
                    />

                    <label htmlFor={ind} className="text-xl">
                      <b>{ename}</b>
                    </label>
                    <b>{mobile}</b>
                    <b>{email}</b>
                  </div>
                  <div className="ml-8 flex gap-2">
                    <b> {address}</b>
                    <b>{pincode}</b>
                  </div>
                </div>
                <div className="ml-8 h-[35px] flex gap-4 ">
                  <Link className="p-2 bg-blue-400 hover:bg-blue-300 text-sm w-[auto] text-white font-semibold rounded text-center flex gap-2 item-center">
                    Edit
                    <span className="text-lg">
                      <FiEdit2 />
                    </span>
                  </Link>
                  <button
                    onClick={() => {
                      deleteData(id);
                    }}
                    className="p-2 bg-red-400 hover:bg-red-300 text-sm w-[auto] text-white font-semibold rounded text-center flex gap-2 item-center"
                  >
                    Delete
                    <span className="text-lg">
                      <MdDelete />
                    </span>
                  </button>
                </div>
              </div>
              {deliver == val.id ? (
                <Link>
                  <div
                    data-aos="fade-left"
                    className="mr-8 p-3 text-xl h-[60px] flex items-center justify-center w-[18vw] text-center bg-orange-400 hover:bg-orange-300 rounded text-white"
                  >
                    <input type="button" value="Deliver Here" />
                  </div>
                </Link>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Address;
