import React from "react";
import { Route, Switch } from "react-router-dom";

import ContactPage from "../pages/ContactPage";
import HelpPage from "../pages/HelpPage";

// import img1 from "../i";
// import img2 from "../";
// import img3 from "../";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__logo"></div>
        <div className="header__info info">
          {/* <Switch> */}
          <button className="info__contact">
            {/* <Route path="/contact" component={ContactPage} /> */}
            Kontakt
          </button>
          <button className="info__helo">
            {/* <Route path="/help" component={HelpPage} /> */}
            Pomoc
          </button>
          {/* </Switch> */}
        </div>
      </div>
    </>
  );
};

export default Header;
