import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { UserContext } from "../Auth/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

("react-router-dom");

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOut } = useContext(UserContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
        if (result == undefined) {
          toast("✅ Logged out SuccessFully!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((error) => {
        console.error(error);
        if (error) {
          toast("Plsease Try Again!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      ></ToastContainer>
      <div className="navbar flex justify-between border-b-4 border-slate-800 pb-1">
        {/* left navbar portion */}
        <div className="border-dark w-fit p-2 rounded">
          <span className="lg:inline-block">
            <img
              className="h-[40px] w-[40px] rounded"
              src="https://i.ibb.co/3TByMVb/letter-g.png"
              alt=""
              srcSet=""
            />
          </span>
          <h1 className="text-2xl font-extrabold pt-3 text-white">GUNDAM</h1>
        </div>
        {/* middle portion */}
        <div className="lg:flex gap-4 hidden text-white">
          <Link
            to="/"
            className="text-sm font-bold me-2 pt-2 hover:text-indigo-700"
          >
            Home
          </Link>
          <Link
            to="/alltoys"
            className="text-sm font-bold me-2 pt-2 hover:text-indigo-700"
          >
            All Toys
          </Link>
          {user?.email ? (
            <Link
              to="/addtoys"
              className="text-sm font-bold me-2 pt-2 hover:text-indigo-700"
            >
              Add toys
            </Link>
          ) : (
            ""
          )}
          {user?.email ? (
            <Link
              to="/mytoys"
              className="text-sm font-bold me-2 pt-2 hover:text-indigo-700"
            >
              My Toys
            </Link>
          ) : (
            ""
          )}
          <Link
            to="blog"
            className="text-sm font-bold me-2 pt-2 hover:text-indigo-700"
          >
            Blog
          </Link>
        </div>
        {/* buttons */}
        <div className="">
          {user ? (
            <div className="flex items-center gap-1">
              <Link
                onClick={handleLogOut}
                className="lg:inline-block hidden rounded bg-slate-800 px-8 py-3 text-base text-white font-bold transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
              >
                Log Out
              </Link>

              <div className="avatar sm:me-1">
                <div className="w-12 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="lg:inline-block hidden rounded bg-slate-800 px-8 py-3 text-base text-white font-bold transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500 animate-pulse"
            >
              Log In
            </Link>
          )}
          {/* responsive list */}
          <div className="ms-1 relative z-50 lg:hidden">
            <button onClick={toggleMenu} className="btn-circle me-2 btn">
              <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown>
            </button>
            {menuOpen && (
              <ul className="absolute dropdown-content border-2 border-slate-800 menu p-2 right-4 mt-3 shadow bg-base-100 rounded-box w-40 text-center px-6">
                <li className="my-1">
                  <Link to="/">Home</Link>
                </li>
                <li className=" mb-1">
                  <Link to="/alltoys">All toy</Link>
                </li>
                <li className=" mb-1">
                  {user ? <Link to="/addtoys">Add toys</Link> : ""}
                </li>
                <li className=" mb-1">
                  {user ? <Link to="/mytoys">My toys</Link> : ""}
                </li>
                {user ? (
                  <li className=" mb-1">
                    <Link onClickCapture={handleLogOut}>Log out</Link>
                  </li>
                ) : (
                  <li className=" mb-1 animate-pulse text-green-500">
                    <Link to="login">Log in</Link>
                  </li>
                )}
                <li className=" mb-1">
                  <Link to="blog">Blog</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
