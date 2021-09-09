import React, {useState} from 'react';
import {TextInput} from "../Shared/TextInput/TextInput";
import styles from './Menu.module.css';
import clsx from "clsx";
import {Typography} from "../Shared/Typography/Typography";
import {Button} from "../Shared/Button/Button";

export const Menu = () => {
    const userName = 'Lisa!';
    const handleClick = () => console.log('btn click');
    return <div className={clsx(styles.login, 'flexCenter')}>
        <div className={styles.loginInner}>
            <Typography variant={'h3'}>Welcome ${userName}!</Typography>
            <Typography className='mb-1'>Sign In</Typography>
            <Button label={'Log In'} onClick={handleClick} rounded />
        </div>
    </div>
};
