import React from 'react';
import {Input} from "../Shared/Input/Input";
import styles from './Login.module.css';
import clsx from "clsx";
import PropTypes from 'prop-types';
import {Typography} from "../Shared/Typography/Typography";
import {Button} from "../Shared/Button/Button";

export const Login = ({credentials, loading, error, onLogIn, onInputChange}) => {
    const {email, password} = credentials;
    return (
        <div className={clsx(styles.login, 'flexCenter')}>
            <form className={styles.loginInner} onSubmit={onLogIn}>
                <Typography variant={'h3'}>Welcome!</Typography>
                <Typography className='mb-3'>Sign In</Typography>
                <Input
                    rounded
                    onChange={onInputChange}
                    value={email}
                    name='email'
                    type={`email`}
                    label='E-Mail or Username'
                    className='mb-3'/>
                <Input
                    rounded
                    onChange={onInputChange}
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

Login.propTypes = {
    loading: PropTypes.bool,
    credentials: PropTypes.shape({
        email: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired
    }).isRequired,
    onLogIn: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired,
};