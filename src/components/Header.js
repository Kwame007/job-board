import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="grid grid-cols-2 gap-5 h-9 items-center mt-5">
        <Link to="/" className="cursor-pointer">
          <h1 className="text-2xl w-36">
            <span className="font-poppins">Job</span>{" "}
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-12 before:bg-blue-500 relative inline-block">
              <span className="relative text-white italic font-semibold">
                Board
              </span>
            </span>{" "}
          </h1>
        </Link>
        <Link to="/login" className="text-right font-extrabold text-blue-500 tracking-wider">
          Login
        </Link>
      </header>
    </>
  );
};

export default Header;
