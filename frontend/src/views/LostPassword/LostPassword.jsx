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
        <div className={styles.wrapper}>
            <form className={styles.form} action="">
                <label className={styles.label} htmlFor="email">
                    Wpisz adres email podany przy rejestarcji konta
                    <input
                        type="email"
                        onChange={handleOnPushEmail}
                        value={emailValue}
                        className={styles.input}
                    />
                </label>
                <p className={styles.info}>{viewMessage}</p>
                <button className={styles.button} onClick={handleOnClickLogin} type="submit">
                    Wyślij
                </button>
            </form>
            <ReturnButton />
        </div>
    );
};

export default LostPasswordPage;
