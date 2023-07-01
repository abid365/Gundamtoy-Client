import React from "react";

const Gallary = () => {
  return (
    <div className="my-10 container mx-auto">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 items-end">
        {/* casousel for left grid item */}
        <div className="">
          <h1 className="my-2 text-xl text-dark font-bold flex justify-center">
            Gundam Toy's Gallary: Scroll To View
          </h1>
          <div className="h-96 carousel carousel-vertical border-4 border-slate-950 rounded-box w-fit">
            <div className="carousel-item h-full w-fit">
              <img src="https://i.ibb.co/Bg1BSp6/Gundam-RX-78-2-Isha-Sumantapura.jpg" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://i.ibb.co/5ss1437/gundam-art.jpg" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://i.ibb.co/jDfKGbp/yellow-gungdam.png" />
            </div>
          </div>
        </div>
        {/* text for left grid */}
        <div className="pb-5 text-black">
          <h1 className="font-bold text-dark text-6xl">
            Welcome to Gundam Universe: Your Ultimate Destination for Epic
            Gundam Adventures
          </h1>
          <p className="border-b-2  border-slate-500">
            "Courage is the magic that turns dreams into reality." - Amuro Ray,
            Mobile Suit Gundam
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
