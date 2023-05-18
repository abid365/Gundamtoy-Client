import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar";
import Footer from "../Shared/Footer";

const Main = () => {
  return (
    <div className="parent">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <div className="footer-web">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
