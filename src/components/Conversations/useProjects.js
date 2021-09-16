import {useEffect, useState} from "react";
import {projectsAPI} from "../../api/projects";

export const useProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const result = await projectsAPI.getProjects();
                if (result?.data?.results) {
                    setProjects(result?.data?.results);
                }
            } catch (e) {
                console.log(e);
            }
        })();
    }, []);
    return {
        projects
    }
}