import React from 'react';

import {Header} from "../Shared/Header/Header";
import {Select} from "../Shared/Select/Select"
import {Chat} from "./Chat/Chat";
import styles from './Conversations.module.css';
import {useConversations} from "./useConversations";

const formatDate = date => date? date.split('T')[0].split('-').reverse().join('/') : '';

const formatProjectsOptions = (projects) => projects.map(p => ({
    name: `${p.job_type} ${p.created ? formatDate(p.created) : ''}`,
    id: p.id
}))
export const Conversations = () => {
    const {data, companies, projects, onChange, onMessageSend, messages} = useConversations();
    const {projectId, companyId, message} = data;
    return (
        <div>
            <Header/>
            <div className={styles.selectWrapper}>
                <Select
                    className={'mb-1'}
                    label={'Project'}
                    options={formatProjectsOptions(projects)}
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