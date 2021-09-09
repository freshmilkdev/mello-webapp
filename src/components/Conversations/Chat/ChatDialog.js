import React from 'react';
import PropTypes from 'prop-types';
import {Message} from "./Message";
import styles from './Chat.module.css';

export const ChatDialog = ({messages}) =>
    <div className={styles.chatDialog}>
        {(messages || []).map(({id, text, datetime}) =>
            <Message key={`message${id}`} text={text} datetime={datetime}/>)}
    </div>

ChatDialog.propTypes = {
    messages: PropTypes.array.isRequired
};