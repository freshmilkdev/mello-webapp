import {useState} from "react";
import {authAPI} from "../../api/auth";
import {removeState, saveState, tokenKey} from "../../helpers/localStorage";
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
            if (result?.data?.token) {
                saveState(tokenKey, result.data.token);
                history.push(routes.home);
            }
        } catch (e) {
            console.log(e);
            setError(true);
            setLoading(false);
        }
    }
    const handleLogout = () => {
        removeState(tokenKey);
        history.push(routes.login);
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