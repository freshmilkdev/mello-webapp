import React from 'react';
import {Menu} from "../components/Menu/Menu";

export const MenuPage = () => {
    const handleLogOut = () => console.log('logout');
    const user = 'Lisa';
    return <Menu onLogOut={handleLogOut} user={user}/>
}