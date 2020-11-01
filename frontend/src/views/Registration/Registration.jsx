import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Registration.module.scss';
import ReturnButton from '../../components/ReturnButton/ReturnButton';

const RegistrationPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const handleRegistration = (e) => {
        e.preventDefault();
        console.log('Zarejestrowano');
        // Pola mamy w state, kwestia wysłania ich w odpowiednie miejsce
    };

    return (
        <div className={styles['section-registration']}>
            <h1>Registration_Page</h1>

            <form className={styles.registrationForm} onSubmit={handleRegistration}>
                <input
                    className={styles.registrationForm__input}
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    placeholder="Username"
                />
                <input
                    className={styles.registrationForm__input}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Email"
                />
                <input
                    className={styles.registrationForm__input}
                    onChange={(e) => setUserPassword(e.target.value)}
                    value={userPassword}
                    placeholder="Password"
                />
                <input
                    className={styles['registrationForm__input--submitButton']}
                    type="submit"
                    value="Register"
                />
            </form>
            <nav className={styles['section-registration__nav']}>
                <ul>
                    <NavLink to="/lost_password">Zapomniałem hasła...</NavLink>
                </ul>
            </nav>
            <div className={styles['section-registration__return-button']}>
                <ReturnButton />
            </div>
        </div>
    );
};

export default RegistrationPage;
