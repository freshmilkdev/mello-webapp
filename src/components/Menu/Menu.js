import React from 'react';
import styles from './Menu.module.css';
import clsx from "clsx";
import {Typography} from "../Shared/Typography/Typography";
import {Button} from "../Shared/Button/Button";
import {routes} from "../../routes";
import {useAuth} from "../Login/useAuth";

export const Menu = () => {
    const user = 'Lisa';
    const {onLogout} = useAuth();
    return <div className={clsx(styles.menu, 'flexCenter')}>
        <div className={styles.loginInner}>
            <Typography variant={'h3'}>Welcome {user}!</Typography>
            <Typography className='mb-3'>Menu</Typography>
            <Button linkTo={routes.maintenanceRequest} label={'Submit A Request'} rounded className='mb-3'/>
            <Button linkTo={routes.conversations} label={'View Conversations'} rounded className='mb-3'/>
            <Button label={'Log Out'} onClick={onLogout} rounded outlined/>
        </div>
    </div>
};