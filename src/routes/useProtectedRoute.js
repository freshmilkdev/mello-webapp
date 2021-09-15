import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {routes} from "./index";
import {authAPI} from "../api/auth";
import {saveState, removeState} from "../helpers/localStorage";

export const useProtectedRoute = (token, path) => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async (token) => {
            if (token) {
                try {
                    setLoading(true);
                    const result = await authAPI.verifyToken(token);
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
        })();
    }, []);

    return {
        loading
    }
}