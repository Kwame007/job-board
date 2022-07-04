import React from "react";
import Filter from "../components/Filter";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import Pagination from "../components/Pagination";
import Jobs from "../components/Jobs";

const Home = ({
  currentPage,
  maxPageLimit,
  minPageLimit,
  loading,
  data,
  onPrevClick,
  onNextClick,
  onPageChange,
}) => {
  const paginationAttributes = {
    currentPage,
    maxPageLimit,
    minPageLimit,
    data,
    loading,
  };

  return (
    <>
      <Header />
      <SearchInput />
      <section className=" mt-10 gap-10 md:flex md:gap-20">
        <div className=" md:w-2/5">
          {" "}
          <Filter />
        </div>
        <div className="pt-10 md:pt-0 md:w-full">
          {" "}
          <Jobs data={data} loading={loading} />
          {!loading ? (
            <Pagination
              {...paginationAttributes}
              onPrevClick={onPrevClick}
              onNextClick={onNextClick}
              onPageChange={onPageChange}
            />
          ) : (
            <div> Loading... </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
