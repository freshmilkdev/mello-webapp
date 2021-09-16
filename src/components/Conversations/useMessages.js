import {useEffect, useState} from "react";
import {projectsAPI} from "../../api/projects";

const messagesData = [
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
export const useMessages = (projectId, companyId) => {
    const [messages, setMessage] = useState([]);
    useEffect(() => {
        if (projectId && companyId) {
            (async () => {
                try {
                    const result = await projectsAPI.getMessages(projectId, companyId);
                    if (result?.data?.messages) {
                        setMessage(result?.data?.messages);
                    } else {
                        setMessage(messagesData)
                    }
                } catch (e) {
                    console.log(e);
                }
            })();
        }
    }, [projectId, companyId]);
    return {
        messages
    }
}