import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Job from "../../pages/Job";
import ProtectedRoutes from "../ProtectedRoutes";

const PageRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoutes />} />
          <Route path="/job" element={<Job />} />
          {/* <Route path="/protectedRoutes" element={<ProtectedRoutes />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default PageRoutes;
