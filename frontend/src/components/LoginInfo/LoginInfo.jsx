import React, { useContext } from 'react';

import { NavLink } from 'react-router-dom';

import { StoreContext } from '../../store/StoreProvider';
import styles from './LoginInfo.module.scss';

const LoginInfo = () => {
    const { userData } = useContext(StoreContext);

    return (
        <div className={styles.loginInfo}>
            {!userData.isLogged ? (
                <NavLink to="/login" className={styles.link}>
                    Zaloguj się
                </NavLink>
            ) : (
                `Witaj ${userData.username}`
            )}
        </div>
    );
};

export default LoginInfo;
