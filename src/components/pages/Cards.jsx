import React, { useEffect, useState } from "react";
import AxiosInstance from "../../api/AxiosInstance";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Cards = () => {
  let [state, setState] = useState([]);
  const fetchData = async () => {
    let { data } = await AxiosInstance("/products");
    console.log(data);
    setState(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center mt-[100px]">
      {state.map((val, ind) => {
        const { image, title, price, rating } = val;
        return (
          <div
            key={ind}
            className="bg-[white] shadow flex flex-col text-center item-center h-[auto] w-[250px] p-2 justify-around mt-[20px] rounded"
            data-aos="zoom-in"
          >
            <div>
              <img className="h-[250px] w-[200px]" src={image} alt="" />
            </div>
            <div>
              <b>{price}</b>
              <b className="text-slate-500 ml-2">
                <strike>{rating.count}</strike>
              </b>
            </div>
            <p>{title.slice(0, 18)}</p>
            <Link to="/address">
              <button
                data-aos="flip-right"
                className="bg-orange-500 p-3 w-full rounded text-white text-center hover:bg-orange-400"
              >
                BUY NOW
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
