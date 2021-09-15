import axios from 'axios';
import {loadState} from "../helpers/localStorage";

const baseUrl = 'localhost:3000/api';

const request = axios.create({
    baseURL: baseUrl
});
// Add a request interceptor
request.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${loadState('accessToken')}`
    return config;
});
export {request};
