import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
// import {routes} from "./index";
import {authAPI} from "../api/auth";
// import {removeState, localStorageKeys} from "../helpers/localStorage";

export const useProtectedRoute = (accessToken) => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        (async (accessToken) => {
            if (accessToken) {
                try {
                    setLoading(true);
                    await authAPI.verifyToken(accessToken);
                } catch (e) {
                    //console.log(e.response.status)
                    setLoading(false);
                   /* removeState(localStorageKeys.accessToken);
                    removeState(localStorageKeys.refreshToken);
                    history.push(routes.login);*/
                }
            }
        })(accessToken);
    }, []);

    return {
        loading
    }
}