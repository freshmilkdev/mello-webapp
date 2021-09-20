import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {Message} from "./Message";
import styles from './Chat.module.css';

export const ChatDialog = memo(({messages}) =>
    <div className={styles.chatDialog}>
        {(messages || []).map(({body, index, created, author}) =>
            <Message key={`message${index}`} text={body} created={created} author={author}/>)}
    </div>)

ChatDialog.propTypes = {
    messages: PropTypes.array.isRequired
};