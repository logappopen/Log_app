import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { NavLink } from 'react-router-dom';

import { StoreContext } from '../../store/StoreProvider';
import styles from './LoginInfo.module.scss';

const LoginInfo = () => {
    const { userData, setUserData } = useContext(StoreContext);

    const Logut = (e) => {
        e.preventDefault();
        setUserData({
            username: null,
            email: null,
            isLogged: false,
            token: null,
        });

        localStorage.removeItem('LogAppUser');
    };

    return (
        <div className={styles.loginInfo}>
            {!userData.isLogged ? (
                <NavLink to="/login" className={styles.link}>
                    Zaloguj się <FontAwesomeIcon icon={faSignInAlt} size="lg" />
                </NavLink>
            ) : (
                <NavLink to="/" className={styles.link} onClick={Logut}>
                    Witaj {userData.username} <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
                </NavLink>
            )}
        </div>
    );
};

export default LoginInfo;
