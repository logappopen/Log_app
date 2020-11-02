import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Registration.module.scss';

import useStateWithLabel from '../../helpers/UseStateWhitLabel';
import checkEmail from '../../helpers/CheckEmail';
import ReturnButton from '../../components/ReturnButton/ReturnButton';
import Message from '../../components/Message/Message';

const RegistrationPage = () => {
    const [username, setUsername] = useStateWithLabel('username', '');
    const [email, setEmail] = useStateWithLabel('email', '');
    const [userPassword, setUserPassword] = useStateWithLabel('userPassword', '');
    const [userPasswordRepeat, setUserPasswordRepeat] = useStateWithLabel('userPasswordRepeat', '');

    const checkFrom = () => {
        const errors = [];

        if (!email) {
            console.log('brak email-a');
            errors.push(false);
        }
        if (!username) {
            console.log('brak username');
            errors.push(false);
        }
        if (!userPassword) {
            console.log('brak hasła');
            errors.push(false);
        }
        if (!userPasswordRepeat) {
            console.log('brak powtórzenia hasła');
            errors.push(false);
        }

        if (userPassword !== userPasswordRepeat) {
            console.log('hasła się nie zgadzają');
            errors.push(false);
        }
        if (!checkEmail(email)) {
            console.log('email jest niepoprawny');
            errors.push(false);
        }

        return !errors.length;
    };

    const handleRegistration = (e) => {
        e.preventDefault();
        checkFrom();
    };

    return (
        <div className={styles.wrapper}>
            <h1>Zarejestruj się</h1>

            <form className={styles.form} onSubmit={handleRegistration}>
                <input
                    className={styles.input}
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    placeholder="Username"
                />
                <input
                    className={styles.input}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Email"
                />
                <input
                    className={styles.input}
                    type="password"
                    onChange={(e) => setUserPassword(e.target.value)}
                    value={userPassword}
                    placeholder="Hasło"
                />
                <input
                    className={styles.input}
                    type="password"
                    onChange={(e) => setUserPasswordRepeat(e.target.value)}
                    value={userPasswordRepeat}
                    placeholder="Powtórz hasło"
                />
                <input className={styles.button} type="submit" value="Rejestracja" />
            </form>
            <nav className={styles.nav}>
                <ul>
                    <NavLink to="/lost_password">Zapomniałem hasła...</NavLink>
                </ul>
            </nav>
            <ReturnButton />
        </div>
    );
};

export default RegistrationPage;
