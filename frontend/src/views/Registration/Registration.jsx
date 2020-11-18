import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import axios from 'axios';

import { trackPromise } from 'react-promise-tracker';
import styles from './Registration.module.scss';

import { checkEmail, useStateWithLabel } from '../../helpers/helpers';
import ReturnButton from '../../components/ReturnButton/ReturnButton';
import Message from '../../components/Message/Message';

const RegistrationPage = () => {
    const [username, setUsername] = useStateWithLabel('username', '');
    const [email, setEmail] = useStateWithLabel('email', '');
    const [userPassword, setUserPassword] = useStateWithLabel('userPassword', '');
    const [userPasswordRepeat, setUserPasswordRepeat] = useStateWithLabel('userPasswordRepeat', '');
    const [isVisibleMessage, setIsVisibleMessage] = useStateWithLabel('isVisibleMessage', false);
    const [messageText, setMessageText] = useStateWithLabel('messageText', []);
    const [isMessageAlert, setIsMessageAlert] = useStateWithLabel('isMessageAlert', false);

    const showMessage = (text = messageText, isAlert) => {
        setMessageText(text);
        setIsMessageAlert(isAlert);
        setIsVisibleMessage(true);

        setTimeout(() => {
            setIsVisibleMessage(false);
        }, 5000);
    };

    const checkFrom = () => {
        const errors = [];
        const message = [];

        if (!email) {
            message.push('Brak email-a');
            errors.push(false);
        }
        if (!username) {
            message.push('Brak username');
            errors.push(false);
        }
        if (!userPassword) {
            message.push('Brak hasła');
            errors.push(false);
        }
        if (!userPasswordRepeat) {
            message.push('Brak powtórzenia hasła');
            errors.push(false);
        }

        if (userPassword !== userPasswordRepeat) {
            message.push('Hasła nie są jednakowe');
            errors.push(false);
        }
        if (!checkEmail(email)) {
            message.push('Email jest niepoprawny');
            errors.push(false);
        }

        return [!errors.length, message];
    };

    const sendCredentials = () => {
        trackPromise(
            axios
                .post(process.env.REACT_APP_API_REGISTER_URL, {
                    username,
                    email,
                    password: userPassword,
                })
                .then(({ data }) => {
                    console.log(data);
                    showMessage(`Zarejestrowałeś się poprawnie jako ${data.user.username}`);
                    return data;
                })
                .catch((error) => {
                    console.log(error);
                    console.log(error.response.data);

                    const errorsMsg = [`Wystąpiły błędy w rejestracji:`];

                    Object.keys(error.response.data).map((v) => {
                        return errorsMsg.push(error.response.data[v][0]);
                    });
                    showMessage(errorsMsg, true);
                    return error;
                }),
        );
    };

    const handleRegistration = (e) => {
        e.preventDefault();
        if (checkFrom()[0]) {
            sendCredentials();
        } else {
            showMessage(checkFrom()[1], true);
        }
    };
    const isLogged = () => {
        return JSON.parse(localStorage.getItem('LogAppUser')) || false;
    };

    if (isLogged()) {
        return <Redirect to="/" />;
    }
    return (
        <div className={styles.wrapper}>
            <h1>Zarejestruj się</h1>
            {isVisibleMessage ? <Message message={messageText} alert={isMessageAlert} /> : ''}
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
