import React from "react";
import { RiGlobalLine } from "react-icons/ri";

const Filter = () => {
  return (
    <>
      <section className="flex gap-10">
        <span className="flex items-center">
          <label htmlFor="fulltime"></label>
          <input type="checkbox" className="w-4 h-4" />
          <p className="pl-2 text-lg leading-5 font-medium text-gray-400">
            Full time
          </p>
        </span>
        <span className="flex items-center">
          <label htmlFor="remote"></label>
          <input type="checkbox" className="w-4 h-4" />
          <p className="pl-2 text-lg leading-5 font-medium text-gray-400">
            Remote
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
              placeholder="city,state,country..."
              className="w-full h-12 rounded-md pl-6 shadow-blue border placeholder:tracking-wider md:placeholder:text-lg md:pl-7 "
            />
          </label>
        </aside>
        <aside className="mt-5 mx-5">
          <div className="mb-2">
            <input type="radio" name="one" id="" className="h-4 w-4" />
            <label
              htmlFor="one"
              className="leading-5 text-lg font-poppins font-medium text-gray-500 ml-3"
            >
              London
            </label>
          </div>
          <div className="mb-2">
            <input type="radio" name="two" id="" className="h-4 w-4" />
            <label
              htmlFor="two"
              className="leading-5 text-lg font-poppins font-medium text-gray-500 ml-3"
            >
              Amsterdam
            </label>
          </div>
          <div className="mb-2">
            <input type="radio" name="three" id="" className="h-4 w-4" />
            <label
              htmlFor="three"
              className="leading-5 text-lg font-poppins font-medium text-gray-500 ml-3"
            >
              New York
            </label>
          </div>
          <div className="mb-2">
            <input type="radio" name="four" id="" className="h-4 w-4" />
            <label
              htmlFor="four"
              className="leading-5 text-lg font-poppins font-medium text-gray-500 ml-3"
            >
              Berlin
            </label>
          </div>
        </aside>
      </section>
    </>
  );
};

export default Filter;
