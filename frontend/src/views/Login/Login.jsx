import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import styles from './Login.module.scss';

import useStateWithLabel from '../../helpers/UseStateWhitLabel';
import checkEmail from '../../helpers/CheckEmail';
import ReturnButton from '../../components/ReturnButton/ReturnButton';
import Message from '../../components/Message/Message';

const LoginPage = () => {
    const [email, setEmail] = useStateWithLabel('email', '');
    const [isValidEmail, setIsValidEmail] = useStateWithLabel('isValidemail', false);
    const [password, setPassword] = useStateWithLabel('password', '');
    const [isVisibleMessage, setIsVisibleMessage] = useStateWithLabel('isVisibleMessage', false);
    const [messageText, setMessageText] = useStateWithLabel('messageText', '');
    const [isMessageAlert, setIsMessageAlert] = useStateWithLabel('isMessageAlert', false);

    const handleOnPushEmail = (e) => {
        setIsValidEmail(checkEmail(e.target.value));
        setEmail(e.target.value);
    };
    const isLogged = () => {
        return JSON.parse(localStorage.getItem('LogAppUser')) || false;
    };

    const showMessage = (text, isAlert) => {
        setMessageText(text);
        setIsMessageAlert(isAlert);
        setIsVisibleMessage(true);

        setTimeout(() => {
            setIsVisibleMessage(false);
        }, 5000);
    };
    const sendCredentials = () => {
        return axios
            .post(process.env.REACT_APP_API_LOGIN_URL, {
                email,
                password,
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
        setPassword(e.target.value);
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
            {isVisibleMessage ? <Message message={messageText} alert={isMessageAlert} /> : ''}
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
