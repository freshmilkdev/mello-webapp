import {useHistory} from "react-router-dom";
import {useState} from "react";
import {projectsAPI} from "../../api/projects";
import {routes} from "../../routes";

const getUnderscoreKey = key => {
    switch (key) {
        case 'jobType':
            return 'job_type';
        case 'numRequests':
            return 'num_requests';
        case 'zipCode':
            return 'zip_code';
        default:
            return key;
    }
}
export const useMaintenanceRequest = () => {
    const history = useHistory();

    const [requestData, setRequestData] = useState({
        jobType: '',
        numRequests: '',
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
            formData.append(getUnderscoreKey(key), requestData[key]);
        })
        if (file) {
            formData.append("image", file);
        }
        try {
            let result = await projectsAPI.createProject(formData);

            history.push({
                pathname: routes.requestPreview,
                state: {
                    requestData: {
                        ...requestData,
                        companies: result.data?.companies,
                    },
                    projectId: result.data?.id
                }
            });
        } catch (e) {
            console.log(e)
        }
    }
    return {
        onSubmit: handleSubmit,
        onInputChange: handleInputChange,
        requestData
    }
}