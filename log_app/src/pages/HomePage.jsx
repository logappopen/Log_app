import React from "react";
// import { Route, Switch } from "react-router-dom";
// import Header from "../lauouts/Header";
// import LoginPage from "./LoginPage";
// import RegistrationPage from "./RegistrationPage";
// import FreeStartPage from "./FreeStartPage";
// import ErrorPage from "./ErrorPage";

const HomePage = () => {
  return (
    <>
      <div className="container">
        <div className="container__header">{/* <Header /> */}</div>
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
