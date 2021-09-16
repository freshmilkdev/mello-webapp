import React, {useState} from 'react';

import {MaintenanceRequest} from "../components/MaintenanceRequest/MaintenanceRequest";
import {projectsAPI} from "../api/projects";
import {useHistory} from "react-router-dom";
import {routes} from "../routes";

export const MaintenanceRequestPage = () => {
    const history = useHistory();

    const [requestData, setRequestData] = useState({
        job_type: '',
        num_requests: '',
        address: '',
        city: '',
        zipCode: '',
        message: ''
    });
    const [file, setFile] = useState(null);

    const handleInputChange = e => {
        if (e.target.type === 'file' && e.target.files.length) {
            return setFile(e.target.files[0]);
        }
        setRequestData({...requestData, [e.target.name]: e.target.value});
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        Object.keys(requestData).map((key) => {
            formData.append(key, requestData[key]);
        })
        if (file) {
            formData.append("image", file);
        }
        try {
            await projectsAPI.createProject(formData);
            history.push(routes.home);
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <MaintenanceRequest
            onSubmit={handleSubmit}
            onInputChange={handleInputChange}
            requestData={requestData}/>
    )
}