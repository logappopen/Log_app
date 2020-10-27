import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Login.module.scss';

import ReturnButton from '../../components/ReturnButton/ReturnButton';

const LoginPage = () => {
    const handleOnPushEmail = (e) => {
        // don't remember from where i copied this code, but this works.
        let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (re.test(e.target.value)) {
            // this is a valid email address
            console.log(e.target.value, 'Email poprawny');
        } else {
            // invalid email, maybe show an error to the user.
            console.log(e.target.value, 'Błędny email');
        }
    };

    const handleOnPushPassword = (e) => {};

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
