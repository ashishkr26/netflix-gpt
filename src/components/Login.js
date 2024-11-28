import React, { useRef, useState } from "react";
import Header from "./Header";
import { BACKGROUND_IMAGE } from "../utils/constants";
import Footer from "./Footer";
import { checkValidateData } from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  const email = useRef();
  const password = useRef();

  const toggleSignIn = () => {
    console.log("hell");
    setIsSignIn(!isSignIn);
  };

  const handleSignIn = () => {

    const message = checkValidateData(email.current.value,password.current.value);
    setErrorMessage(message);
    console.log(message);
  };

  return (
    <div className="">
      <div>
        <Header isSignIn={isSignIn} />
        <div>
          <img className="absolute" alt="bg-logo" src={BACKGROUND_IMAGE} />
        </div>

        <div className="w-[420px] bg-black absolute right-0 left-0 mx-auto my-28 bg-opacity-80 text-white p-12">
          <form onSubmit={(e) => e.preventDefault()}>
            <h1 className="text-3xl font-bold pb-4 ">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>

            {isSignIn ? null : (
              <input
                className="h-14 my-2 p-2 w-full bg-gray-700 rounded-md border border-white bg-opacity-60"
                type="text"
                placeholder="Full Name"
              />
            )}

            <input
              ref={email}
              className="h-14 my-2 p-2 w-full bg-gray-700 rounded-md border border-white bg-opacity-60"
              type="text"
              placeholder="Email Id"
            />

            <input
              ref={password}
              className="h-14 my-2 p-2 w-full bg-gray-700 rounded-md border border-white bg-opacity-60"
              type="password"
              placeholder="Password"
            />
            <p className="text-red-500 font-bold text-lg">{errorMessage}</p>

            <button
              onClick={handleSignIn}
              className="font-inherit font-semibold h-10 my-2 p-2 w-full bg-red-600 rounded-md "
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
            <div className="text-center">OR</div>

            {isSignIn ? (
              <button className="font-semibold h-10 my-2 p-2 w-full bg-gray-600 bg-opacity-70 rounded-md">
                Use a sign-in-code
              </button>
            ) : null}

            <button className="center">Forget Password?</button>
            {isSignIn === false ? (
              <div className="my-2">
                Already have an account?{" "}
                <span
                  className="hover:underline cursor-pointer font-semibold"
                  onClick={toggleSignIn}
                >
                  Sign In Now
                </span>
              </div>
            ) : (
              <div className="my-2">
                New to Netflix?{" "}
                <span
                  className="hover:underline cursor-pointer font-semibold"
                  onClick={toggleSignIn}
                >
                  Sign Up Now
                </span>
              </div>
            )}

            <div className="text-sm my-12">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <span className="text-blue-700">Learn more</span>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
