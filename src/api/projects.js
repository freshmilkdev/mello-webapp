import {request} from "./core/request";

const endpoints = process.env.NODE_ENV === 'development' ?{
    getProjects: `/project/`,
}:{
    getProjects: '/project/',
};
export const projectsAPI = {
    getProjects: () =>
        request({
            method: 'get',
            url: endpoints.getProjects,
        })
}