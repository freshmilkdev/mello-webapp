import {useEffect, useState} from "react";
import {useProjects} from "./useProjects";
import {useCompanies} from "./useCompanies";
import {useCreateConversation} from "./useCreateConversation";

export const useConversations = () => {
    const [data, setData] = useState({
        projectId: '',
        companyId: '',
        chatInputMessage: ''
    });
    const {projects} = useProjects();
    const {companies} = useCompanies(projects, data.projectId);


    useEffect(() => {
        if (!data.projectId && projects.length > 0) {
            if (projects[0].companies.length > 0) {
                setData({
                    ...data,
                    projectId: projects[0].id,
                    companyId: projects[0].companies[0].id
                });
            }
        }
    }, [projects, companies]);

    useCreateConversation(data.projectId);
    const handleChange = e => setData({...data, [e.target.name]: e.target.value});
    const handleMessageSend = e => {
        e.preventDefault();
    }
    return {
        data,
        onChange: handleChange,
        onMessageSend: handleMessageSend,
        projects,
        companies
    }
}