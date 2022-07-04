import React from "react";
import JobCard from "./JobCard";
import { v4 as uuidv4 } from "uuid";

const Jobs = ({ data, loading }) => {
  const jobsData = data?.SearchResult?.SearchResultItems;
  const id = uuidv4();

  return (
    <>
      {!loading &&
        jobsData?.map((job, index) => (
          <JobCard data={job} loading={loading} key={id + index} />
        ))}
    </>
  );
};

export default Jobs;
