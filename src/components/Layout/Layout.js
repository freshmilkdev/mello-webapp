import React from 'react';
import {useLocation} from "react-router-dom";
import styles from './Layout.module.css';
import {routes} from "../../routes";
import clsx from "clsx";

export const Layout = ({children}) => {
    let {pathname} = useLocation();
    const isOuterPage = pathname === routes.home || pathname === routes.login;
    return (
        <div>
            <main className={clsx(styles.layout, {[styles.outerPage]: isOuterPage})}>{children}</main>
        </div>
    )
}