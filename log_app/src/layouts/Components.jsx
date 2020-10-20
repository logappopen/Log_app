import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";

import StartPage from "../pages/StartPage";
import ContactPage from "../pages/ContactPage";
import HelpPage from "../pages/HelpPage";
import ErrorPage from "../pages/ErrorPage";

const Components = ({ path }) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={StartPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/help" component={HelpPage} />
        <Route path="/empty" component={ErrorPage} />
      </Switch>
    </Router>
  );
};

export default Components;
