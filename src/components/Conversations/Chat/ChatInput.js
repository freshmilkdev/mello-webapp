import React, {memo} from 'react';
import PropTypes from 'prop-types';
import styles from './Chat.module.css';

import {ArrowTopIcon} from "../../Shared/Icons/ArrowTopIcon";
import clsx from "clsx";

export const ChatInput = memo(({inputMessage, onChange, onMessageSend}) =>
    (<form className={styles.chatInputWrapper} onSubmit={onMessageSend}>
        <textarea
            required
            placeholder={'Type your message here...'}
            rows={2} name='message'
            value={inputMessage}
            onChange={onChange}
            className={styles.chatInput}/>
        <button className={clsx(styles.chatInputBtn,{
            [styles.disabled]: !inputMessage
        })} disabled={!inputMessage}>
            <ArrowTopIcon/>
            <span>Send</span>
        </button>
    </form>));

ChatInput.propTypes = {
    inputMessage: PropTypes.string.isRequired
};