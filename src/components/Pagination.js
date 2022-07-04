import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openModal } from "../store/ModalSlice";
import { RiArrowDropLeftLine } from "react-icons/ri";
import { RiArrowDropRightLine } from "react-icons/ri";

const Pagination = (props) => {
  const { currentPage, maxPageLimit, minPageLimit } = props;
  const totalPages = props.data?.SearchResult?.SearchResultCountAll - 1;

  // check if user is authenticated and if user is on the first page
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // check if user is authenticated
  const isUserAuthenticated = (props) => {
    // return if user is not authenticated

    navigate("/signin", { replace: true });
    dispatch(openModal());

    return;
  };

  const handlePreviousClick = () => {
    props.onPrevClick();
  };

  // handle next page click function
  const handleNextClick = () => {
    // return if user is not authenticated
    if (!isAuthenticated) {
      isUserAuthenticated();
    } else {
      props.onNextClick();
    }
  };

  // handle page click function
  const handlePageClick = (e) => {
    // return if user is not authenticated
    if (!isAuthenticated) {
      isUserAuthenticated();
    } else {
      props.onPageChange(Number(e.target.id));
    }
  };

  // create an array of pages
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  // create ui for all page numbers
  const pageNumbers = pages.map((page) => {
    if (page <= maxPageLimit && page > minPageLimit) {
      return (
        <li
          key={page}
          className={
            currentPage === page
              ? "bg-text-blue text-white  p-2 w-10 h-10 rounded-md  cursor-pointer border flex items-center justify-center "
              : "text-gray-500 bg-white  p-2 w-10 h-10 rounded-md  cursor-pointer border flex items-center justify-center"
          }
          id={page}
          onClick={handlePageClick}
        >
          {page}
        </li>
      );
    }
    return null;
  });

  return (
    <>
      <ul className="flex gap-2 mt-10 justify-center items-center">
        <li>
          <button
            onClick={handlePreviousClick}
            disabled={currentPage === pages[0]}
          >
            <RiArrowDropLeftLine className="p-2 w-10 h-10" />
          </button>
        </li>

        {pageNumbers}

        <li>
          <button
            onClick={handleNextClick}
            disabled={currentPage === pages[pages.length - 1]}
          >
            <RiArrowDropRightLine className="p-2 w-10 h-10" />
          </button>
        </li>
      </ul>
    </>
  );
};

export default Pagination;
