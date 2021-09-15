import {request} from "./request";

const endpoints = {
    getProjects: `/project`,
};
export const projectsAPI = {
    getProjects: credentials =>
        request({
            method: 'get',
            withCredentials: true,
            url: endpoints.getProjects,
            data: credentials
        })
}