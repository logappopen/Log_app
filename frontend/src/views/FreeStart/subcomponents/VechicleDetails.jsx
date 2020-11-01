import React, { useContext, useState } from "react";
import { StoreContext } from "../../../store/StoreProvider";
import VechiclePopup from "./VechiclePopup";

import styles from "./VechicleDetails.module.scss";

const VechicleDetails = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectVechicle, setSelectVechicle] = useState(null);

  const VECHICLES_DATA = useContext(StoreContext);

  // const showData = () => {
  //   setSelectVechicle(data);
  // };

  const showPopup = () => {
    setIsPopupOpen(true);
  };
  const hidePopup = (event) => {
    if (event) {
      event.preventDefault();
    }

    setIsPopupOpen(false);
  };

  return (
    <div className={styles["vechicleDetails"]}>
      <button onClick={showPopup}>Dodaj pojazd</button>
      <VechiclePopup
        hidePopup={hidePopup}
        isPopupOpen={isPopupOpen}
        // value={data}s
      />
    </div>
  );
};
export default VechicleDetails;
