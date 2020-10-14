import React from "react";
import { Route, Switch } from "react-router-dom";

// import img1 from "../i";
// import img2 from "../";
// import img3 from "../";

const Header = () => {
  return (
    <>
      <Switch>
        <Route
          path="/"
          exact
          render={() => <img src={"../images/pallets_640.jpg"} alt=""></img>}
        />
        <Route
          path="/login"
          render={() => <img src={"../images/pallets_640.jpg"} alt=""></img>}
        />
        {/* <Route path="/registration" render={() => <img src={} alt=""></img>} />
        <Route path="/free-start" render={() => <img src={} alt=""></img>} />
        <Route render={() => <img src={} alt="city"></img>} />   */}
      </Switch>
    </>
  );
};

export default Header;
