import {request} from "./core/request";

const endpoints = {
    getCompanies: `https://run.mocky.io/v3/f3142fa3-5f3b-401c-a020-6030a377b935?projectId=`,
};
export const companiesAPI = {
    getCompanies: projectId =>
        request({
            method: 'get',
            url: endpoints.getCompanies + projectId,
        })
}