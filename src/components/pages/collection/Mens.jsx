import React, { useEffect, useState } from "react";
import AxiosInstance from "../../../api/AxiosInstance";
import Spinner from "../Spinner";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Skeleton from "../Skelton";
import AOS from "aos";
import "aos/dist/aos.css";

const Mens = () => {
  let [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      const { data } = await AxiosInstance.get("/products");
      console.log(data);
      let arr = [];
      arr.push(data[1], data[2], data[3]);
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
    <div className="flex flex-wrap gap-4  mt-[100px] ">
      {loading === false ? (
        <div className="flex  flex-col w-[100vw]">
          <div className="flex gap-10 h-[auto] ">
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        </div>
      ) : state.length < 1 ? (
        <p className="h-[20vh] text-red-600 font-semibold flex justify-center items-center text-2xl">
          No Data Found
        </p>
      ) : (
        state.map((val, ind) => {
          const { image, title, price, rating } = val;
          return (
            <div
              key={ind}
              className="bg-[white] shadow flex flex-col text-center  h-[auto] w-[250px] p-2   rounded"
              // data-aos="zoom-in"
            >
              <div>
                <img className="h-[250px] w-[200px]" src={image} alt="" />
              </div>
              <div>
                <b>₹{price}</b>
                <b className="text-slate-500 ml-2">
                  <strike>₹{rating.count}</strike>
                </b>
              </div>
              <p>{title.slice(0, 18)}</p>
              <Link to="/address" data-aos="flip-right">
                <button
                  // data-aos="flip-right"
                  className="bg-orange-500 p-3 w-full rounded text-white text-center hover:bg-orange-400"
                >
                  BUY NOW
                </button>
              </Link>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Mens;
