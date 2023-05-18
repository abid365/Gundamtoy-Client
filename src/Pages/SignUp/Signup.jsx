import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="mx-auto mt-5">
      <button className="btn">
        <Link to="/login">Back to Login</Link>
      </button>
    </div>
  );
};

export default Signup;
