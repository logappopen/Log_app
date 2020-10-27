import React, { useState } from 'react';
import ReturnButton from '../../components/ReturnButton/ReturnButton';
import styles from './LostPassword.module.scss';

const EMAILS = [];

const LostPasswordPage = () => {
    const [vievMessage, setVievMessage] = useState('');
    const [emailValue, setEmailValue] = useState('');

    const handleOnPushEmail = (event) => {
        const eMail = event.target.value;

        if (eMail) {
            setEmailValue(eMail);
            EMAILS.push(eMail);
        } else return;
    };
    const handleOnClickLogin = () => {
        if (EMAILS.lenght > 0) {
            setVievMessage(
                vievMessage + 'na podanego maila został wysłany reset hasła'
            );

            //   setTimeout(() => {
            //     //   setEmailValue("");
            //     setVievMessage(vievMessage + "");
            //   }, 4000);
        } else {
            setVievMessage(vievMessage + 'nie podano adresu eMail');
        }
    };

    return (
        <div className={styles['section-lost-password']}>
            <form
                className={
                    styles[('section-lost-password__form', 'login-form')]
                }
                action=""
            >
                <label className={styles['login-form__label']} htmlFor="login">
                    Wpisz adres eMail podany przy rejestarcji konta
                </label>
                <input
                    type="email"
                    onChange={handleOnPushEmail}
                    value={emailValue}
                    className={styles['login-form__input']}
                />
                <p className={styles['section-lost-password__info']}>
                    {vievMessage}
                </p>
                <button
                    className={styles['login-form__button']}
                    onClick={handleOnClickLogin}
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
