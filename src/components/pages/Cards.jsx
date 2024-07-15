import React, { useContext, useEffect, useState } from "react";
import AxiosInstance from "../../api/AxiosInstance";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import Skeleton from "../pages/Skelton";


const Card = () => {
  let [state, setState] = useState([]);
  let [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      let { data } = await AxiosInstance.get("/products");
      setState(data);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

 

  return (
    <div className="flex flex-wrap gap-4 item-center justify-center items-center mt-[50px]">
      {loading === false ? (
        <div className="flex justify-center items-center flex-col w-[100vw]">
          <div className="flex gap-10 h-[auto]  mt-[50px]">
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
          <div className="flex gap-10 h-[auto]  mt-[50px]">
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
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
              className=" bg-[#fff] shadow flex flex-col items-center  h-[auto] w-[250px] p-2 justify-around mt-[20px] rounded"
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
              <Link 
                state={val}
                to="/address"
                className="bg-orange-500 hover:bg-orange-400  p-3 w-full rounded text-white text-center "
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

export default Card;
