import {useState} from "react";
import {authAPI} from "../../api/auth";
import {removeState, saveState, localStorageKeys, loadState} from "../../helpers/localStorage";
import {useHistory} from "react-router-dom";
import {routes} from "../../routes";

export const useAuth = () => {
    const history = useHistory();
    const [credentials, setCredentials] = useState({email: '', password: ''});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleInputChange = e => setCredentials({...credentials, [e.target.name]: e.target.value});
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            if (error) setError(false);
            setLoading(true);
            const result = await authAPI.login(credentials);
            if (result?.data?.access && result?.data?.refresh) {
                saveState(localStorageKeys.accessToken, result.data.access);
                saveState(localStorageKeys.refreshToken, result.data.refresh);
                history.push(routes.home);
            }
        } catch (e) {
            console.log(e);
            setError(true);
            setLoading(false);
        }
    }
    const handleLogout = async () => {
        const refreshToken = loadState(localStorageKeys.refreshToken);
        try {
            await authAPI.logout(refreshToken);
        } catch (e) {

        } finally {
            removeState(localStorageKeys.accessToken);
            history.push(routes.login);
        }

    }
    return {
        loading,
        credentials,
        error,
        onCredentialsChange: handleInputChange,
        onLogin: handleLogin,
        onLogout: handleLogout
    }
}