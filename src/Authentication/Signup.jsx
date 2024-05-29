import React, { useState } from "react";
import "./Signup.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

function Signup() {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password).then(
      signInWithEmailAndPassword(auth, email, password)
    );
  };
  return (
    <div className="signup">
      <img
        src="./public/logo.png"
        alt="Instagram logo"
        className="insta-logo"
      />
      <div className="signup-top">
        <span>Sign up to see photos and videos from your friends.</span>
        <button className="facebook-login">
          <FacebookIcon className="fbicon" />
          Login with Facebook
        </button>
      </div>

      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        value={email}
      ></input>
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="username"
        placeholder="Username"
        value={username}
      ></input>
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        value={password}
      ></input>
      <p>
        People who use our service may have uploaded your contact information to
        Instagram.
        <a href="">Learn More</a>
      </p>
      <p>
        By signing up, you agree to our
        <a href="">Terms</a>,<a href="">Privacy Policy</a>and
        <a href="">Cookies Policy.</a>
      </p>

      <button onClick={handleSignup} className="signup-button">
        Sign Up
      </button>
    </div>
  );
}

export default Signup;
