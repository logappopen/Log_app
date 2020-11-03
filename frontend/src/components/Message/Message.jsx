/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Message.module.scss';

const Message = ({ message, alert }) => {
    return (
        <div className={`${styles.message} ${!alert ? '' : styles.messageAlert}`}>
            {Array.isArray(message) ? message.map((v, i) => <p key={i}>{v}</p>) : message}
        </div>
    );
};
// Definiuje domyślne wartości dla właściwości:
Message.defaultProps = {
    alert: false,
};

Message.propTypes = {
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
        .isRequired,
    alert: PropTypes.bool,
};

export default Message;
