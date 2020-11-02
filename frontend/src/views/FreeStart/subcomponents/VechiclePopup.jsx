import React, { useContext, useState } from 'react';

import Modal from '../../../components/Modal/Modal';
import { StoreContext } from '../../../store/StoreProvider';

import styles from './VechiclePopup.module.scss';

const VechiclePopup = ({ isPopupOpen, hidePopup }) => {
    const { setTakeVechicle, takeVechicleData } = useContext(StoreContext);

    const handlOnSendData = () => {
        takeVechicleData();
        hidePopup();
    };

    const handleOnChange = (event) => {
        setTakeVechicle(event.target.value);
    };

    return (
        <Modal handleOnClose={hidePopup} isOpen={isPopupOpen}>
            <div className={styles.vechiclePopup}>
                <form>
                    <label>
                        Bus 8 euro-palet
                        <input
                            onChange={handleOnChange}
                            type="radio"
                            id="bus"
                            name="vehicle"
                            value="bus"
                        />
                    </label>
                    <label>
                        Solo 15 euro-palet
                        <input
                            onChange={handleOnChange}
                            type="radio"
                            id="solo"
                            name="vehicle"
                            value="solo"
                        />
                    </label>
                    <label>
                        Naczepa 33 euro-palety
                        <input
                            onChange={handleOnChange}
                            type="radio"
                            id="naczepa"
                            name="vehicle"
                            value="naczepa"
                        />
                    </label>
                    <button onClick={handlOnSendData} type="button">
                        Wybierz
                    </button>
                </form>
            </div>
        </Modal>
    );
};
export default VechiclePopup;
