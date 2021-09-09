import React, {useState} from 'react';
import {TextInput} from "../Shared/TextInput/TextInput";
import styles from './Login.module.css';
import clsx from "clsx";
import {Typography} from "../Shared/Typography/Typography";
import {Button} from "../Shared/Button/Button";

export const Login = ({credentials, onLogIn, onInputChange}) => {
    const {login, password} = credentials;
    return <div className={clsx(styles.login, 'flexCenter')}>
        <div className={styles.loginInner}>
            <Typography variant={'h3'}>Welcome!</Typography>
            <Typography className='mb-1'>Sign In</Typography>
            <TextInput
                rounded
                onChange={onInputChange}
                value={login}
                name='login'
                label='E-Mail or Username'
                className='mb-1'/>
            <TextInput
                rounded
                onChange={onInputChange}
                value={password}
                name='password'
                label='Password'
                type='password'
                className='mb-1'/>
            <Button label={'Log In'} onClick={onLogIn} rounded />
        </div>
    </div>
};
