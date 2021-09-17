import {useEffect, useState} from "react";
import {useProjects} from "./useProjects";
import {useCompanies} from "./useCompanies";
import {useCreateConversation} from "./useCreateConversation";
import {projectsAPI} from "../../api/projects";
import {useMessages} from "./useMessages";

export const useConversations = () => {
    const [data, setData] = useState({
        projectId: '',
        companyId: '',
        message: ''
    });
    const {projectId, companyId, message} = data;
    const {projects} = useProjects();
    const {companies} = useCompanies(projects, projectId);
    const {messages} = useMessages(projectId, companyId);
    useEffect(() => {
        if (!projectId && projects.length > 0) {
            if (projects[0].companies.length > 0) {
                setData({
                    ...data,
                    projectId: projects[0].id,
                    companyId: projects[0].companies[0].id
                });
            }
        }
    }, [projects, companies]);

    // useCreateConversation(projectId);
    const handleChange = e => setData({...data, [e.target.name]: e.target.value});
    const handleMessageSend = async e => {
        e.preventDefault();
        try {
            await projectsAPI.sendMessage(projectId, companyId, message);
        } catch (e) {
            console.log(e);
        }
    }
    return {
        data,
        onChange: handleChange,
        onMessageSend: handleMessageSend,
        projects,
        companies,
        messages
    }
}