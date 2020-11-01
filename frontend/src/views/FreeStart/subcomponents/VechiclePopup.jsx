import React, { useContext } from "react";
import Modal from "../../../components/Modal/Modal";
import { StoreContext } from "../../../store/StoreProvider";

import styles from "./VechiclePopup.module.scss";

const VechiclePopup = ({ isPopupOpen, hidePopup }) => {
  const VECHICLES_DATA = useContext(StoreContext);

  // const sendVechicle = (data) => {
  //   VECHICLES_DATA.forEach((vechicle) => {
  //     if (vechicle === data) {
  //       console.log(data);
  //       return vechicle;
  //     }
  //   });
  // };

  const selectVechicle = (event) => {
    console.log(event);
    hidePopup();
  };

  return (
    <Modal handleOnClose={hidePopup} isOpen={isPopupOpen}>
      <div className={styles["vechiclePopup"]}>
        <form onSubmit={selectVechicle}>
          <label>
            Bus 8 euro-palet
            <input type="radio" id="bus" name="bus" value="bus" />
          </label>
          <label>
            Solo 15 euro-palet
            <input type="radio" id="solo" name="solo" value="solo" />
          </label>
          <label>
            Naczepa 33 euro-palety
            <input type="radio" id="naczepa" name="naczepa" value="naczepa" />
          </label>
          <button type="submit">Wybierz</button>
        </form>
      </div>
    </Modal>
  );
};
export default VechiclePopup;
