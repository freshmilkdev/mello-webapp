import React, {useState} from 'react';
import {Conversations} from "../components/Conversations/Conversations";

const projects = [{id: 1, name: 'Project 1'}, {id: 2, name: 'Project 2'}];
const companies = [{id: 1, name: 'Company 1'}, {id: 2, name: 'Company 2'}];
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
export const ConversationsPage = () => {
    const [data, setData] = useState({
        projectId: 1,
        companyId: 1,
        chatInputMessage: ''
    });
    const handleChange = e => setData({...data, [e.target.name]: e.target.value});
    return (
        <Conversations
            messages={messages}
            data={data}
            onChange={handleChange}
            projects={projects}
            companies={companies}/>
    )
}