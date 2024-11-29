import React, { useRef, useState } from "react";
import Header from "./Header";
import { BACKGROUND_IMAGE } from "../utils/constants";
import Footer from "./Footer";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  const name = useRef();
  const email = useRef();
  const password = useRef();

  const toggleSignIn = () => {
    console.log("hell");
    setIsSignInForm(!isSignInForm);
  };

  const handleSignIn = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    console.log(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/112201248?v=4",
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "- " + errorMessage);
        });
    }
  };

  return (
    <div className="">
      <div>
        <Header isSignInForm={isSignInForm} />
        <div>
          <img className="absolute" alt="bg-logo" src={BACKGROUND_IMAGE} />
        </div>

        <div className="w-[420px] bg-black absolute right-0 left-0 mx-auto my-28 bg-opacity-80 text-white p-12">
          <form onSubmit={(e) => e.preventDefault()}>
            <h1 className="text-3xl font-bold pb-4 ">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>

            {isSignInForm ? null : (
              <input
                ref={name}
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
              autoComplete="off"
            />

            <input
              ref={password}
              className="h-14 my-2 p-2 w-full bg-gray-700 rounded-md border border-white bg-opacity-60"
              type="password"
              placeholder="Password"
              autoComplete="off"
            />
            <p className="text-red-500 font-bold text-lg">{errorMessage}</p>

            <button
              onClick={handleSignIn}
              className="font-inherit font-semibold h-10 my-2 p-2 w-full bg-red-600 rounded-md "
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <div className="text-center">OR</div>

            {isSignInForm ? (
              <button className="font-semibold h-10 my-2 p-2 w-full bg-gray-600 bg-opacity-70 rounded-md">
                Use a sign-in-code
              </button>
            ) : null}

            <button className="center">Forget Password?</button>
            {isSignInForm === false ? (
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
