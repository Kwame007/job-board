import React from "react";
import { RiSuitcaseLine } from "react-icons/ri";

const SearchInput = () => {
  return (
    <React.Fragment>
      <div className=" mt-12 h-32 bg-bg-img bg-center bg-cover bg-no-repeat rounded-md flex font-roboto md:h-56 ">
        <div className="  w-full flex ">
          <label
            htmlFor="search"
            className="block relative  w-11/12 mx-auto h-fit my-auto"
          >
            <RiSuitcaseLine className="absolute top-5 p-1 text-2xl text-text-gray md:text-4xl" />
            <input
              type="text"
              placeholder="titles,companies..."
              className=" block h-16 rounded-md w-full mx-auto pl-6 placeholder:tracking-wider md:h-20 md:placeholder:text-lg md:pl-9"
            />
            <button className="absolute top-2 right-1 bg-blue-500 text-white p-3 rounded-md h-12 w-24 tracking-widest text-lg md:top-4 md:w-40 md:hover:bg-blue-600 md:transition-all md:duration-500">
              Search
            </button>
          </label>
        </div>
      </div>
      {/* <div className="flex gap-5 w-9/12 mt-5 md:gap-10">
        <span className="flex justify-between items-center">
          <input type="checkbox" className="block" />
          <p className="text-lg tracking-wide font-medium pl-2">Full Time</p>
        </span>
        <span className="flex justify-between items-center">
          <input type="checkbox" className="block" />
          <p className="text-lg tracking-wide font-medium pl-2">Remote</p>
        </span>
      </div> */}
    </React.Fragment>
  );
};

export default SearchInput;
