import React from 'react';
import {Menu} from "../components/Menu/Menu";
import {useAuth} from "../hooks/auth/useAuth";

export const MenuPage = () => {
    const {onLogout} = useAuth();
    const user = 'Lisa';
    return <Menu onLogout={onLogout} user={user}/>
}