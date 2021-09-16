import React, {memo} from 'react';
import PropTypes from 'prop-types';
import styles from './Chat.module.css';

import {ArrowTopIcon} from "../../Shared/Icons/ArrowTopIcon";

export const ChatInput = memo(({inputMessage, onChange, onMessageSend}) =>
    (<form className={styles.chatInputWrapper} onSubmit={onMessageSend}>
        <textarea
            required
            placeholder={'Type your message here...'}
            rows={2} name='chatInputMessage'
            value={inputMessage}
            onChange={onChange}
            className={styles.chatInput}/>
        <button className={styles.chatInputBtn} disabled={!inputMessage}>
            <ArrowTopIcon/>
            <span>Send</span>
        </button>
    </form>));

ChatInput.propTypes = {
    inputMessage: PropTypes.string.isRequired
};