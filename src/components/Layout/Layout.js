import React from 'react';
import styles from './Layout.module.css';
export const Layout = ({children}) => {
    return <div>
        <main className={styles.layout}>{children}</main>
    </div>
}