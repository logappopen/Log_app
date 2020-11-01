import React from 'react';
import styles from './Error.module.scss';
import img404 from '../../assets/images/404.png';

const ErrorPage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <h1>404</h1>
                <p>Niestety nie znaleziono strony.</p>
            </div>
            <img src={img404} alt="Error 404" />
        </div>
    );
};

export default ErrorPage;
