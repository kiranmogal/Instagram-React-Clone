import React, { useState } from "react";
import "./Login.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password);
  };
  return (
    <div className="login">
      <img
        src="./public/logo.png"
        alt="Instagram logo"
        className="insta-logo"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        value={email}
      ></input>
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        value={password}
      ></input>
      <button onClick={handleLogin}>Log In</button>
      <p>OR</p>
      <button className="facebook-login">
        <FacebookIcon className="fbicon" />
        Login with Facebook
      </button>
      <p className="password-forgotten">Forgotten your password?</p>
    </div>
  );
}

export default Login;
