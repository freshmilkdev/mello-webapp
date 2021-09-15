import React from 'react';
import {Login} from "../components/Login/Login";
import {useLogin} from "../components/Login/useLogin";

export const LoginPage = () => {
    const {credentials, error, onCredentialsChange, onLogin} = useLogin();
    return (
        <Login credentials={credentials} error={error} onLogIn={onLogin}
               onInputChange={onCredentialsChange}/>
    )
}