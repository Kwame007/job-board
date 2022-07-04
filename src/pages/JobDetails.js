import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { HiOutlineExternalLink } from "react-icons/hi";
import { getDoc, doc } from "firebase/firestore";
import db from "../firebase/firestore";
import { setCurrentPage } from "../store/JobSlice";
import { useDispatch } from "react-redux";
import Modal from "../Modal";
import moment from "moment";

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState({});
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  // fectch job details from firebase firestore
  useEffect(() => {
    const getJobDetails = async () => {
      try {
        const docRef = doc(db, "jobDetails", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const { job } = docSnap.data();
          setJob(job);
          setLoading(false);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      } catch (error) {
        console.log(error);
      }
    };

    getJobDetails();
  }, [id]);

  const jobDetails = {
    PositionID: job?.MatchedObjectId,
    PositionTitle: job?.MatchedObjectDescriptor?.PositionTitle,
    PositionType: job?.MatchedObjectDescriptor?.PositionType,
    PositionOrganisation: job?.MatchedObjectDescriptor?.OrganizationName,
    PositionDescription:
      job?.MatchedObjectDescriptor?.UserArea?.Details?.JobSummary,
    PositionPostedDate: job?.MatchedObjectDescriptor?.PositionPostedDate,
    PositionLocation: job?.MatchedObjectDescriptor?.PositionLocationDisplay,
    PositionApplyLink: job?.MatchedObjectDescriptor?.PositionURI,
    PositionQualificationSummary:
      job?.MatchedObjectDescriptor?.QualificationSummary,

    PositionOtherInfo:
      job?.MatchedObjectDescriptor?.UserArea?.Details?.OtherInformation,
    PositionHowToApply:
      job?.MatchedObjectDescriptor?.UserArea?.Details?.HowToApply,
    PositionPublicationStartDate: moment(
      job?.MatchedObjectDescriptor?.PublicationStartDate
    ).fromNow(),
  };

  return (
    <div>
      {loading && <Modal />}
      {!loading && (
        <section className="grid grid-cols-1 md:flex">
          <div className=" hidden md:block w-4/12  md:p-5">
            <div className="border-r-2">
              <div className=" mb-10 ">
                <button
                  className="text-sm font-bold text-text-blue capitalize flex items-center gap-2 transition-all duration-500 hover:text-light-blue"
                  onClick={() => {
                    // set current page number to 1
                    dispatch(setCurrentPage(1));

                    // redirect to home page
                    navigate("/");
                  }}
                >
                  {" "}
                  <IoIosArrowBack />
                  Back to search results
                </button>
              </div>
              <div className="mb-10">
                <p className="pb-2 font-bold tracking-wide text-lg text-gray-700">
                  Employer
                </p>
                <p> {jobDetails.PositionOrganisation}s</p>
              </div>
              <div className="mb-10">
                <p className="pb-2 font-bold tracking-wide text-lg text-gray-700">
                  Location
                </p>
                <p>{jobDetails.PositionLocation}</p>
              </div>
            </div>
          </div>
          <div className=" md:p-5 md:w-full">
            <div className="md:hidden">
              <a
                href={jobDetails.PositionApplyLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-text-blue text-center text-sm leading-6 py-3 rounded-md mb-5 text-white font-bold uppercase tracking-wider transition-all duration-500 hover:bg-blue-900"
              >
                <HiOutlineExternalLink className="text-lg" /> Apply on company
                website
              </a>
            </div>
            <h1 className="mb-8 leading-8 text-2xl text-text-blue capitalize font-semibold">
              {jobDetails.PositionTitle}
            </h1>
            <div className="flex md:items-center">
              <div className="w-full md:w-6/12">
                <div className="flex gap-2 mb-5 text-gray-600 font-semibold text-sm tracking-wide">
                  <span className="w-1/2 border-r">
                    <p>{jobDetails.PositionOrganisation}</p>
                  </span>
                  <span className="w-1/2">
                    <p>{jobDetails.PositionLocation}</p>
                  </span>
                </div>
                <span className="text-gray-700">
                  <p>Posted : {jobDetails.PositionPublicationStartDate}</p>
                </span>
              </div>
              <div className="hidden md:flex md:justify-end md:w-full">
                <a
                  href={jobDetails.PositionApplyLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-1/2  bg-text-blue  text-center text-sm leading-6 py-3 rounded-md mb-5 text-white font-bold uppercase tracking-wider transition-all duration-500 hover:bg-blue-900"
                >
                  <HiOutlineExternalLink className="text-lg" /> Apply on company
                  website
                </a>
              </div>
            </div>
            <section className="mt-5">
              <div className="mb-10">
                <p className="text-lg text-gray-700 font-bold pb-2">Overview</p>
                <p className="text-gray-600">
                  {jobDetails.PositionDescription}
                </p>
              </div>
              <div className="mb-10">
                <p className="text-lg text-gray-700 font-bold pb-2">
                  Qualification Summary
                </p>
                <p className="text-gray-600 leading-7">
                  {jobDetails.PositionQualificationSummary}
                </p>
              </div>
              <div className="mb-10">
                <p className="text-lg text-gray-700 font-bold pb-2">
                  Other Information
                </p>
                <p className="text-gray-600 leading-7">
                  {jobDetails.PositionOtherInfo}
                </p>
              </div>
              <div>
                <p className="text-lg text-gray-700 font-bold pb-2">
                  How to apply
                </p>
                <p className="text-gray-600 leading-7">
                  {jobDetails.PositionHowToApply}
                </p>
              </div>
              <div className="md:hidden">
                <a
                  href={jobDetails.PositionApplyLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-text-blue text-center text-sm leading-6 py-3 rounded-md my-5 text-white font-bold uppercase tracking-wider transition-all duration-500 hover:bg-blue-900"
                >
                  <HiOutlineExternalLink className="text-lg" /> Apply on company
                  website
                </a>
              </div>
            </section>
          </div>
        </section>
      )}
    </div>
  );
};

export default JobDetails;
