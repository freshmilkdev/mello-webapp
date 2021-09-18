import {useEffect, useState} from "react";
import {projectsAPI} from "../../api/projects";

export const useMessages = (projectId, companyId, projects) => {
    const [messages, setMessages] = useState([]);
    const fetchMessages = async () => {
        try {
            const found = projects.filter(p => p.id === +projectId && p.companies.some(c=>c.id === +companyId));

            if (found.length > 0) {
                const result = await projectsAPI.getMessages(projectId, companyId);
                if (result?.data) {
                    setMessages(result?.data);
                }
            }

        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        if (projectId && companyId) {
            fetchMessages();
        }
    }, [projectId, companyId]);
    return {
        messages,
        fetchMessages
    }
}