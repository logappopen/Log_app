import React, { useContext } from 'react';
// import PropTypes from 'prop-types';

import Modal from '../../../components/Modal/Modal';
import { StoreContext } from '../../../store/StoreProvider';

import styles from './LoadPopup.module.scss';

const LoadPopup = ({ isPopupOpen, hidePopup }) => {
    return (
        <Modal handleOnClose={hidePopup} isOpen={isPopupOpen}>
            <div className={styles.LoadPopup}>
                <form>
                    <label for="pallets">Wybierz nośnik:</label>
                    <select name="load" id="pallets">
                        <option value="euro">paleta 120*80</option>
                        <option value="euro_1">paleta 120*100</option>
                        <option value="euro_2">paleta 120*120</option>
                        <option value="euro_3">paleta 140*80</option>
                        <option value="euro_4">paleta 140*100</option>
                        <option value="euro_5">paleta 140*120</option>
                    </select>
                    <label for="height">Wybierz wysokość:</label>
                    <select name="load" id="height">
                        <option value="height_1">wyskość 80</option>
                        <option value="height_2">wyskość 100</option>
                        <option value="height_3">wyskość 120</option>
                        <option value="height_4">wyskość 140</option>
                        <option value="euro_4">wyskość 160</option>
                        <option value="euro_5">powyżej 160</option>
                    </select>
                    <label for="items">Podaj ilość / szt:</label>
                    <input type="number" name="load" id="items" />
                    <label for="weight">Podaj wagę / kg:</label>
                    <input type="number" name="load" id="weight" />
                    <label>
                        Można piętrować{' '}
                        <input type="radio" id="stockable" name="load" value="stockable" />
                    </label>

                    <button type="button">Dodaj</button>
                    <button onClick={hidePopup} type="button">
                        Anuluj
                    </button>
                </form>
            </div>
        </Modal>
    );
};

// VechiclePopup.propTypes = {
//     isPopupOpen: PropTypes.bool.isRequired,
//     hidePopup: PropTypes.func.isRequired,
// };

export default LoadPopup;
