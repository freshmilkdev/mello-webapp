import {request} from "./core/request";

const endpoints = process.env.NODE_ENV === 'development' ? {
    login: /*`/token/`*/ 'https://run.mocky.io/v3/e4447582-4275-4187-95b7-3c750cd601d1',
    getToken: /*`/token`*/ `https://run.mocky.io/v3/6512c41a-c0ae-4773-b127-977045c457ad`,
    //test for error
    //https://run.mocky.io/v3/bed572cc-40e7-4a66-a0a9-6ee991c191cb
    verifyToken: /*`/token/verify`*/ 'https://run.mocky.io/v3/6512c41a-c0ae-4773-b127-977045c457ad',
    refreshToken: /*`/token/refresh`*/ 'https://run.mocky.io/v3/e4447582-4275-4187-95b7-3c750cd601d1'
} : {
    login: `/token/`,
    verifyToken: `/token/verify/`,
    refreshToken: `/token/refresh/`
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