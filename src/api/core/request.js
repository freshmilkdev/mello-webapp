import axios from 'axios';
import {loadState} from "../../helpers/localStorage";

const baseUrl = 'https://beta.mellobee.com/api';

const request = axios.create({
    baseURL: baseUrl
});
// Add a request interceptor
request.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${loadState('accessToken')}`
    return config;
});
export {request};
