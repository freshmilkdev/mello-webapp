import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import {Typography} from "../Typography/Typography";
import {Link} from "react-router-dom";
import {routes} from "../../../routes";
import clsx from "clsx";


export const Header = ({title}) => {
    return (
        <header className={clsx('flexCenter', styles.header, 'mb-3')}>
            {title && <Typography variant='h2'>{title}</Typography>}
            <Link to={routes.home} className={styles.link}>Return to Home</Link>
        </header>
    )
}
Header.propTypes = {
    title: PropTypes.string
}