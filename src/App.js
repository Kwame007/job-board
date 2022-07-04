import React, { useState, useEffect } from "react";
import PageRoutes from "./components/Routes/PageRoutes";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./store/AuthSlice";
import { setCurrentPage } from "./store/JobSlice";
import useFetchJobs from "./hooks/useFetchJobs";

function App() {
  const currentPage = useSelector((state) => state.jobs.currentPage);
  const dispatch = useDispatch();
  const pageNumberLimit = 5;
  const loading = useSelector((state) => state.jobs.loading);

  const [maxPageLimit, setMaxPageLimit] = useState(5);
  const [minPageLimit, setMinPageLimit] = useState(0);

  // get current jobs data
  const jobsResults = useFetchJobs(
    currentPage,
    `https://data.usajobs.gov/api/Search?Keyword=software&Page=${currentPage}&ResultsPerPage=5`
  );
  console.log(jobsResults);

  const onPageChange = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  // handle previous page click
  const onPrevClick = () => {
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageLimit(maxPageLimit - pageNumberLimit);
      setMinPageLimit(minPageLimit - pageNumberLimit);
    }
    dispatch(setCurrentPage(currentPage - 1));
    // dispatch(setCurrentPage((prev) => prev - 1));
  };

  // handle next page click
  const onNextClick = () => {
    if (currentPage + 1 > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + pageNumberLimit);
      setMinPageLimit(minPageLimit + pageNumberLimit);
    }
    dispatch(setCurrentPage(currentPage + 1));
    // dispatch(setCurrentPage((prev) => prev + 1));
  };

  // pagination properties
  const paginationAttributes = {
    currentPage,
    maxPageLimit,
    minPageLimit,
    data: jobsResults,
    loading,
  };

  // check if user is authenticated on mount
  useEffect(() => {
    if (sessionStorage.getItem("isAuthenticated") === "true") {
      dispatch(login(true));
      console.log("already authenticated");
    }
  }, [dispatch]);

  // fetch data on mount
  // useEffect(() => {
  //   const host = "data.usajobs.gov";
  //   const userAgent = "darteyw@gmail.com";
  //   const authKey = "RUvksQfDicR3xPWTvlm3kkyEg5I940G03iWlalEYx5M=";

  //   const fetchData = async () => {
  //     const response = await fetch(
  //       `https://data.usajobs.gov/api/Search?Keyword=software&Page=${currentPage}&ResultsPerPage=5`,
  //       {
  //         method: "GET",
  //         headers: {
  //           Host: host,
  //           "User-Agent": userAgent,
  //           "Authorization-Key": authKey,
  //         },
  //       }
  //     );

  //     const data = await response.json();

  //     // get jobs data
  //     dispatch(getJobs(data));
  //     dispatch(setLoading(false));
  //   };

  //   fetchData();
  // }, [currentPage, dispatch]);

  return (
    <>
      <div className="bg-bg-blue h-fit md:h-fit">
        <div className="container max-w-7xl mx-auto p-5">
          <PageRoutes
            {...paginationAttributes}
            onPrevClick={onPrevClick}
            onNextClick={onNextClick}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </>
  );
}

export default App;
