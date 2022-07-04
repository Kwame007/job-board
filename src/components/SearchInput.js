import React, { useState } from "react";
import { RiSuitcaseLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import useFetchJobs from "../hooks/useFetchJobs";

const SearchInput = (props) => {
  const [searchQuery, setSearchQuery] = useState("");

  const currentPage = useSelector((state) => state.jobs.currentPage);

  // get search query from input
  const getSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  useFetchJobs(
    currentPage,
    `https://data.usajobs.gov/api/Search?Keyword=${
      searchQuery || "software"
    }&PositionTitle=${searchQuery || "software developer"}&ResultsPerPage=5`
  );

  return (
    <React.Fragment>
      <div className=" mt-12 h-32 bg-bg-img bg-center bg-cover bg-no-repeat rounded-md flex font-roboto md:h-56 ">
        <div className="  w-full flex ">
          <form className="w-full flex">
            <label
              htmlFor="search"
              className="block relative  w-11/12 mx-auto h-fit my-auto"
            >
              <RiSuitcaseLine className="absolute top-5 p-1 text-2xl text-text-gray md:text-4xl" />
              <input
                type="text"
                placeholder="titles,companies..."
                className=" block h-16 rounded-md w-full mx-auto pl-6 placeholder:tracking-wider md:h-20 md:placeholder:text-lg md:pl-9"
                onChange={getSearchQuery}
                value={searchQuery}
              />
              <button
                className="absolute top-2 right-1 bg-blue-500 text-white p-3 rounded-md h-12 w-24 tracking-widest text-lg md:top-2 md:w-40 md:h-16 md:hover:bg-blue-600 md:transition-all md:duration-500"
                type="submit"
              >
                Search
              </button>
            </label>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchInput;
