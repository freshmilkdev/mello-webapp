import {request} from "./request";

const endpoints = {
    login: `/token`,
    getToken: /*`/token`*/ `https://run.mocky.io/v3/6512c41a-c0ae-4773-b127-977045c457ad`,
    //test for error
    //https://run.mocky.io/v3/bed572cc-40e7-4a66-a0a9-6ee991c191cb
    verifyToken: /*`/token/verify`*/ 'https://run.mocky.io/v3/6512c41a-c0ae-4773-b127-977045c457ad',
    refreshToken: `/token/refresh`
};
export const authAPI = {
    login: credentials =>
        request({
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            url: endpoints.login,
            data: credentials
        }),
    verifyToken: token =>
        request({
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            url: endpoints.verifyToken,
            data: {
                token
            }
        }),
    refreshToken: (accessToken, refreshToken) =>
        request({
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            url: endpoints.refreshToken,
            data: {
                access: accessToken,
                refresh: refreshToken
            }
        }),
}