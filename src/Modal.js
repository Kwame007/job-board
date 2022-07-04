import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "./store/ModalSlice";

const BackDrop = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isOpened = useSelector((state) => state.modal.isOpen);

  const handleClose = () => {
    dispatch(closeModal());

    console.log(isOpened);
    navigate("/home", { replace: true });
  };

  return (
    <div
      className="fixed inset-0 z-40 bg-black opacity-30"
      onClick={handleClose}
    />
  );
};

const Modal = () => {
  return (
    <>
      <div className="max-w-sm mx-auto my-auto bg-white p-5 rounded-md shadow-blue fixed inset-1 max-h-fit z-50">
        <h1 className="text-2xl font-bold text-center text-text-blue">Loading...</h1>
      </div>
      <BackDrop />
    </>
  );
};

export default Modal;
