import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "../layouts/Header";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import FreeStartPage from "../pages/FreeStartPage";
import ErrorPage from "../pages/ErrorPage";

const HomePage = () => {
  return (
    <>
      <div className="container">
        <div className="container__header">
          {" "}
          <Header />{" "}
        </div>
        <div className="container__section">
          {/* <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/registration" component={RegistrationPage} />
            <Route path="/free-start" component={FreeStartPage} />
            <Route component={ErrorPage} />
          </Switch> */}
        </div>
        <div className="containe__footer"></div>
      </div>
    </>
  );
};

export default HomePage;
