import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBookMarked } from "../store/BookMarkedSlice";
import { RiTimeLine } from "react-icons/ri";
import { RiGlobalLine } from "react-icons/ri";
import { RiBookmarkLine } from "react-icons/ri";
import { RiBookmarkFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { openModal } from "../store/ModalSlice";
import { setDoc, doc } from "firebase/firestore";
import db from "../firebase/firestore";

const JobCard = ({ data, loading }) => {
  // bookmark
  const isBookMarked = useSelector((state) => state.bookMarked.isBookMarked);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const bookMarked = useSelector((state) => state.bookMarked.bookMarked);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // get jobs result from redux
  const {
    SearchResult: { SearchResultItems },
  } = useSelector((state) => state.jobs.jobsResults);

  // bookmark function
  const handleBookMark = () => {
    // check if user is authenticated
    if (!isAuthenticated) {
      navigate("/signin", { replace: true });
      dispatch(openModal());
    } else {
      dispatch(addBookMarked(data));
    }
  };

  // store specific job data in firebase firestore
  const handleStoreJob = async () => {
    try {
      // find job by id that matches the clicked job
      const job = SearchResultItems?.find(
        (job) => job.MatchedObjectId === jobDetails.PositionID
      );

      await setDoc(doc(db, "jobDetails", jobDetails.PositionID), {
        job,
        id: jobDetails.PositionID,
      });
      console.log("sucessfully stored job");
    } catch (error) {
      console.log(error);
    }
  };

  // jobs data object
  const jobDetails = {
    PositionID: data?.MatchedObjectId,
    PositionTitle: data?.MatchedObjectDescriptor?.PositionTitle,
    PositionType: data?.MatchedObjectDescriptor?.PositionType,
    PositionOrganisation: data?.MatchedObjectDescriptor?.OrganizationName,
    PositionDescription:
      data?.MatchedObjectDescriptor?.UserArea?.Details?.JobSummary,
    PositionPostedDate: data?.MatchedObjectDescriptor?.PositionPostedDate,
    PositionLocation: data?.MatchedObjectDescriptor?.PositionLocationDisplay,
  };

  return (
    <>
      <motion.div
        className=" transition-all duration-500 bg-white shadow-blue w-full p-3 rounded-md h-fit grid grid-cols-1 gap-2 items-center mb-5 hover:cursor-pointer hover:bg-light-blue "
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        <div className="w-full font-roboto text-text-blue">
          <span className="md:flex md:justify-between md:items-center">
            <h4 className="font-roboto text-lg  leading-6 font-bold underline hover:text-light-blue">
              <Link
                to={`/job-details/${jobDetails.PositionID}`}
                onClick={handleStoreJob}
              >
                {" "}
                {jobDetails.PositionTitle}{" "}
              </Link>
            </h4>
            {!isBookMarked ? (
              <RiBookmarkLine
                className="mt-5 w-5 h-5 cursor-pointer md:mt-0"
                onClick={handleBookMark}
              />
            ) : (
              <RiBookmarkFill className="mt-5 w-5 h-5 cursor-pointer md:mt-0" />
            )}
          </span>
        </div>
        <div className="text-sm md:flex  md:items-center   md:w-9/12 md:gap-5">
          <span className="md:w-1/4 block">
            <p className="my-3 text-xs text-gray-600 font-bold md:my-4">
              {" "}
              {jobDetails.PositionOrganisation}
            </p>
          </span>
          <span className=" grid grid-cols-2 gap-5 items-center">
            <span className="flex items-center gap-1 border-r md:border-l md:pl-1">
              <RiGlobalLine className="text-text-gray w-5 " />
              <p className=" text-xs leading-4 pr-1 text-text-gray">
                {jobDetails.PositionLocation}
              </p>
            </span>
            <span className="flex items-center gap-1">
              <RiTimeLine className="text-text-gray" />
              <p className=" text-xs leading-4 text-text-gray">5 days ago</p>
            </span>
          </span>
        </div>
        <div>
          <p className="text-gray-500 py-3 truncate">
            {jobDetails.PositionDescription}
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default JobCard;
