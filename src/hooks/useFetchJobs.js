import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobs, setLoading } from "../store/JobSlice";

const useFetchJobs = (currentPage, url) => {
  const jobsResults = useSelector((state) => state.jobs.jobsResults);
  const dispatch = useDispatch();

  useEffect(() => {
    const host = "data.usajobs.gov";
    const userAgent = "darteyw@gmail.com";
    const authKey = "RUvksQfDicR3xPWTvlm3kkyEg5I940G03iWlalEYx5M=";

    const fetchData = async () => {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Host: host,
          "User-Agent": userAgent,
          "Authorization-Key": authKey,
        },
      });

      const data = await response.json();

      // get jobs data
      dispatch(getJobs(data));
      dispatch(setLoading(false));
    };

    fetchData();
  }, [currentPage, dispatch, url]);

  return jobsResults;
};

export default useFetchJobs;
