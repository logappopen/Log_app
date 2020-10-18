import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import HelpPage from "../pages/HelpPage";
import ErrorPage from "../pages/ErrorPage";

const Component = (props) => {
  return (
    <Router>
      <Switch>
        {/* <Route path="/" exact component={HomePage} /> */}
        <Route path="/contakt" component={HelpPage} />
        <Route path="/help" component={ErrorPage} />
      </Switch>
    </Router>
  );
};

export default Component;
