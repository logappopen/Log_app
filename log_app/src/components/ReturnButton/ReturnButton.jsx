import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './ReturnButton.module.scss';

const ReturnButton = () => {
    const history = useHistory();
    const handleOnClick = () => history.goBack();
    return (
        <button className={styles.returnButton} onClick={handleOnClick}>
            wstecz
        </button>
    );
};

export default ReturnButton;
