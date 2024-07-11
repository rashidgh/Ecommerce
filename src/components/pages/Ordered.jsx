import React from "react";
import { useLocation } from "react-router-dom";
import { TbTruckDelivery } from "react-icons/tb";

const Ordered = () => {
  const location = useLocation();
  const { product, address } = location.state;
  const { image, rating, title, price, description } = product;
  const { ename, mob, email, address: pata, pincode } = address;
    //   console.log(location);
    
    const date = new Date();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
   
  return (
    <div className="flex flex-col h-[80vh] w-[100%] text-slate-700">
      <div className="bg-white w-[90%] flex justify-around h-[40vh] mt-6 item-center">
        <div className="w-[15%]">
          <img className="h-[200px]mt-2 " src={image} alt="shirts" />
        </div>
        <div className="w-[30%] mt-5 ">
          <p className="font-semibold ">{title}</p>
          <p className="text-sm">{description}</p>
        </div>
        <div className="flex gap-2 font-semibold ">
          <span className="text-blue-500 text-sm">
            <TbTruckDelivery />
          </span>
          <p>Delivary Expected Tommorow</p>
          <span>Friday 12th july</span>
        </div>
        <div>
          <div className="w-[10%] mt-5 flex gap-2 font-semibold">
            <p>${price}</p>
            <p>
              <strike className="text-slate-500">{rating.count}</strike>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ordered;
