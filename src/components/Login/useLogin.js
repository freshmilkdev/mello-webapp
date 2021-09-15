import {useState} from "react";
import {authService} from "../../services/auth.service";
import {saveState, tokenKey} from "../../helpers/localStorage";
import {useHistory} from "react-router-dom";
import {routes} from "../../routes";

export const useLogin = () => {
    const history = useHistory();
    const [credentials, setCredentials] = useState({email: '', password: ''});
    const [error, setError] = useState(false);
    const handleInputChange = e => setCredentials({...credentials, [e.target.name]: e.target.value});
    const handleLogIn = async (e) => {
        e.preventDefault();
        try {
            if (error) setError(false);
            const result = await authService.login(credentials);
            if (result?.data?.token) {
                saveState(tokenKey, result.token);
                history.push(routes.home);
            }
        } catch (e) {
            setError(true);
        }
    }
    return {
        credentials,
        error,
        onCredentialsChange: handleInputChange,
        onLogin: handleLogIn
    }
}