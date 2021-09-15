import React from 'react';
import {Login} from "../components/Login/Login";
import {useAuth} from "../components/Login/useAuth";

export const LoginPage = () => {
    const {credentials, loading, error, onCredentialsChange, onLogin} = useAuth();
    return (
        <Login credentials={credentials} error={error} loading={loading}
               onLogIn={onLogin}
               onInputChange={onCredentialsChange}/>
    )
}