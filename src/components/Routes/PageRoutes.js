import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Job from "../../pages/Jobs";
import Header from "../Header";
import Login from "../Login";
import ProtectedRoutes from "../ProtectedRoutes";
import SignUp from "./SignUp";

const PageRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* show limited number of jobs when not logged in */}
          <Route path="/" element={<ProtectedRoutes />} />
          <Route path="/job" element={<Job />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default PageRoutes;
