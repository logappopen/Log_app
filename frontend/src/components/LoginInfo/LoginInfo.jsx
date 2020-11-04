/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';

import { StoreContext } from '../../store/StoreProvider';
import styles from './LoginInfo.module.scss';

const LoginInfo = () => {
    const { userData, setUserData } = useContext(StoreContext);

    const Info = () => {
        if (userData.isLogged) {
            return `Witaj ${userData.username}`;
        }

        return `Zaloguj się`;
    };
    return <div className={styles.loginInfo}>{Info()}</div>;
};

export default LoginInfo;
