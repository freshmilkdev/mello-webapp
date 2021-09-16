import {request} from "./core/request";

const endpoints = process.env.NODE_ENV === 'development' ?{
    getProjects: `/project/`,
    createProject: `/project/`
}:{
    getProjects: '/project/',
};
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
                // 'Content-Type': 'application/json',
                'Content-Type': 'multipart/form-data'
            },
            withCredentials: true,
            url: endpoints.createProject,
            data: formData
        })
}