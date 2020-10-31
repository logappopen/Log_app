import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styles from "./Home.module.scss";

import Header from "../../components/Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

class Home extends Component {
  render() {
    return (
      <Router>
        <div className={styles["container"]}>
          <div className={styles["containerHeader"]}>{<Header />}</div>
          <div className={styles["containerSection"]}>{<Main />}</div>
          <div className={styles["containeFooter"]}>{<Footer />}</div>
        </div>
      </Router>
    );
  }
}

export default Home;
