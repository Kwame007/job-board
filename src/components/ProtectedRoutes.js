import React from "react";
import { useSelector } from "react-redux";
import Home from "../pages/Home";

const ProtectedRoutes = () => {
  const auth = useSelector((state) => state.auth);

  // if (!auth.isAuthenticated) {
  //   return <div>You are not authenticated</div>;
  // }
  console.log(auth);
  return (
    <>
      <Home />
    </>
  );
};

export default ProtectedRoutes;
