import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {loadState, saveState} from "../helpers/localStorage";
import {routes} from "./index";
import {authService} from "../services/auth.service";

export const useProtectedRoute = (path) => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const accessToken = loadState("accessToken");
        if (!accessToken) history.push(routes.login);
        setLoading(true);

        authService.refreshToken()
            .then(({data}) => {
                if(data.token){
                    saveState('accessToken', data.token)
                }
            })
            .catch(() => history.push(routes.login))
            .finally(() => {
                setLoading(true);
                console.log('tokenUpdated');
            });
    }, [path]);
    return {
        loading
    }
}