import React, {useState} from 'react';
import {TextInput} from "../Shared/TextInput/TextInput";
import styles from './Login.module.css';
import clsx from "clsx";
import {Typography} from "../Shared/Typography/Typography";
import {Button} from "../Shared/Button/Button";

export const Login = () => {
    const [credentials, setCredentials] = useState({login: '', password: ''});
    const {login, password} = credentials;
    const handleInputChange = e => setCredentials({...credentials, [e.target.name]: e.target.value});
    const handleLogIn = () => console.log('login action');

    return <div className={clsx(styles.login, 'flexCenter')}>
        <div className={styles.loginInner}>
            <Typography variant={'h3'}>Welcome!</Typography>
            <Typography className='mb-1'>Sign In</Typography>
            <TextInput
                rounded
                onChange={handleInputChange}
                value={login}
                name='login'
                label='E-Mail or Username'
                className='mb-1'/>
            <TextInput
                rounded
                onChange={handleInputChange}
                value={password}
                name='password'
                label='Password'
                type='password'
                className='mb-1'/>
            <Button label={'Log In'} onClick={handleLogIn} rounded />
        </div>
    </div>
};
