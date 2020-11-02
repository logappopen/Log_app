import React, { useContext, useState } from 'react';

import styles from './LoadDetails.module.scss';

const LoadDetails = () => {
    return (
        <div className={styles['loadDetails']}>
            <button>Dodaj ładunek</button>
        </div>
    );
};
export default LoadDetails;
