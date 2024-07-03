import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AxiosInstance2 } from "../../../api/AxiosInstance";
import { MdDelete } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";

const Address = () => {
  let [state, setState] = useState([]);
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="h-[70px] bg-blue-500 w-[100vw] flex text-white items-center">
        <Link to="/" className="w-[15%] text-center text-xl">
          <p>Qspider Fashion</p>
        </Link>
        <p className="w-[70%] text-2xl text-center font-semibold">
          Delivery Address
        </p>
      </div>
      <div className="w-[100vw] flex justify-center items-center h-[60px ]text-xl">
        <Link className="w-[90vw] bg-blue-400 hover:bg-blue-300 rounded text-white flex items-center justify-center mt-4 text-center h-[50px]">
          Add New Address+
        </Link>
      </div>
      <div>
        {state.map((val, ind) => {
          let { ename, mobile, email, address, pincode, id } = val;
          return (
            <div className="flex  text-slate-700 m-4" key={ind}>
              <div>
                <div className="flex gap-2 items-center">
                  <input
                    type="radio"
                    name="radiobtn"
                    className="h-[20px] w-[20px]"
                    id={ind}
                    value={val.id}
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
                <Link className="p-2 bg-blue-400 text-sm w-[auto] text-white font-semibold rounded text-center flex gap-2 item-center">
                  Edit
                  <span className="text-lg">
                    <FiEdit2 />
                  </span>
                </Link>
                <button
                  onClick={() => {
                    deleteData(id);
                  }}
                  className="p-2 bg-red-400 text-sm w-[auto] text-white font-semibold rounded text-center flex gap-2 item-center"
                >
                  Delete
                  <span className="text-lg">
                    <MdDelete />
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Address;
