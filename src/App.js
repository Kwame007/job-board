import React, { useEffect } from "react";
import PageRoutes from "./components/Routes/PageRoutes";
import SearchInput from "./components/SearchInput";

function App() {
  useEffect(() => {
    // const host = "data.usajobs.gov";
    // const userAgent = "darteyw@gmail.com";
    // const authKey = "RUvksQfDicR3xPWTvlm3kkyEg5I940G03iWlalEYx5M=";
    // const fetchData = async () => {
    //   const response = await fetch("https://devitjobs.us/api/jobsLight");
    //   const data = await response.json();
    //   console.log(data);
    // };

    fetchData();
  }, []);
  return (
    <>
      <div className="bg-bg-blue h-fit">
        <div className="container max-w-7xl mx-auto p-5">
          <PageRoutes />
        </div>
      </div>
    </>
  );
}

export default App;
