import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import ContactPage from "../pages/ContactPage";
import HelpPage from "../pages/HelpPage";

const Header = () => {
  return (
    <>
      <Router>
        <div className="header">
          <div className="header__logo"></div>
          <div className="header__info info">
            <button className="info__contact">
              {" "}
              <Link to="/kontakt"></Link>
              Kontakt
            </button>
            <button className="info__helo">
              {/* <Route path="/help" component={HelpPage} /> */}
              Pomoc
            </button>
            {/* </Switch> */}
          </div>
        </div>
      </Router>
    </>
  );
};

export default Header;
