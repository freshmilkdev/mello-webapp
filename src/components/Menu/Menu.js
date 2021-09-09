import React from 'react';
import PropTypes from 'prop-types';
import styles from './Menu.module.css';
import clsx from "clsx";
import {Typography} from "../Shared/Typography/Typography";
import {Button} from "../Shared/Button/Button";
import {routes} from "../../routes";

export const Menu = ({user, onLogOut}) => {

    return <div className={clsx(styles.menu, 'flexCenter')}>
        <div className={styles.loginInner}>
            <Typography variant={'h3'}>Welcome {user}!</Typography>
            <Typography className='mb-1'>Menu</Typography>
            <Button linkTo={routes.submitRequest} label={'Submit A Request'} rounded className='mb-1'/>
            <Button linkTo={routes.conversations} label={'View Conversations'} rounded className='mb-1'/>
            <Button label={'Log Out'} onClick={onLogOut} rounded outlined/>
        </div>
    </div>
};

Menu.propTypes = {
    onLogOut: PropTypes.func.isRequired,
    user: PropTypes.string.isRequired
};