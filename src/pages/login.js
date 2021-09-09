import React, {useState} from 'react';
import {Login} from "../components/Login/Login";

export const LoginPage = () => {
    const [credentials, setCredentials] = useState({login: '', password: ''});
    const handleInputChange = e => setCredentials({...credentials, [e.target.name]: e.target.value});
    const handleLogIn = (e) => {
        e.preventDefault();
        console.log('submit login form action');
    }
    return (
        <Login onLogIn={handleLogIn}
               onInputChange={handleInputChange}
               credentials={credentials}/>
    )
}