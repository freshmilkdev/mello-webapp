import {useLocation, useHistory} from "react-router-dom";
import React, {useState} from "react";
import {projectsAPI} from "../../api/projects";
import {routes} from "../../routes";

export const usePreviewRequest = () => {
    let location = useLocation();
    let history = useHistory();
    const [conversationCreated, setConversationCreated] = useState(false);
    const handleSubmit = async () => {
        if (location.state?.projectId) {
            if (conversationCreated) {
                return history.push(routes.conversations);
            }
            try {
                await projectsAPI.createConversation(location.state?.projectId);
                setConversationCreated(true);
            } catch (e) {
                console.log(e);
            }
        }

    }
    const handleCancel = () => history.push(routes.home);
    return {
        requestData: location.state?.requestData || null,
        conversationCreated,
        onSubmit: handleSubmit,
        onCancel: handleCancel
    }
}