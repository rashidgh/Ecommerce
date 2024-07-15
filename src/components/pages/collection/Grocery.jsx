import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import AxiosInstance from "../../../api/AxiosInstance";
import Spinner from "../Spinner";
import { Link } from "react-router-dom";
import Skelton from "../Skelton";
import AOS from "aos";
import "aos/dist/aos.css";

const Grocery = () => {
  let [state, setState] = useState([]);
  let [loading, setLoading] = useState(false);
  let fetchData = async () => {
    try {
      let data = await AxiosInstance.get("/products");
      // setState(data.data);
      let arr = [];
      arr.push(data.data[4], data.data[5], data.data[6], data.data[7]);
      setState(arr);
      setLoading(true);
    } catch (error) {
      toast.error("something went wrong");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
   useEffect(() => {
     AOS.init();
   }, []);
  return (
    <div className="flex flex-wrap gap-4 item-center mt-[50px]">
      {loading === false ? (
        <div className="flex  flex-col w-[100vw]">
          <div className="flex gap-10 h-[auto] ">
            <Skelton />
            <Skelton />
            <Skelton />
            <Skelton />
          
          </div>
        </div>
      ) : state.length < 1 ? (
        <p className="h-[40vh] flex items-center justify-center text-xl font-semibold text-red-500">
          Data not Found
        </p>
      ) : (
        state?.map((val, ind) => {
          const { image, title, price, rating } = val;
          {
            /* console.log(val); */
          }
          return (
            <div
              key={ind}
              className=" bg-[#fff] shadow flex flex-col items-center h-[auto] w-[250px] p-2 justify-around mt-[20px] rounded"
            >
              <img className="h-[250px]" width="200px" src={image} />
              <p>
                <span>
                  <b>₹{price}</b>
                </span>
                <strike>
                  <b className="text-slate-600 ml-3">₹{rating?.count}</b>
                </strike>
              </p>

              <p>{title.slice(0, 20)}</p>
              <Link data-aos="flip-right"
                state={val}
                to="/address"
                className="bg-orange-500 p-3 w-full rounded text-white text-center"
              >
                <button>BUY NOW</button>
              </Link>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Grocery;
