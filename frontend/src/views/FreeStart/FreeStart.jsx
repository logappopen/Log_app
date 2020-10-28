import React from "react";
import styles from "./FreeStart.module.scss";

import ReturnButton from "../../components/ReturnButton/ReturnButton";

const FreeStartPage = () => {
  return (
    <div className={styles["section-free-start"]}>
      <h1>Free-Start</h1>
      <p>
        To wersja bez logowania, po wyjściu Twoja praca zostanie utracona.
        Zaloguj się aby zapisywać swoją pracę.
      </p>
      <div className={styles["section-free-start__return-button"]}>
        <ReturnButton />
      </div>
    </div>
  );
};

export default FreeStartPage;
