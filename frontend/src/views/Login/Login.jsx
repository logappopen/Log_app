import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import styles from './Login.module.scss';

import ReturnButton from '../../components/ReturnButton/ReturnButton';
import Message from '../../components/Message/Message';

const LoginPage = () => {
    const [email, setEmail] = useState({ email: '' });
    const [isValidEmail, setIsValidEmail] = useState({ isValidemail: false });
    const [password, setPassword] = useState({ password: '' });
    const [isVisibleMessage, setIsVisibleMessage] = useState({ isVisibleMessage: false });
    const [messageText, setMessageText] = useState({ messageText: '' });
    const [isMessageAlert, setIsMessageAlert] = useState({ isMessageAlert: false });

    const handleOnPushEmail = (e) => {
        // don't remember from where i copied this code, but this works.
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (re.test(e.target.value)) {
            // this is a valid email address
            setIsValidEmail({ isValidemail: true });
        } else {
            // invalid email, maybe show an error to the user.
            setIsValidEmail({ isValidemail: false });
        }
        setEmail({ email: e.target.value });
    };
    const isLogged = () => {
        return JSON.parse(localStorage.getItem('LogAppUser')) || false;
    };

    const showMessage = (text, isAlert) => {
        setMessageText({ messageText: text });
        setIsMessageAlert({ isMessageAlert: isAlert });
        setIsVisibleMessage({ isVisibleMessage: true });

        setTimeout(() => {
            setIsVisibleMessage({ isVisibleMessage: false });
        }, 5000);
    };
    const sendCredentials = () => {
        return axios
            .post(process.env.REACT_APP_API_LOGIN_URL, {
                email: email.email,
                password: password.password,
            })
            .then(({ data }) => {
                // console.log(data)
                localStorage.setItem(
                    'LogAppUser',
                    JSON.stringify({
                        isLogged: true,
                        id: data.user.id,
                        username: data.user.username,
                        email: data.user.email,
                        token: data.token,
                    }),
                );
                return data;
            })
            .then((data) => {
                console.log(data);

                isLogged();
                showMessage(`Zalogowałeś się poprawnie jako ${data.user.username}`);
            })
            .catch((error) => {
                localStorage.removeItem('LogAppUser');
                console.log(error);
                showMessage(`Błąd logowania!`, true);
            });
    };

    const handleOnPushPassword = (e) => {
        setPassword({ password: e.target.value });
    };

    const handleOnClickLogin = (e) => {
        e.preventDefault();

        if (isValidEmail) {
            console.log('Wpisano poprawny email');
            sendCredentials();
        } else {
            console.log('Wpisano błędny email');
            showMessage(`Wpisz poprawny email!`, true);
        }
        // console.log(email, password, isValidEmail)
    };

    return (
        <div className={styles.sectionLogin}>
            {isVisibleMessage.isVisibleMessage ? (
                <Message message={messageText.messageText} alert={isMessageAlert.isMessageAlert} />
            ) : (
                ''
            )}
            <form className={styles.form} action="submit">
                <input
                    type="email"
                    name="email"
                    onChange={handleOnPushEmail}
                    className={styles.input}
                    placeholder="Adres email"
                />

                <input
                    type="password"
                    name="password"
                    onChange={handleOnPushPassword}
                    className={styles.input}
                    placeholder="Hasło"
                />
                <button className={styles.button} onClick={handleOnClickLogin} type="submit">
                    Logowanie
                </button>
            </form>
            <nav className={styles.nav}>
                <ul>
                    <NavLink to="/lost_password">Zapomniałem hasła...</NavLink>
                </ul>
            </nav>
            <div className={styles.returnButton}>
                <ReturnButton />
            </div>
        </div>
    );
};

export default LoginPage;
