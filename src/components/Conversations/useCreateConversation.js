import {useEffect} from "react";
import {projectsAPI} from "../../api/projects";

export const useCreateConversation = (projectId) => {
    useEffect(() => {
        if (projectId) {
            (async () => {
                try {
                    await projectsAPI.createConversation(projectId);
                } catch (e) {
                    console.log(e);
                }
            })(projectId);
        }
    }, [projectId]);
}