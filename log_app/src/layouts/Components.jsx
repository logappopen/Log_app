import React from "react";
import { Switch, Route } from "react-router-dom";

import StartPage from "../pages/StartPage";
import ContactPage from "../pages/ContactPage";
import HelpPage from "../pages/HelpPage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import FreeStartPage from "./FreeStartPage";
import ErrorPage from "../pages/ErrorPage";

const Components = (props) => {
  return (
    <Switch>
      <Route path="/" exact component={StartPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/help" component={HelpPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/registration" component={RegistrationPage} />
      <Route path="/free_start" component={FreeStartPage} />
      <Route path="/empty" component={ErrorPage} />
    </Switch>
  );
};

export default Components;
