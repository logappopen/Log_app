import React from 'react';
import styles from './Registration.module.scss';
import ReturnButton from '../../components/ReturnButton/ReturnButton';

const RegistrationPage = () => {
    return (
        <div className={styles['section-registration']}>
            <h1>Registration_Page</h1>
            <div className={styles['section-registration__return-button']}>
                <ReturnButton />
            </div>
        </div>
    );
};

export default RegistrationPage;
