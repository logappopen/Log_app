import React from 'react';
import PropTypes from 'prop-types';
import styles from './Message.module.scss';

const Message = ({ message, alert }) => {
    return (
        <div className={`${styles.message} ${!alert ? '' : styles.messageAlert}`}>{message}</div>
    );
};
// Definiuje domyślne wartości dla właściwości:
Message.defaultProps = {
    alert: false,
};

Message.propTypes = {
    message: PropTypes.string.isRequired,
    alert: PropTypes.bool,
};

export default Message;
