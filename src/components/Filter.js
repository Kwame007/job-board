import React, { useState } from "react";
import { RiGlobalLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import useFetchJobs from "../hooks/useFetchJobs";

const Filter = () => {
  const currentPage = useSelector((state) => state.jobs.currentPage);
  const [searchQuery, setSearchQuery] = useState("");

  // get search query from input
  const getSearchQuery = (e) => {
    setSearchQuery(e.target.value);
    console.log(searchQuery);
  };

  useFetchJobs(
    currentPage,
    `https://data.usajobs.gov/api/Search?LocationName=${
      searchQuery || "Atlanta,%20Georgia"
    }&ResultsPerPage=5`
  );

  return (
    <>
      <section className="flex gap-10">
        <span className="flex items-center">
          <label htmlFor="fulltime"></label>
          <input type="checkbox" className="w-4 h-4" value={1} />
          <p className="pl-2 text-lg leading-5 font-medium text-gray-400">
            Full time
          </p>
        </span>
        <span className="flex items-center">
          <label htmlFor="remote"></label>
          <input type="checkbox" className="w-4 h-4" value={2} />
          <p className="pl-2 text-lg leading-5 font-medium text-gray-400">
            Part-Time
          </p>
        </span>
      </section>

      <section className="mt-5 ">
        <h1 className="text-lg font-bold text-text-gray mb-2 font-poppins">
          Location
        </h1>
        <aside>
          <label htmlFor="filter" className="relative">
            <RiGlobalLine className="absolute top-0 left-1 text-lg text-text-gray" />
            <input
              type="text"
              placeholder="city,state..."
              className="w-full h-12 rounded-md pl-6 shadow-blue border placeholder:tracking-wider md:placeholder:text-lg md:pl-7 "
              onChange={getSearchQuery}
              value={searchQuery}
            />
          </label>
        </aside>
        <aside className="mt-5 mx-5">
          <div className="mb-2">
            <input type="radio" name="one" id="" className="h-4 w-4" disabled />
            <label
              htmlFor="one"
              className="leading-5 text-lg font-poppins font-medium text-gray-500 ml-3"
            >
              Boston
            </label>
          </div>
          <div className="mb-2">
            <input type="radio" name="two" id="" className="h-4 w-4" disabled />
            <label
              htmlFor="two"
              className="leading-5 text-lg font-poppins font-medium text-gray-500 ml-3"
            >
              Texas
            </label>
          </div>
          <div className="mb-2">
            <input
              type="radio"
              name="three"
              id=""
              className="h-4 w-4"
              disabled
            />
            <label
              htmlFor="three"
              className="leading-5 text-lg font-poppins font-medium text-gray-500 ml-3"
            >
              New York
            </label>
          </div>
          <div className="mb-2">
            <input
              type="radio"
              name="four"
              id=""
              className="h-4 w-4"
              disabled
            />
            <label
              htmlFor="four"
              className="leading-5 text-lg font-poppins font-medium text-gray-500 ml-3"
            >
              Califonia
            </label>
          </div>
        </aside>
      </section>
    </>
  );
};

export default Filter;
