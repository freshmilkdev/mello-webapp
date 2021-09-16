import {request} from "./core/request";

const endpoints = {
    login: `/token/`,
    logout: `/logout/`,
    verifyToken: `/token/verify/`,
    refreshToken: `/token/refresh/`
}
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
    logout: refreshToken =>
        request({
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            url: endpoints.logout,
            data: {
                refresh_token: refreshToken
            }
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
    refreshToken: (refreshToken) =>
        request({
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            url: endpoints.refreshToken,
            data: {
                refresh: refreshToken
            }
        }),
}