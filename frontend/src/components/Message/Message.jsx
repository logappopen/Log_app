import React from 'react'
import styles from './Message.module.scss'

const Message = ({ message, alert }) => {
    return <div className={`${styles.message} ${alert ? styles.messageAlert : ''}`}>{message}</div>
}

export default Message
