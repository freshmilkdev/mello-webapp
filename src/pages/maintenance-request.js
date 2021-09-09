import React, {useState} from 'react';

import {MaintenanceRequest} from "../components/MaintenanceRequest/MaintenanceRequest";

export const MaintenanceRequestPage = () => {
    const [requestData, setRequestData] = useState({
        jobType: '',
        numberOfRequests: '',
        address: '',
        city: '',
        zipCode: '',
        description: '',
        photo: ''
    });
    const [file, setFile] = useState(null);

    const handleInputChange = e => {
        if (e.target.type === 'file' && e.target.files.length) {
            setFile(e.target.files[0])
        }

        setRequestData({...requestData, [e.target.name]: e.target.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(file);
        console.log('submit login form action');
    }
    return (
        <MaintenanceRequest
            onSubmit={handleSubmit}
            onInputChange={handleInputChange}
            requestData={requestData}/>
    )
}