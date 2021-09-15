import {useEffect, useState} from "react";

import {companiesAPI} from "../../api/companies";

export const useCompanies = projectId => {
    const [companies, setCompanies] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                if (projectId) {
                    const result = await companiesAPI.getCompanies(projectId);
                    if (result?.data?.companies) {
                        setCompanies(result?.data?.companies);
                    }
                }
            } catch (e) {
                console.log(e);
            }
        })();
    }, [projectId]);
    console.log(companies)
    return {
        companies
    }
}