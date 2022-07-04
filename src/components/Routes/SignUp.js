import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/ModalSlice";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { login } from "../../store/AuthSlice";

const BackDrop = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isOpened = useSelector((state) => state.modal.isOpen);

  // handle close modal function
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

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // handle email change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // handle password change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // login with google
  const handleEmailPasswordSignUp = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        dispatch(login(true));
        dispatch(closeModal());

        // store login state in session storage
        sessionStorage.setItem("isAuthenticated", true);

        navigate("/home", { replace: true });

        //  clear email and password fields
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <>
      <form
        className="max-w-sm mx-auto my-auto bg-white p-5 rounded-md shadow-blue fixed inset-2 max-h-fit z-50"
        onSubmit={handleEmailPasswordSignUp}
      >
        <div className="mb-5">
          <h1 className="text-2xl font-bold text-gray-700">Sign Up</h1>
          <p className="text-xs text-text-blue">
            Sign up to access additional features 😎...
          </p>
        </div>
        <div className="mb-2">
          <label
            htmlFor="exampleInputEmail1"
            className="block text-lg tracking-wider mb-2 text-gray-500"
          >
            Email address
          </label>
          <input
            type="email"
            className="border p-2 w-full rounded-md shadow-blue"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
          <small id="emailHelp" className="text-xs font-roboto text-text-blue">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="">
          <label
            htmlFor="exampleInputPassword1"
            className="block text-lg tracking-wider mb-2 text-gray-500"
          >
            Password
          </label>
          <input
            type="password"
            className="border p-2 w-full rounded-md shadow-blue"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="mt-5 grid grid-cols-1 gap-5 items-center">
          <button
            className="bg-text-blue text-white py-3 rounded-md hover:bg-blue-900"
            type="submit"
          >
            Sign Up
          </button>
        </div>
        <div className="flex justify-center mt-5">
          <p className="text-sm text-gray-500">
            Already a user?{" "}
            <Link
              className="text-blue-500  pl-1 underline hover:text-blue-600 hover:font-bold"
              to="/signin"
            >
              Sign In
            </Link>
          </p>
        </div>
      </form>
      <BackDrop />
    </>
  );
};

export default SignUp;
