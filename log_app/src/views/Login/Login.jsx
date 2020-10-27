import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Login.module.scss';

import ReturnButton from '../../components/ReturnButton/ReturnButton';

const LoginPage = () => {
    const handleOnPushEmail = (e) => {
        console.log(e.target.value);
    };

    const handleOnPushPassword = (e) => {
        console.log(e.target.value);
    };

    const handleOnClickLogin = () => {
        console.log('klik');
    };

    return (
        <div className={styles['section-login']}>
            <form className={styles['login-form']} action="submit">
                <label className={styles['login-form__label']} htmlFor="login">
                    adres eMail
                </label>
                <input
                    type="email"
                    name="login"
                    onChange={handleOnPushEmail}
                    className={styles['login-form__input']}
                />
                <label
                    className={styles['login-form__label']}
                    htmlFor="password"
                >
                    hasło
                </label>
                <input
                    type="password"
                    name="password"
                    onChange={handleOnPushPassword}
                    className={styles['login-form__input']}
                />
                <button
                    className={styles['login-form__button']}
                    onClick={handleOnClickLogin}
                >
                    Logowanie
                </button>
            </form>
            <nav className={styles['section-login__nav']}>
                <ul>
                    <NavLink to="/lost_password">Zapomniałem hasła...</NavLink>
                </ul>
            </nav>
            <div className={styles['section-login__return-button']}>
                <ReturnButton />
            </div>
        </div>
    );
};

export default LoginPage;
