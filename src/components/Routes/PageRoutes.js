import React from "react";
import { createPortal } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../../pages/Home";
import SignIn from "../SignIn";
import JobDetails from "../../pages/JobDetails";
import ProtectedRoutes from "../ProtectedRoutes";
import SignUp from "./SignUp";

const PageRoutes = (props) => {
  const isOpened = useSelector((state) => state.modal.isOpen);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* show limited number of jobs when not logged in */}
          <Route path="/" element={<ProtectedRoutes />} />
          <Route
            path="/signin"
            element={
              isOpened &&
              createPortal(<SignIn />, document.getElementById("signin-portal"))
            }
          />
          <Route
            path="/signup"
            element={
              isOpened &&
              createPortal(<SignUp />, document.getElementById("signup-portal"))
            }
          />
          <Route path="/job-details/:id" element={<JobDetails />} />
          <Route path="/home" element={<Home {...props} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default PageRoutes;
