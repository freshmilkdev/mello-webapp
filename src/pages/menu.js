import React from 'react';
import {Menu} from "../components/Menu/Menu";
import {useAuth} from "../components/Login/useAuth";

export const MenuPage = () => {
    const {onLogout} = useAuth();
    const user = 'Lisa';
    return <Menu onLogout={onLogout} user={user}/>
}