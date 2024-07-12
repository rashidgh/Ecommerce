import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { TbTruckDelivery } from "react-icons/tb";
import AOS from "aos";
import "aos/dist/aos.css";

const Ordered = () => {
  const location = useLocation();
  console.log(location);
  let [products, setProducts] = useState([]);
  const { product, address } = location?.state;
  useEffect(() => {
    setProducts(product);
  }, []);
  console.log(products);
  console.log(address);
  let { image, title, price, description, rating } = products;
  let { ename, email, mob, address: pata, pincode } = address;

  // !fetching tommorow date:
  const date = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const tommorowDay = days[date.getDay() + 1];
  const tommoroDate = date.getDate() + 1;
  const month = months[date.getMonth()];

  // !Aos Animation:
  useEffect(() => {
    AOS.init();
  }, []);

  //   console.log(location);
  return (
    <div
      data-aos="zoom-in"
      className="flex flex-col h-[80vh] w-[100vw] text-slate-700"
    >
      <div className="bg-white w-[90%] flex justify-around h-[40vh] mt-6 item-center">
        <div className="w-[15%]">
          <img className="h-[200px] mt-2" src={image} alt="" />
        </div>
        <div className="w-[30%] mt-5">
          <p className="font-semibold">{title?.slice(0, 25)}</p>
          <p className="text-sm">{description}</p>
        </div>
        <div className="w-[30%] mt-5 font-semibold">
          <div className="flex gap-2 items-center">
            <span className="text-blue-600 text-xl">
              <TbTruckDelivery />
            </span>
            <p>
              Delivery Expected By Tomorrow{" "}
              <span className="text-sm text-blue-600 ml-2 font-bold">
                {tommorowDay} {tommoroDate+"th"} {month}{" "}
              </span>
            </p>
          </div>
        </div>
        <div className="w-[10%] mt-5 flex gap-2 font-semibold">
          <p>₹{price}</p>
          <strike className="text-slate-500">₹{rating?.count}</strike>
        </div>
      </div>
      <div className="text-blue-500 ml-6">
        <p>
          <span className="font-semibold mr-2 inline-block w-[100px]">
            Name:
          </span>
          {ename}
        </p>
        <p>
          <span className="font-semibold mr-2 inline-block w-[100px]">
            Email:
          </span>
          {email}
        </p>
        <p>
          <span className="font-semibold mr-2 inline-block w-[100px]">
            Address:
          </span>
          {pata}
        </p>
        <p>
          <span className="font-semibold mr-2 inline-block w-[100px]">
            PhoneNo:
          </span>
          {mob}
        </p>
        <p>
          <span className="font-semibold mr-2 inline-block w-[100px]">
            Pincode:
          </span>
          {pincode}
        </p>
      </div>
    </div>
  );
};

export default Ordered;
