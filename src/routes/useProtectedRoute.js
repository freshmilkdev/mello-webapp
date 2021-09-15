import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {routes} from "./index";
import {authService} from "../services/auth.service";

export const useProtectedRoute = (token, path) => {
    const history = useHistory();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!token) history.push(routes.login);
        setLoading(true);

        /*authService.verifyToken(accessToken)
            .then(({data}) => {
                if (data.token) {
                    saveState('accessToken', data.token)
                }
            })
            .catch(() => {
                removeState(`accessToken`);
                history.push(routes.login)
            })
            .finally(() => {
                setLoading(true);
                console.log('tokenUpdated');
            });*/
    }, [token]);

    return {
        loading
    }
}