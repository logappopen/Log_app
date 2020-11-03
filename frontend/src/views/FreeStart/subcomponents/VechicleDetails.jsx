import React, { useContext, useState } from 'react';
import StoreProvider, { StoreContext } from '../../../store/StoreProvider';

import VechiclePopup from './VechiclePopup';

import VechicleInfo from './VechicleInfo';

import styles from './VechicleDetails.module.scss';

const VechicleDetails = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const takeVechicle = useContext(StoreContext);

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
        <div className={styles['vechicleDetails']}>
            <button onClick={showPopup}>
                {takeVechicle === false ? 'Dodaj pojazd' : 'Zmień pojazd'}
            </button>
            <StoreProvider>
                <VechiclePopup hidePopup={hidePopup} isPopupOpen={isPopupOpen} />
                <VechicleInfo />
            </StoreProvider>
        </div>
    );
};
export default VechicleDetails;
