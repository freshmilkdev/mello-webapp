import {request} from "./request";

const endpoints = {
    getProjects: `https://run.mocky.io/v3/a092c4a6-c24f-4c01-a1c3-e1cde88cbe93`,
};
export const projectsAPI = {
    getProjects: () =>
        request({
            method: 'get',
            url: endpoints.getProjects,
        })
}