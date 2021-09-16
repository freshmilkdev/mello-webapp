import axios from 'axios';
import {loadState, localStorageKeys, saveState} from "../../helpers/localStorage";
import {authAPI} from "../auth";

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
request.interceptors.response.use((response) => {
    return response
}, async function (error) {
    const originalRequest = error.config;
    if ((error.response.status === 403 || error.response.status === 401) && !originalRequest._retry) {
        originalRequest._retry = true;
        const refreshToken = loadState(localStorageKeys.refreshToken);
        const result = await authAPI.refreshToken(refreshToken);
        if (result?.data?.access && result?.data?.refresh) {
            saveState(localStorageKeys.accessToken, result.data.access);
            saveState(localStorageKeys.refreshToken, result.data.refresh);
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + result.data.access;
        }
        return request(originalRequest);
    }
    return Promise.reject(error);
});
export {request};
