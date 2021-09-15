import React, {useEffect, useState} from 'react';
import {Conversations} from "../components/Conversations/Conversations";
import {useProjects} from "../components/Conversations/useProjects";
import {useCompanies} from "../components/Conversations/useCompanies";

// const projects = [{id: 1, name: 'Project 1'}, {id: 2, name: 'Project 2'}];
// const companies = [{id: 1, name: 'Company 1'}, {id: 2, name: 'Company 2'}];
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
        projectId: '',
        companyId: '',
        chatInputMessage: ''
    });
    const {projects} = useProjects();
    const {companies} = useCompanies(data.projectId);
    useEffect(() => {
        if (!data.projectId && projects.length > 0) {
            setData({...data, projectId: projects[0].id});
        }
        if (!data.companyId && companies.length > 0) {
            setData({...data, companyId: companies[0].id});
        }
    }, [projects, companies]);
    console.log(companies)
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