import React from "react";
import { Link } from "react-router-dom";
import { ImGoogle } from "react-icons/im";

const Signup = () => {
  return (
    <div className="bg-[url(https://i.ibb.co/fXt5NTb/RX-78-2-Grand-Daddy-Gundam.jpg)] bg-cover bg-center bg-opacity-95 w-full h-full">
      <div className="card-body flex justify-center items-center">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg bg-pink-100 border-2 border-slate-800 px-5 py-1 rounded">
              Email
            </span>
          </label>
          <input
            type="text"
            placeholder="email"
            name="email"
            className="input border-2 border-slate-950"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg bg-pink-100 border-2 border-slate-800 px-5 py-1 rounded">
              Name
            </span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            className="input border-2 border-slate-950"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg bg-pink-100 border-2 border-slate-800 px-5 py-1 rounded">
              Password
            </span>
          </label>
          <input
            type="text"
            placeholder="password"
            name="password"
            className="input border-2 border-slate-950"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg bg-pink-100 border-2 border-slate-800 px-5 py-1 rounded">
              Photo URL
            </span>
          </label>
          <input
            type="url"
            placeholder="User Photo URl"
            name="url"
            className="input border-2 border-slate-950"
          />
        </div>
        <>
          <p className="text-xs bg-red-50 font-bold px-3 py-1 rounded">
            Aready have an account?
            <Link className="text-base link link-hover" to="/login">
              Log In
            </Link>
          </p>
        </>

        <div className="form-control mt-6">
          <button className="btn">Login</button>
        </div>
      </div>
      <div className="divider text-white font-bold">OR</div>
      {/* sign in with google */}
      <div className="text-center text-lg bg-pink-100 text-dark font-bold py-3">
        Sign Up using Google{" "}
        <button className="btn btn-circle btn-outline">
          <ImGoogle></ImGoogle>
        </button>
      </div>
    </div>
  );
};

export default Signup;
