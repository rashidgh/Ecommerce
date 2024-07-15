import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Skelton = () => {
  return (
    <div className="flex flex-col justify-center item-center h-auto w-[250px] p-2  ">
      <Skeleton className="h-[200px]" width="250px" />
      <div className="flex flex-col items-center w-full">
        <Skeleton width="70px" />
        <Skeleton width="150px" />
      </div>
      <Skeleton width="250px" height="40px" />{" "}
    </div>
  );
};

export default Skelton;
