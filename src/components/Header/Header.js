import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle={
        background: "#27ae60",
        color: "#fff",
        borderRadius: '5px'
      }
    return (
        <div className='header'>
            <div>
            <NavLink className='logo' to='/home'><p><i class="fas fa-user-graduate"></i></p><h5>Bright <br/> <span className='logo-text'>Future</span> </h5> </NavLink>
            </div>
            <div className='navigation-bar'>
            <NavLink className='menu-link' activeStyle={activeStyle} to='/home'>Home</NavLink>
            <NavLink className='menu-link' activeStyle={activeStyle} to='/about'>About</NavLink>
            <NavLink className='menu-link' activeStyle={activeStyle} to='/services'>Services</NavLink>
            <NavLink className='menu-link' activeStyle={activeStyle} to='/teachers'>Teachers</NavLink>
            <NavLink className='menu-link' activeStyle={activeStyle} to='/contact'>Contact us</NavLink>
            </div>
        </div>
    );
};

export default Header;