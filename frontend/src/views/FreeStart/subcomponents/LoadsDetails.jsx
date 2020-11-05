import React, { useContext, useState } from 'react';
import { StoreContext } from '../../../store/StoreProvider';

import LoadPopup from './LoadPopup';

import LoadInfo from './LoadInfo';

import styles from './LoadDetails.module.scss';

const LoadDetails = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

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
        <div className={styles.loadDetails}>
            <button onClick={showPopup}>Dodaj ładunek</button>
            <LoadPopup hidePopup={hidePopup} isPopupOpen={isPopupOpen} />
            <LoadInfo />
        </div>
    );
};
export default LoadDetails;
