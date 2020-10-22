import React from "react";
import { NavLink } from "react-router-dom";

import ReturnButton from "../components/ReturnButton";

const LoginPage = () => {
  const handleOnPushEmail = () => {
    console.log("mail");
  };

  const handleOnPushPassword = () => {
    console.log("log");
  };

  const handleOnClickLogin = () => {
    console.log("klik");
  };

  return (
    <div className="section-login">
      <form className="section-login__form login-form" action="submit">
        <label className="login-form__label" htmlFor="login">
          adres eMail
        </label>
        <input
          type="email"
          name="login"
          onChange={handleOnPushEmail}
          value={""}
          className="login-form__input"
        />
        <label className="login-form__label" htmlFor="password">
          hasło
        </label>
        <input
          type="password"
          name="password"
          onChange={handleOnPushPassword}
          value={""}
          className="login-form__input"
        />
        <button className="login-form__button" onClick={handleOnClickLogin}>
          Logowanie
        </button>
      </form>
      <nav className="section-login__nav">
        <ul>
          <NavLink to="/lost_password">Zapomniałem hasła...</NavLink>
        </ul>
      </nav>
      <div className="section-login__return-button">
        <ReturnButton />
      </div>
    </div>
  );
};

export default LoginPage;
