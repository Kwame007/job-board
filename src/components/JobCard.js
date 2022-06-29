import React from "react";
import { RiTimeLine } from "react-icons/ri";
import { RiGlobalLine } from "react-icons/ri";

import img from "../assets/images/kasisto.png";
import img2 from "../assets/images/Andela.webp";
const JobCard = () => {
  return (
    <>
      <div className="bg-white shadow-blue w-full p-3 rounded-md h-147 flex gap-3 items-center mb-5 hover:cursor-pointer ">
        <img src={img} alt="" className="block w-90 h-90 rounded-md" />
        <div className="w-full font-roboto text-text-blue">
          <h2 className="font-roboto text-sm mb-1 leading-4 font-bold">
            Kasisto
          </h2>
          <p className="text-base leading-5 font-normal mb-2">
            Front-End Software Engineer
          </p>
          <div className=" justify-between items-center md:flex">
            <div className="w-20 border border-text-blue font-bold p-1 rounded-md ">
              <span>Full time</span>
            </div>
            <div className="flex justify-between w-full  pt-3 md:w-60 md:pt-0">
              <span className="flex gap-2 justify-center items-center">
                <RiGlobalLine className="text-text-gray" />
                <p className="text-xs leading-4 text-text-gray">NY or LA</p>
              </span>
              <span className="flex gap-2 justify-center items-center">
                <RiTimeLine className="text-text-gray" />
                <p className="text-xs leading-4 text-text-gray">5 days ago</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-blue w-full p-3 rounded-md h-147 flex gap-3 items-center mb-5 hover:cursor-pointer">
        <img src={img2} alt="" className="block w-90 h-90 rounded-md" />
        <div className="w-full font-roboto text-text-blue">
          <h2 className="font-roboto text-sm mb-1 leading-4 font-bold">
            Kasisto
          </h2>
          <p className="text-base leading-5 font-normal mb-2">
            Front-End Software Engineer
          </p>
          <div className=" justify-between items-center md:flex">
            <div className="w-20 border border-text-blue font-bold p-1 rounded-md ">
              <span>Full time</span>
            </div>
            <div className="flex justify-between w-full  pt-3 md:w-60 md:pt-0">
              <span className="flex gap-2 justify-center items-center">
                <RiGlobalLine className="text-text-gray" />
                <p className="text-xs leading-4 text-text-gray">NY or LA</p>
              </span>
              <span className="flex gap-2 justify-center items-center">
                <RiTimeLine className="text-text-gray" />
                <p className="text-xs leading-4 text-text-gray">5 days ago</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobCard;
