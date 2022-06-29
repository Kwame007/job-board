import React from "react";
import Filter from "../components/Filter";
import Header from "../components/Header";
import JobCard from "../components/JobCard";
import SearchInput from "../components/SearchInput";

const Home = () => {
  return (
    <>
      <Header />
      <SearchInput />
      <section className=" mt-10 gap-10 md:flex md:gap-20">
        <div className=" md:w-2/5">
          {" "}
          <Filter />
        </div>
        <div className="md:w-full">
          {" "}
          <JobCard />
        </div>
      </section>
    </>
  );
};

export default Home;
