import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logo from "../assets/images/logo.svg";
import { openModal } from "../store/ModalSlice";
import { getAuth, signOut } from "firebase/auth";
import { logout } from "../store/AuthSlice";

const Header = () => {
  

  const auth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // open login modal
  const openLoginModal = () => {
    dispatch(openModal());
  };

  // handle logout
  const handleLogout = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.

        // set isAuthenticated to false
        dispatch(logout(false));

        // clear session storage
        sessionStorage.removeItem("isAuthenticated");

        // redirect to home page
        navigate("/home", { replace: true });
      })
      .catch((error) => {
        // An error happened.
      });
  };

 
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
            to="/signin"
            className="text-right font-extrabold text-blue-500 tracking-wider"
            onClick={openLoginModal}
          >
            Login
          </Link>
        )}

        {/* show when user is authenticated  */}
        {auth && (
          <button
            className="text-right font-extrabold text-blue-500 tracking-wider"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </header>
    </>
  );
};

export default Header;
