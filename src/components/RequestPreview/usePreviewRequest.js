import {useLocation, useHistory} from "react-router-dom";
import React from "react";
import {projectsAPI} from "../../api/projects";
import {routes} from "../../routes";

export const usePreviewRequest = () => {
    let location = useLocation();
    let history = useHistory();

    const handleSubmit = async () => {
        if (location.state?.projectId) {
            try {
                await projectsAPI.createConversation(location.state?.projectId);
                history.push(routes.conversations);
            } catch (e) {
                console.log(e);
            }
        }
    }
    const handleCancel = () => history.push(routes.home);
    return {
        requestData: location.state?.requestData || null,
        onSubmit: handleSubmit,
        onCancel: handleCancel
    }
}