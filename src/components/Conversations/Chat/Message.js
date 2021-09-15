import React, {memo} from 'react';
import PropTypes from 'prop-types';
import styles from './Chat.module.css';
import clsx from "clsx";
export const Message = memo(({text, datetime}) => (
    <div className={clsx(styles.messageWrapper, 'mb-1')}>
    <div className={clsx(styles.message)}>
        <div className={styles.messageDate}>{datetime}</div>
        <div className={clsx(styles.messageInner, 'mb-1')}>{text}</div>
    </div>
    </div>
));

Message.propTypes = {
    text: PropTypes.string.isRequired,
    datetime: PropTypes.string
};