import React, {memo} from 'react';
import PropTypes from 'prop-types';
import styles from './Chat.module.css';

import {ArrowTopIcon} from "../../Shared/Icons/ArrowTopIcon";

export const ChatInput = memo(({inputMessage, onChange}) =>
    (<div className={styles.chatInputWrapper}>
        <textarea
            placeholder={'Type your message here...'}
            rows={2} name='chatInputMessage'
            value={inputMessage}
            onChange={onChange}
            className={styles.chatInput}/>
        <button className={styles.chatInputBtn}>
            <ArrowTopIcon/>
            <span>Send</span>
        </button>
    </div>));

ChatInput.propTypes = {
    inputMessage: PropTypes.string.isRequired
};