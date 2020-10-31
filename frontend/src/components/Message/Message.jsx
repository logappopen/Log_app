import React from 'react'
import styles from './Message.module.scss'

const ErrorPage = ({ message, alert }) => {
    return <div className={`${styles.message} ${alert ? styles.messageAlert : ''}`}>{message}</div>
}

export default ErrorPage
