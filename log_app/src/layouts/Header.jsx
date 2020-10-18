import React, { useState } from "react";

import Component from "../layouts/Component";
import ContactPage from "../pages/ContactPage";
import HelpPage from "../pages/HelpPage";

const Header = () => {
  const [pages, setPages] = useState();

  const sendToPage = (event) => {
    if (event.target.id === "data-contact") {
      console.log("kontakt");
    }
    if (event.target.id === "data-help") {
      console.log("help");
    }
  };

  return (
    <>
      <div className="header">
        <div className="header__logo"></div>
        <div className="header__info info">
          <button
            onClick={sendToPage}
            id="data-contact"
            className="info__contact"
          >
            Kontakt
          </button>
          <button onClick={sendToPage} id="data-help" className="info__help">
            Pomoc
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
