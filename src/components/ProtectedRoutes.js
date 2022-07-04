import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  // const auth = useSelector((state) => state.auth);

  // if (!auth.isAuthenticated) {
  //   console.log(auth);
  //   return <Navigate to="/signup" replace={true} />;
  // }

  return (
    <>
      <Navigate to="/home" replace={true} />
    </>
  );
};

export default ProtectedRoutes;
