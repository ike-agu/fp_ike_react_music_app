import React from 'react';
import { NavLink } from 'react-router-dom';
// import { BackButton } from '../../components';
import './style.css'

export const Header = () => {
    return(
        <nav>

            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
            <NavLink to='/artists'>Artists</NavLink>
            {/* <BackButton /> */}
        </nav>
    )
};
