import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

("react-router-dom");

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar flex justify-between border-b-4 border-slate-800 pb-1">
      {/* left navbar portion */}
      <div className="border-dark w-fit p-2 rounded">
        <span className="lg:inline-block">
          <img
            className="h-[40px] w-[40px] rounded"
            src="/public/letter-g.png"
            alt=""
            srcSet=""
          />
        </span>
        <h1 className="text-2xl font-extrabold pt-3">GUNDAM</h1>
      </div>
      {/* middle portion */}
      <div className="lg:flex gap-4 hidden">
        <Link className="text-sm font-bold me-2 pt-2 hover:text-indigo-700">
          Home
        </Link>
        <Link className="text-sm font-bold me-2 pt-2 hover:text-indigo-700">
          About
        </Link>
        <Link className="text-sm font-bold me-2 pt-2 hover:text-indigo-700">
          All toys
        </Link>
        <Link className="text-sm font-bold me-2 pt-2 hover:text-indigo-700">
          Login
        </Link>
      </div>
      {/* buttons */}
      <div className="">
        <Link className="lg:inline-block hidden rounded bg-slate-800 px-8 py-3 text-base text-white font-bold transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">
          Login
        </Link>

        {/* res list */}
        <div className="relative lg:hidden">
          <button onClick={toggleMenu} className="btn-circle me-2 btn">
            <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown>
          </button>
          {menuOpen && (
            <ul className="absolute border-4 border-dark text-sm text-dark right-4 mt-3 bg-amber-200 rounded px-6">
              <li className="px-4 border rounded hover:bg-amber-100 py-1 my-1">
                Home
              </li>
              <li className="px-4 border rounded hover:bg-amber-100 py-1 mb-1">
                About
              </li>
              <li className="px-4 border rounded hover:bg-amber-100 py-1 mb-1">
                Login
              </li>
              <li className="px-4 border rounded hover:bg-amber-100 py-1 mb-1">
                Blog
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
