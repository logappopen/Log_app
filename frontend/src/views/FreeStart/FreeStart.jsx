import React from 'react';
import styles from './FreeStart.module.scss';

import ReturnButton from '../../components/ReturnButton/ReturnButton';

const FreeStartPage = () => {
    return (
        <div className={styles['section-free-start']}>
            <h1>Free-Start_Page</h1>
            <div className={styles['section-free-start__return-button']}>
                <ReturnButton />
            </div>
        </div>
    );
};

export default FreeStartPage;
