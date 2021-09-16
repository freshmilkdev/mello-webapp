import React from 'react';
import {Input} from "../Shared/Input/Input";
import styles from './Login.module.css';
import clsx from "clsx";

import {Typography} from "../Shared/Typography/Typography";
import {Button} from "../Shared/Button/Button";
import {useAuth} from "./useAuth";

export const Login = () => {
    const {credentials, loading, error, onCredentialsChange, onLogin} = useAuth();
    const {email, password} = credentials;
    return (
        <div className={clsx(styles.login, 'flexCenter')}>
            <form className={styles.loginInner} onSubmit={onLogin}>
                <Typography variant={'h3'}>Welcome!</Typography>
                <Typography className='mb-3'>Sign In</Typography>
                <Input
                    rounded
                    onChange={onCredentialsChange}
                    value={email}
                    name='email'
                    type={`email`}
                    label='E-Mail or Username'
                    className='mb-3'/>
                <Input
                    rounded
                    onChange={onCredentialsChange}
                    value={password}
                    name='password'
                    label='Password'
                    type='password'
                    className='mb-3'/>
                {error && <div className={clsx(styles.error, 'mb-1')}>Wrong username or password</div>}
                <Button label={'Log In'} rounded loading={loading}/>
            </form>
        </div>
    )
};

