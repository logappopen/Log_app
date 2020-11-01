import React, { useState } from 'react';
import ReturnButton from '../../components/ReturnButton/ReturnButton';
import styles from './LostPassword.module.scss';

const EMAILS = [];

const LostPasswordPage = () => {
    const [viewMessage, setViewMessage] = useState('');
    const [emailValue, setEmailValue] = useState('');

    const handleOnPushEmail = (event) => {
        const eMail = event.target.value;

        if (eMail) {
            setEmailValue(eMail);
            EMAILS.push(eMail);
        }
        return null;
    };
    const handleOnClickLogin = () => {
        if (EMAILS.lenght > 0) {
            setViewMessage(`${viewMessage}na podanego maila został wysłany reset hasła`);

            //   setTimeout(() => {
            //     //   setEmailValue("");
            //     setViewMessage(viewMessage + "");
            //   }, 4000);
        } else {
            setViewMessage(`${viewMessage}nie podano adresu eMail`);
        }
    };

    return (
        <div className={styles['section-lost-password']}>
            <form className={styles[('section-lost-password__form', 'login-form')]} action="">
                <label className={styles['login-form__label']} htmlFor="login">
                    Wpisz adres eMail podany przy rejestarcji konta
                    <input
                        type="email"
                        onChange={handleOnPushEmail}
                        value={emailValue}
                        className={styles['login-form__input']}
                    />
                </label>
                <p className={styles['section-lost-password__info']}>{viewMessage}</p>
                <button
                    className={styles['login-form__button']}
                    onClick={handleOnClickLogin}
                    type="submit"
                >
                    Wyślij
                </button>
            </form>
            <div className={styles['section-lost-password__return-button']}>
                <ReturnButton />
            </div>
        </div>
    );
};

export default LostPasswordPage;
