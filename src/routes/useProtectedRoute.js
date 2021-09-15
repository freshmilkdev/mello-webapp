import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {routes} from "./index";
import {authService} from "../services/auth.service";
import {saveState, removeState} from "../helpers/localStorage";

export const useProtectedRoute = (token, path) => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        async function verifyToken(token) {
            if (token) {
                try {
                    setLoading(true);
                    const result = await authService.verifyToken(token);
                    if (result?.data?.token) {
                        saveState('accessToken', result.data.token);
                    }
                } catch (e) {
                    removeState(`accessToken`);
                    history.push(routes.login);
                } finally {
                    setLoading(false);
                    console.log('tokenUpdated');
                }
            }
        }
        verifyToken(token);
    }, []);

    useEffect(() => {
        if (!token) history.push(routes.login);
    }, [token]);

    return {
        loading
    }
}