import React from 'react';

import {Header} from "../Shared/Header/Header";
import {Select} from "../Shared/Select/Select"
import {Chat} from "./Chat/Chat";
import styles from './Conversations.module.css';
import {useConversations} from "./useConversations";
const messages = [
    {
        id: 1,
        datetime: '9/3/21, 8:22 am',
        text: `Hello, thank you for reaching out to us. Our rates are $175/hr with a minimum of 30 minutes. Based on your job description and pictures we estimate that it’ll take less than 2 hours to completely fix your issue, but it will depend on the specifics of the situation once when get there. Our next availability is Friday.`
    },
    {
        id: 2,
        datetime: '9/3/21, 8:22 am',
        text: `Hello, thank you for reaching out to us. Our rates are $175/hr with a minimum of 30 minutes. Based on your job description and pictures we estimate that it’ll take less than 2 hours to completely fix your issue, but it will depend on the specifics of the situation once when get there. Our next availability is Friday.`
    },
    {
        id: 3,
        datetime: '9/3/21, 8:22 am',
        text: `Hello, thank you for reaching out to us. Our rates are $175/hr with a minimum of 30 minutes. Based on your job description and pictures we estimate that it’ll take less than 2 hours to completely fix your issue, but it will depend on the specifics of the situation once when get there. Our next availability is Friday.`
    }
]
export const Conversations = () => {
    const {data, companies, projects, onChange, onMessageSend} = useConversations();
    const {projectId, companyId, message} = data;
    return (
        <div>
            <Header/>
            <div className={styles.selectWrapper}>
                <Select
                    className={'mb-1'}
                    label={'Project'}
                    options={projects}
                    onChange={onChange}
                    name='projectId'
                    value={projectId}/>
                <Select
                    className={'mb-1'}
                    label={'Company'}
                    options={companies}
                    onChange={onChange}
                    name='companyId'
                    value={companyId}/>
            </div>
            <Chat messages={messages} inputMessage={message} onChange={onChange} onMessageSend={onMessageSend}/>
        </div>
    );
}