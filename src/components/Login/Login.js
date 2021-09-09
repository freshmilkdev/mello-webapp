import React from 'react';
import {TextInput} from "../Shared/TextInput/TextInput";
import styles from './Login.module.css';
import clsx from "clsx";
import PropTypes from 'prop-types';
import {Typography} from "../Shared/Typography/Typography";
import {Button} from "../Shared/Button/Button";

export const Login = ({credentials, onLogIn, onInputChange}) => {
    const {login, password} = credentials;
    return <div className={clsx(styles.login, 'flexCenter')}>
        <form className={styles.loginInner} onSubmit={onLogIn}>
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
            <Button label={'Log In'} rounded />
        </form>
    </div>
};

Login.propTypes = {
    credentials: PropTypes.shape({
        login: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired
    }).isRequired,
    onLogIn: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired,
};