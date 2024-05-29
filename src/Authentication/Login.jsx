import React, { useState } from "react";
import "./Login.css";
import FacebookIcon from "@mui/icons-material/Facebook";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
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
      <button>Log In</button>
      <p>OR</p>
      <button className="facebook-login">
        <FacebookIcon className="fbicon" />
        Login with Facebook
      </button>
    </div>
  );
}

export default Login;
