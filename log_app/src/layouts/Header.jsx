import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const list = [
  { name: "start", path: "/", exact: true },
  { name: "kontakt", path: "/contact" },
  { name: "pomoc", path: "/help" },
];

const Header = () => {
  const [pages, setPages] = useState(true);
  const menu = list.map((item) => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>
        {item.name}
      </NavLink>
    </li>
  ));
  const sendToPage = (event) => {
    if (event.target.id === "js-data-contact") {
      console.log("kontakt");
    }
    if (event.target.id === "js-data-help") {
      console.log("help");
    }
  };

  return (
    <>
      <div className="header">
        <div className="header__logo">
          <h1 className="header__title">Aplikacja_name</h1>
        </div>
        <nav className="header__info info">
          <ul className="info__menu">{menu}</ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
