import React from "react";
import Gallary from "../../Components/Gallary";
// import Tabs from "../../Components/Tabs";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import GundamRx from "../../Components/GundamRx";
import Store from "../../Components/Store";

const Home = () => {
  return (
    <div className="bg-red-100">
      {/* banner section */}
      <div className="my-8">
        <div className="mt-4 grid lg:grid-cols-2 sm:grid-cols-1 container  lg:container mx-auto lg:px-10">
          <div className="lg:mt-8">
            <div>
              <h1 className="lg:text-6xl lg:w-full w-10/12 text-4xl font-bold sm:mt-4">
                Collectors' Paradise: Find Rare and Exclusive Gundam Toys and
                Action Figures Here!
              </h1>
              <button className="border-2 border-slate-800 px-4 py-2 gundam-btn my-4 transition ease-in-out delay-150 bg-pink-300 hover:-translate-y-1 hover:scale-110 hover:bg-red-400 duration-300 ...">
                Explore More
              </button>
              <p className="lg:text-lg sm:text-base w-10/12">
                Step into a World of Wonder and Imagination: Explore our
                Unparalleled Collection of Robot Toys, Where Imagination Takes
                Flight
              </p>
              {/* three avatar div */}
            </div>
          </div>
          <img
            className="border-4 border-slate-900"
            src="https://i.ibb.co/s37TCVF/Gundam.png"
            alt=""
            srcSet=""
          />
        </div>
      </div>

      {/* end of banner section */}
      <div className="py-10 bg-sky-200 border-t-4 border-slate-200">
        <Gallary></Gallary>
        <div className="border-t-2 border-dotted border-slate-200 mt-8 p-12">
          <div className="flex items-center flex-col gap-3">
            <h1 className="text-center font-bold text-4xl">Shop By Catagory</h1>
            <BsFillArrowDownCircleFill className="lg:text-4xl text-xl"></BsFillArrowDownCircleFill>
          </div>
          {/* <Tabs></Tabs> */}
        </div>
      </div>
      <GundamRx></GundamRx>
      <div className="container mx-auto text-center">
        <Store></Store>
      </div>
    </div>
  );
};

export default Home;
