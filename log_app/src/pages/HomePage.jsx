import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "../layouts/Header";
import Components from "../layouts/Components";

class HomePage extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="container__header">{<Header />}</div>
          <div className="container__section">{<Components />}</div>
          <div className="containe__footer"></div>
        </div>
      </Router>
    );
  }
}

export default HomePage;
