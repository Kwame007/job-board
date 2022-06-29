import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Headers from "./Header";
import SignUp from "./Routes/SignUp";

const ProtectedRoutes = () => {
  const auth = useSelector((state) => state.auth);

  if (!auth.isAuthenticated) {
    return <Navigate to="/signup" replace={true} />;
  }
  console.log(auth);
  return (
    <>
      <Navigate to="/home" replace={true} />
    </>
  );
};

export default ProtectedRoutes;
