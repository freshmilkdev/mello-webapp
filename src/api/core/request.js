import axios from 'axios';
import {loadState, localStorageKeys, removeState, saveState} from "../../helpers/localStorage";
import {authAPI} from "../auth";
import {routes} from "../../routes";

const baseUrl = 'https://beta.mellobee.com/api';

const request = axios.create({
    baseURL: baseUrl
});
// Add a request interceptor
request.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${loadState('accessToken')}`
    return config;
});
// Response interceptor for API calls
let refreshTokenInProgress = null;// this holds any in-progress token refresh requests
request.interceptors.response.use((response) => {
    return response
}, async function (error) {
    const originalRequest = error.config;
    if ((error.response.status === 403 || error.response.status === 401) && !originalRequest._retry) {
        originalRequest._retry = true;
        if (!refreshTokenInProgress) { // check for an existing in-progress request
            const refreshToken = loadState(localStorageKeys.refreshToken);
            try {
                refreshTokenInProgress = true;
                const result = await authAPI.refreshToken(refreshToken);
                refreshTokenInProgress = null;

                if (result?.data?.access) {
                    saveState(localStorageKeys.accessToken, result.data.access);
                    request.defaults.headers.common['Authorization'] = 'Bearer ' + result.data.access;

                    if (originalRequest.url === '/token/verify/') {
                        originalRequest.data = JSON.stringify({token: result.data.access});
                    }
                }
            } catch (e) {
                console.log(e);
                removeState(localStorageKeys.accessToken);
                removeState(localStorageKeys.refreshToken);
                return window.location.href = process.env.NODE_ENV === 'development' ? routes.login : '/mello-webapp/';
            }
        }
        return request(originalRequest);
    }
    return Promise.reject(error);
});
export {request};
