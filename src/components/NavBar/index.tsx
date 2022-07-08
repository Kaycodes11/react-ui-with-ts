import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './styled';

function NavBar() {
    const activeClassName = "underline";
    return (
        <Nav>
            <NavLink to='/'>
                <img src={require('../../logo.svg')} alt='logo'/>
            </NavLink>
            <Bars/>
            <NavMenu>
                <NavLink to='/portfolio' className={({isActive}) => isActive ? activeClassName : undefined}>
                    Portfolio
                </NavLink>
                <NavLink to='/resume'>
                    Resume
                </NavLink>
                <NavLink to='/about'>
                    about
                </NavLink>
                <NavLink to='/sign-up'>
                    Sign Up
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn>
        </Nav>
    );
}

export {NavBar}
