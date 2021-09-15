import React from 'react';
import PropTypes from 'prop-types';
import {Header} from "../Shared/Header/Header";
import {Select} from "../Shared/Select/Select"
import {Chat} from "./Chat/Chat";
import styles from './Conversations.module.css';
export const Conversations = ({data, projects, companies, messages, onChange}) => {
    const {projectId, companyId, chatInputMessage} = data
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
            <Chat messages={messages} inputMessage={chatInputMessage}  onChange={onChange}/>
        </div>
    );
}

Conversations.propTypes = {
    data: PropTypes.shape({
        projectId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        companyId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    }),
    projects: PropTypes.array.isRequired,
    companies: PropTypes.array.isRequired,
    messages: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
};