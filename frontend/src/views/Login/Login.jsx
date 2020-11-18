import React, { useContext } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';
import styles from './Login.module.scss';

import { StoreContext } from '../../store/StoreProvider';
import { useStateWithLabel, checkEmail, isLogged } from '../../helpers/helpers';
import ReturnButton from '../../components/ReturnButton/ReturnButton';

const LoginPage = () => {
    const [email, setEmail] = useStateWithLabel('email', '');
    const [isValidEmail, setIsValidEmail] = useStateWithLabel('isValidemail', false);
    const [password, setPassword] = useStateWithLabel('password', '');

    const { setUserData, showMessage } = useContext(StoreContext);

    const handleOnPushEmail = (e) => {
        setIsValidEmail(checkEmail(e.target.value));
        setEmail(e.target.value);
    };

    const sendCredentials = () => {
        trackPromise(
            axios
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
                    setUserData({
                        username: data.user.username,
                        email: data.user.email,
                        isLogged: true,
                        token: data.token,
                    });

                    return data;
                })
                .then((data) => {
                    console.log(data);

                    isLogged();
                    showMessage(`Zalogowałeś się poprawnie jako ${data.user.username}`);
                })
                .catch((error) => {
                    setUserData({
                        username: null,
                        email: null,
                        isLogged: false,
                        token: null,
                    });
                    localStorage.removeItem('LogAppUser');
                    const errorsMsg = [`Wystąpiły błędy podczas logowania:`];

                    Object.keys(error.response.data).map((v) => {
                        return errorsMsg.push(error.response.data[v][0]);
                    });
                    showMessage(errorsMsg, true);
                }),
        );
    };

    const handleOnPushPassword = (e) => {
        setPassword(e.target.value);
    };

    const handleOnClickLogin = (e) => {
        e.preventDefault();

        const errorsMsg = [`Wypełnij poprawnie formularz:`];

        if (isValidEmail) {
            console.log('Wpisano poprawny email');
            sendCredentials();
        } else {
            console.log('Wpisano błędny email');
            errorsMsg.push(`Wpisz poprawny email`);
        }

        if (!password.length) errorsMsg.push(`Wpisz hasło.`);
        showMessage(errorsMsg, true);
    };

    if (isLogged()) {
        return <Redirect to="/" />;
    }
    return (
        <div className={styles.sectionLogin}>
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
