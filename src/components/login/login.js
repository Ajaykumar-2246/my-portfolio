import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
function Login() {
  let [username, setUserName] = useState("");
  let [password, setPassword] = useState("");
  let [usererror, setUserError] = useState("");
  let [passworderror, setPasswordError] = useState("");
  let navigate = useNavigate();
  const nameEnter = (event) => {
    setUserName(event.target.value);
  };

  const passwordEnter = (event) => {
    setPassword(event.target.value);
  };
  const submit = (event) => {
    event.preventDefault();
    if (username && password) {
      localStorage.setItem("userLoggedIn", true);
      navigate("../effecthook");
      return;
    }
    if (!username) {
      setUserError("Please enter username");
    } else {
      setUserError("");
      setUserName("");
    }
    if (!password) {
      setPasswordError("Please enter password");
    } else {
      setPasswordError("");
      setPassword("");
    }
  };

  return (
    <div className="login">
      <form>
        <h1 className="header">Login</h1>
        <label htmlFor="username">Name</label>
        <input
          className="input"
          type="text"
          id="username"
          value={username}
          onChange={nameEnter}
          placeholder="enter your name.."
        />
        {usererror && <div className="hidden-msg">{usererror}</div>}
        <label htmlFor="password">password</label>
        <input
          className="input"
          type="password"
          id="password"
          value={password}
          onChange={passwordEnter}
          placeholder="enter your password.."
        />
        {passworderror && <div className="hidden-msg">{passworderror}</div>}
        <input
          className="button"
          type="submit"
          onClick={submit}
          value="submit"
        />
      </form>
    </div>
  );
}

export default Login;
