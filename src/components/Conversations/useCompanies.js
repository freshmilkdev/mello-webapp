import {useEffect, useState} from "react";

export const useCompanies = (projects, projectId) => {
    const [companies, setCompanies] = useState([]);
    useEffect(() => {
        if (projectId && projects.length > 0) {
            const found = projects.filter(project => project.id === +projectId);
            console.log(found)
            if (found.length && found[0].companies.length > 0) {
                setCompanies(found[0].companies);
            }
        }
    }, [projects, projectId]);

    return {
        companies
    }
}