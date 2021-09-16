import {request} from "./core/request";

const endpoints = {
    getProjects: `/project/`,
    createProject: `/project/`,
    createConversation: projectId => `/project/${projectId}/`,
    getMessages: (projectId, companyId) => `/project/${projectId}/company/${companyId}/`,
    sendMessage: (projectId, companyId) => `/project/${projectId}/company/${companyId}/`
}
export const projectsAPI = {
    getProjects: () =>
        request({
            method: 'get',
            url: endpoints.getProjects,
        }),
    createProject: (formData) =>
        request({
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            withCredentials: true,
            url: endpoints.createProject,
            data: formData
        }),
    createConversation: (projectId) =>
        request({
            method: 'patch',
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            url: endpoints.createConversation(projectId),
            data: {
                project_id: projectId
            }
        }),

    getMessages: (projectId, companyId) =>
        request({
            method: 'get',
            url: endpoints.getMessages(projectId, companyId),
        }),
    sendMessage: (projectId, companyId, message) =>
        request({
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            url: endpoints.sendMessage(projectId, companyId),
            data: {
                message,
                project_id: projectId,
                company_id: companyId
            }
        })
}