import {request} from "./request";

const endpoints = {
    login: `/login`,
    getToken: `/token`,
    verifyToken: `/token/verify`,
    refreshToken: `/token/refresh`
};
export const authService = {
    login: credentials =>
        request({
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            url: endpoints.getToken,
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
        }),
    refreshToken: token =>
        request({
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            url: endpoints.refreshToken,
        }),
}