import React from 'react';
import {Login} from "../components/Login/Login";
import {useAuth} from "../components/Login/useAuth";

export const LoginPage = () => {
    const {credentials, error, onCredentialsChange, onLogin} = useAuth();
    return (
        <Login credentials={credentials} error={error} onLogIn={onLogin}
               onInputChange={onCredentialsChange}/>
    )
}