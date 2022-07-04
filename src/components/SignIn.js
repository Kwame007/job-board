import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/AuthSlice";
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import { closeModal } from "../store/ModalSlice";
import { Link } from "react-router-dom";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import app from "../firebase/config";

const provider = new GoogleAuthProvider();

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

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isOpened = useSelector((state) => state.modal.isOpen);
  const auth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(isOpened);
  console.log(auth);

  // handle email change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // handle password change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // handle login with email and password
  const handleLoginWithEmailPassword = (e) => {
    e.preventDefault();

    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        navigate("/home", { replace: true });

        dispatch(login(true));

        // store login state in session storage
        sessionStorage.setItem("isAuthenticated", true);

        console.log("Sign in successful");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  // login with google
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        // ...
        dispatch(login(true));
        dispatch(closeModal());

        // store login state in session storage
        sessionStorage.setItem("isAuthenticated", true);

        navigate("/home", { replace: true });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <>
      <form
        className="max-w-sm mx-auto my-auto bg-white p-5 rounded-md shadow-blue fixed inset-2 max-h-fit z-50"
        onSubmit={handleLoginWithEmailPassword}
      >
        <div className="mb-5">
          <h1 className="text-2xl font-bold text-gray-700">Sign In</h1>
          <p className="text-xs text-text-blue">
            Sign in to access additional features 😎...
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
            Submit
          </button>
          <div className=" flex justify-center items-center">
            <p className="font-semibold text-sm text-blue-500">OR</p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <div className="flex gap-5">
              <AiFillGoogleCircle
                className="text-2xl text-text-blue shadow-blue cursor-pointer hover:underline hover:text-blue-900"
                onClick={handleGoogleSignIn}
              />
              <BsGithub className="text-2xl shadow-blue cursor-pointer text-text-blue hover:underline hover:text-blue-900" />
            </div>
            <div>
              <p className="text-sm text-gray-500">
                Not a user?{" "}
                <Link className="text-blue-500  pl-1 underline" to="/signup">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </form>
      <BackDrop />
    </>
  );
};

export default SignIn;
