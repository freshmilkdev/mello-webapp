import React from 'react';
import PropTypes from 'prop-types';
import styles from './Chat.module.css';
import {ChatDialog} from "./ChatDialog";
import {ChatInput} from "./ChatInput";

export const Chat = ({messages, inputMessage, onChange}) => (
    <div className={styles.chat}>
        <ChatDialog messages={messages} />
        <ChatInput inputMessage={inputMessage} onChange={onChange}/>
    </div>);

Chat.propTypes = {
    messages: PropTypes.array.isRequired,
    inputMessage: PropTypes.string,
    onChange: PropTypes.func.isRequired
};