import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import styles from './Layout.module.css';
import {routes} from "../../routes";
import clsx from "clsx";

export const Layout = ({children}) => {
    let {pathname} = useLocation();
    const isOuterPage = pathname === routes.home || pathname === routes.login;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <main className={clsx(styles.layout, {[styles.outerPage]: isOuterPage})}>{children}</main>
        </div>
    )
}