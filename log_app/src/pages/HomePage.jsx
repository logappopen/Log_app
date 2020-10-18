import React from "react";
// import { Redirect, Route, Switch } from "react-router-dom";
import Header from "../layouts/Header";
import Component from "../layouts/Component";

const HomePage = () => {
  return (
    <>
      <div className="container">
        <div className="container__header">
          <Header />
        </div>
        <div className="container__section">
          <Component />
        </div>
        <div className="containe__footer"></div>
      </div>
    </>
  );
};

export default HomePage;
