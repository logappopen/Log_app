import React, { useContext } from 'react';
import PropTypes from 'prop-types';

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
                    <label htmlFor="bus">
                        Bus 8 euro-palet
                        <input
                            onChange={handleOnChange}
                            type="radio"
                            id="bus"
                            name="vehicle"
                            value="BUS"
                        />
                    </label>
                    <label htmlFor="solo">
                        Solo 15 euro-palet
                        <input
                            onChange={handleOnChange}
                            type="radio"
                            id="solo"
                            name="vehicle"
                            value="SOLO"
                        />
                    </label>
                    <label htmlFor="naczepa">
                        Naczepa 33 euro-palety
                        <input
                            onChange={handleOnChange}
                            type="radio"
                            id="naczepa"
                            name="vehicle"
                            value="NACZEPA"
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

VechiclePopup.propTypes = {
    isPopupOpen: PropTypes.bool.isRequired,
    hidePopup: PropTypes.func.isRequired,
};

export default VechiclePopup;
