import React from "react";

const GundamRx = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-2 px-10 py-10 bg-white text-black">
      <div className="lg:border-l-4 lg:border-sky-400 ">
        <img
          src="https://d3fa68hw0m2vcc.cloudfront.net/dcd/253299797.jpeg"
          alt=""
        />
      </div>
      <div className="">
        <h1 className="text-5xl font-extrabold">
          Introducing the legendary RX-78-2 Gundam, a masterpiece of engineering
          and a symbol of power and resilience!
        </h1>
        <p className="">
          Step into the cockpit and experience the thrill of piloting this
          iconic mobile suit. With its sleek white armor, striking blue accents,
          and fiery red highlights, the RX-78-2 Gundam stands as a true marvel
          of design.
        </p>
        <p className="font-bold text-5xl text-red rounded-full bg-sky-300 w-fit mt-5">
          $23.00
        </p>
        <h1 className="pt-2">Grab Now, Limited deal</h1>
        <div className="">
          <h1 className="text-3xl mt-4 font-bold text-sky-400">
            Sold: More than 70%
          </h1>
          <div
            className="radial-progress"
            style={{ "--value": "70", "--size": "3rem", "--thickness": "2px" }}
          >
            70%
          </div>
        </div>
      </div>
    </div>
  );
};

export default GundamRx;
