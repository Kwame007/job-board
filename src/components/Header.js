import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/images/logo.svg";

const Header = () => {
  const auth = useSelector((state) => state.auth.isAuthenticated);
  console.log(auth);
  return (
    <>
      <header className="grid grid-cols-2 gap-5 h-9 items-center mt-5">
        <Link to="/" className="cursor-pointer">
          <h1 className="text-2xl w-52">
            <span className="font-poppins">Job</span>{" "}
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-blue-500 relative inline-block w-fit">
              <span className="relative text-white italic font-semibold flex">
                Board
                <img src={logo} alt="" className="w-8 inline-block p-1" />
              </span>
            </span>{" "}
          </h1>
        </Link>
        {/* show when user is not authenticated  */}
        {!auth && (
          <Link
            to="/login"
            className="text-right font-extrabold text-blue-500 tracking-wider"
          >
            Login
          </Link>
        )}

        {/* show when user is authenticated  */}
        {auth && (
          <Link
            to="/logout"
            className="text-right font-extrabold text-blue-500 tracking-wider"
          >
            Logout
          </Link>
        )}
      </header>
    </>
  );
};

export default Header;
