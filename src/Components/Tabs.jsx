import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const [perfect, setPerfect] = useState([]);
  const [higher, setHigher] = useState([]);
  const [master, setMaster] = useState([]);

  useEffect(() => {
    fetch(`https://assignment-11-server-one-henna.vercel.app/toys?`)
      .then((res) => res.json())
      .then((data) => {
        setPerfect(data);
        setHigher(data);
        setMaster(data);
      });
  }, []);

  // filtered data
  const filteredPerfect = perfect
    .filter((pgrade) => pgrade.Sub_category)
    .slice(0, 2);

  const filteredHigher = higher
    .filter((hgrade) => hgrade.Sub_category)
    .slice(1, 3);

  const filteredMaster = higher
    .filter((mgrade) => mgrade.Sub_category)
    .slice(3, 5);

  console.log(filteredPerfect);

  return (
    <div className="mx-2">
      <div className="flex justify-center my-6 border-2 border-slate-800 rounded-lg">
        <div
          className={`px-4 py-2 cursor-pointer ${
            activeTab === 1
              ? "bg-pink-300 text-dark"
              : "bg-gray-300 text-gray-700"
          }`}
          onClick={() => handleTabClick(1)}
        >
          Perfect grade
        </div>
        <div
          className={`px-4 py-2 cursor-pointer ${
            activeTab === 2
              ? "bg-pink-300 text-dark"
              : "bg-gray-300 text-gray-700"
          }`}
          onClick={() => handleTabClick(2)}
        >
          Higher Grade
        </div>
        <div
          className={`px-4 py-2 cursor-pointer ${
            activeTab === 3
              ? "bg-pink-300 text-dark"
              : "bg-gray-300 text-gray-700"
          }`}
          onClick={() => handleTabClick(3)}
        >
          Master Grade
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        {activeTab === 1 && (
          <div className=" bg-white py-3 w-fit px-3">
            {filteredPerfect.map((pg) => (
              <div
                key={pg._id}
                className="card w-72 border-2 border-slate-700 p-2 my-3"
              >
                <figure>
                  <img src={pg.PictureURL} alt="car!" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-bold border-2 border-slate-800 px-1 py-1 rounded">
                    {pg.ToyName}
                  </h2>
                  <p>Price: {pg.Price}</p>
                  <p className="">Rating {pg.Rating}</p>
                  <small>{pg.Description}</small>
                  <div className="card-actions justify-start">
                    <Link to="/alltoys" className="btn btn-primary">
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeTab === 2 && (
          <div className=" bg-white py-3 w-fit px-3">
            {filteredHigher.map((hg) => (
              <div
                key={hg._id}
                className="card w-72 border-2 border-slate-700 p-2 my-3"
              >
                <figure>
                  <img src={hg.PictureURL} alt="car!" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-bold border-2 border-slate-800 px-1 py-1 rounded">
                    {hg.ToyName}
                  </h2>
                  <p>Price: {hg.Price}</p>
                  <p className="">Rating {hg.Rating}</p>
                  <small>{hg.Description}</small>
                  <div className="card-actions justify-start">
                    <Link to="/alltoys" className="btn btn-primary">
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}{" "}
          </div>
        )}
        {activeTab === 3 && (
          <div className=" bg-white py-3 w-fit px-3">
            {filteredMaster.map((mg) => (
              <div
                key={mg._id}
                className="card w-72 border-2 border-slate-700 p-2 my-3"
              >
                <figure>
                  <img src={mg.PictureURL} alt="car!" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-bold border-2 border-slate-800 px-1 py-1 rounded">
                    {mg.ToyName}
                  </h2>
                  <p>Price: {mg.Price}</p>
                  <p className="">Rating {mg.Rating}</p>
                  <small>{mg.Description}</small>
                  <div className="card-actions justify-start">
                    <Link to="/alltoys" className="btn btn-primary">
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
