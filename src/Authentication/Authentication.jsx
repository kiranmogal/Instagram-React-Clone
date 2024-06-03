import { act, useState } from "react";
import React from "react";
import "./Authentication.css";
import Login from "./Login";
import Signup from "./Signup";

function Authentication() {
  const [active, setActive] = useState("signup");

  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  };
  return (
    <>
      <div className="auth-top">
        {/* <Login /> */}
        {active === "login" ? <Login /> : <Signup />}
        {/* <Signup></Signup> */}
        <div className="auth-more">
          <span>
            {active === "login" ? (
              <>
                Don't have an account?
                <button onClick={handleChange}>Sign Up</button>
              </>
            ) : (
              <>
                Have an account?
                <button onClick={handleChange}>Log In</button>
              </>
            )}
          </span>
        </div>
      </div>
      <div className="auth-app">
        <span>Get the app.</span>
        <div className="app-images">
          <img
            src="./public/playstore.png"
            alt="Google Play Instagram"
            className="google-play"
          />
          <img
            src="./public/microsoft.png"
            alt="Microsoft Instagram"
            className="microsoft"
          />
        </div>
      </div>
      <div className="auth-bottom">
        <span>Meta</span>
        <span>About</span>
        <span>Blog</span>
        <span>Jobs</span>
        <span>Help</span>
        <span>API</span>
        <span>Privacy</span>
        <span>Terms</span>
        <span>Locations</span>
        <span>Instagram Lite</span>
        <span>Threads</span>
        <span>Contact Uploading & Non-UserS</span>
        <span>Meta Verified</span>
        <p>
          <button>English(UK)</button>© 2024 Instagram from Meta
        </p>
      </div>
    </>
  );
}

export default Authentication;
