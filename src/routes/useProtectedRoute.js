import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {routes} from "./index";
import {authAPI} from "../api/auth";
import {saveState, removeState, loadState, localStorageKeys} from "../helpers/localStorage";

export const useProtectedRoute = (accessToken) => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    /*    useEffect(() => {
            (async (accessToken) => {
                if (accessToken) {
                    try {
                        setLoading(true);
                        const refreshToken = loadState(localStorageKeys.refreshToken);
                        const result = await authAPI.refreshToken(refreshToken);
                        if (result?.data?.access && result?.data?.refresh) {
                            saveState(localStorageKeys.accessToken, result.data.access);
                            saveState(localStorageKeys.refreshToken, result.data.refresh);
                        }
                    } catch (e) {
                        setLoading(false);
                        removeState(localStorageKeys.accessToken);
                        history.push(routes.login);
                    }
                }
            })(accessToken);
        }, []);*/
    useEffect(() => {
        (async (accessToken) => {
            if (accessToken) {
                try {
                    setLoading(true);
                    await authAPI.verifyToken(accessToken);
                } catch (e) {
                    setLoading(false);
                    removeState(localStorageKeys.accessToken);
                    removeState(localStorageKeys.refreshToken);
                    history.push(routes.login);
                }
            }
        })(accessToken);
    }, []);

    return {
        loading
    }
}