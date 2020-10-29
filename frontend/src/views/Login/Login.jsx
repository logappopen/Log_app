import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import styles from './Login.module.scss';

import ReturnButton from '../../components/ReturnButton/ReturnButton';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            isValidEmail: false,
            password: '',
        };
    }
    render() {
        const handleOnPushEmail = (e) => {
            // don't remember from where i copied this code, but this works.
            let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (re.test(e.target.value)) {
                // this is a valid email address
                this.setState({ isValidEmail: true });
            } else {
                // invalid email, maybe show an error to the user.
                this.setState({ isValidEmail: false });
            }
            this.setState({ email: e.target.value });
        };

        const handleOnPushPassword = (e) => {
            this.setState({ password: e.target.value });
        };

        const handleOnClickLogin = (e) => {
            e.preventDefault();

            if (this.state.isValidEmail) {
                console.log('Wpisano poprawny email');
            } else {
                console.log('Wpisano błędny email');
            }
            console.log(this.state);
        };

        return (
            <div className={styles['section-login']}>
                <form className={styles['login-form']} action="submit">
                    <label
                        className={styles['login-form__label']}
                        htmlFor="login"
                    >
                        Adres email
                    </label>
                    <input
                        value={this.state.email}
                        type="email"
                        name="login"
                        onChange={handleOnPushEmail}
                        className={styles['login-form__input']}
                    />
                    <label
                        className={styles['login-form__label']}
                        htmlFor="password"
                    >
                        Hasło
                    </label>
                    <input
                        value={this.state.password}
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
                        <NavLink to="/lost_password">
                            Zapomniałem hasła...
                        </NavLink>
                    </ul>
                </nav>
                <div className={styles['section-login__return-button']}>
                    <ReturnButton />
                </div>
            </div>
        );
    }
}

export default LoginPage;
