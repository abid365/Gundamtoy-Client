import React from "react";

const Home = () => {
  return (
    <div className=" bg-red-100">
      {/* banner section */}
      <div className="bg-red-100">
        <div className="mt-4 grid lg:grid-cols-2 sm:grid-cols-1 container mx-auto lg:container lg:mx-auto">
          <div className="lg:mt-8">
            <div>
              <h1 className="lg:text-6xl lg:w-full w-10/12 text-5xl font-bold sm:mt-4">
                Collectors' Paradise: Find Rare and Exclusive Gundam Toys and
                Action Figures Here!
              </h1>
              <button className="border-2 border-slate-800 px-4 py-2 gundam-btn my-4 transition ease-in-out delay-150 bg-pink-300 hover:-translate-y-1 hover:scale-110 hover:bg-red-400 duration-300 ...">
                Explore More
              </button>
              <p className="text-lg w-10/12">
                Step into a World of Wonder and Imagination: Explore our
                Unparalleled Collection of Robot Toys, Where Imagination Takes
                Flight
              </p>
              {/* three avatar div */}
              <div className="grid grid-cols-3 gap-1 mt-5">
                {/* 1 */}
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src="https://i.ibb.co/rGWJGts/jeffery-ho-Zt-TI0-BAxf2-U-unsplash.jpg" />
                  </div>
                </div>
                {/* 2 */}
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src="https://i.ibb.co/rGWJGts/jeffery-ho-Zt-TI0-BAxf2-U-unsplash.jpg" />
                  </div>
                </div>
                {/* 3 */}
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src="https://i.ibb.co/rGWJGts/jeffery-ho-Zt-TI0-BAxf2-U-unsplash.jpg" />
                  </div>
                </div>
              </div>
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
    </div>
  );
};

export default Home;
