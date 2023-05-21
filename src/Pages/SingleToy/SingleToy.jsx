import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const SingleToy = () => {
  const toy = useLoaderData();
  const {
    ToyName,
    Price,
    AvailableQuantity,
    Rating,
    PictureURL,
    SellerName,
    SellerEmail,
    Description,
  } = toy;
  return (
    <div className="bg-[url(https://i.ibb.co/fXt5NTb/RX-78-2-Grand-Daddy-Gundam.jpg)] bg-cover bg-center bg-opacity-95 w-full h-full flex justify-center items-center">
      <div className="card w-96 glass my-10 border-2 border-slate-900">
        <figure>
          <img src={PictureURL} alt="car!" />
        </figure>
        <div className="card-body text-white font-bold">
          <h2 className="card-title">Figure: {ToyName}</h2>
          <p>Price: ${Price}</p>
          <p className="">Availbele: {AvailableQuantity} pcs</p>
          <p className="">Seller: {SellerName}</p>
          <p className="">Contact: {SellerEmail}</p>
          <small>
            About {ToyName}: {Description}
          </small>
          <Link className="btn text-white" to="/mytoys">
            Go to My Toys
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
