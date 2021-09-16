import {request} from "./core/request";

const endpoints = process.env.NODE_ENV === 'development' ?{
    getProjects: `https://run.mocky.io/v3/19bedbf8-5d57-4d3f-8edd-e40971e83cc6`,
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