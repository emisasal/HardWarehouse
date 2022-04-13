import React from "react";
import useInput from "../hooks/useInput";

import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { sendLoginRequest } from "../store/user";
import { alertLogin } from "../utils/alerts";

const Login = () => {
  const user = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useInput();
  const password = useInput();
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      sendLoginRequest({ email: email.value, password: password.value })
    );
    alertLogin();
    navigate("/");
  };
  
  
  const googleAuth = () => {
    window.open("http://localhost:3001/auth/google", "_self");
  };

  const githubAuth = () => {
    window.open("http://localhost:3001/auth/github", "_self");
  };

  return (
    <div className="loginContainer">
      <h2>Iniciar sesión</h2>
      <form className="logForm" onSubmit={handleSubmit}>
        <input
          className="logInputs"
          {...email}
          type="text"
          placeholder="Igresá tu email"
        />
        <input
          className="logInputs"
          {...password}
          type="password"
          placeholder="Ingresá tu contraseña"
        />
        <button className="logBtn" type="submit">
          LOGIN
        </button>
        <div></div>
        <button className="logBtnGoogle" onClick={googleAuth}>
          Google LOGIN
        </button>
        <button className="logBtnGit" onClick={githubAuth}>
          GitHub LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;


