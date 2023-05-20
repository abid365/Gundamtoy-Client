import React from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const Tabs = () => {
  return (
    <div>
      <div className="flex items-center flex-col gap-3">
        <h1 className="text-center font-bold text-4xl">Shop By Catagory</h1>
        <BsFillArrowDownCircleFill className="lg:text-4xl text-xl"></BsFillArrowDownCircleFill>
      </div>
    </div>
  );
};

export default Tabs;
