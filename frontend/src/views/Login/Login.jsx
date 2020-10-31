import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import styles from './Login.module.scss'

import ReturnButton from '../../components/ReturnButton/ReturnButton'
import Message from '../../components/Message/Message'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [isValidEmail, setIsValidEmail] = useState(false)
    const [password, setPassword] = useState('')

    const handleOnPushEmail = (e) => {
        // don't remember from where i copied this code, but this works.
        let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (re.test(e.target.value)) {
            // this is a valid email address
            setIsValidEmail(true)
        } else {
            // invalid email, maybe show an error to the user.
            setIsValidEmail(false)
        }
        setEmail(e.target.value)
    }
    const sendCredentials = () => {
        return axios
            .post(process.env.REACT_APP_API_LOGIN_URL, {
                username: email,
                password: password,
            })
            .then(function ({ data }) {
                console.log(data)
                localStorage.setItem(
                    'LogAppUser',
                    JSON.stringify({
                        isLogged: true,
                        id: data.user.id,
                        email: data.user.email,
                        token: data.token,
                    })
                )
            })
            .then(function () {
                isLogged()
            })
            .catch(function (error) {
                localStorage.removeItem('LogAppUser')
                console.log(error)
            })
    }

    const handleOnPushPassword = (e) => {
        setPassword(e.target.value)
    }

    const handleOnClickLogin = (e) => {
        e.preventDefault()

        if (isValidEmail) {
            console.log('Wpisano poprawny email')
            sendCredentials()
        } else {
            console.log('Wpisano błędny email')
        }
        // console.log(email, password, isValidEmail)
    }

    const isLogged = () => {
        const isLogged = JSON.parse(localStorage.getItem('LogAppUser')).isLogged
        // console.log('isLogged', isLogged)

        return isLogged ? isLogged : false
    }

    return (
        <div className={styles['section-login']}>
            <Message />
            <form className={styles['login-form']} action="submit">
                <label className={styles['login-form__label']} htmlFor="login">
                    Adres email
                </label>
                <div>
                    <input
                        value={email}
                        type="email"
                        name="login"
                        onChange={handleOnPushEmail}
                        className={`${styles['login-form__input']}
                         ${!isValidEmail && email ? styles['valid-fail'] : ''}`}
                    />
                </div>
                <label className={styles['login-form__label']} htmlFor="password">
                    Hasło
                </label>
                <input
                    value={password}
                    type="password"
                    name="password"
                    onChange={handleOnPushPassword}
                    className={styles['login-form__input']}
                />
                <button className={styles['login-form__button']} onClick={handleOnClickLogin}>
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
    )
}

export default LoginPage
