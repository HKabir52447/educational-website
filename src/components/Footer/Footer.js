import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div>
            <NavLink className='logo' to='/home'><p><i class="fas fa-user-graduate"></i></p><h5>Bright <br/> <span className='logo-text'>Future</span> </h5> </NavLink>
            </div>
            <div className='copy-right'>
            <p> &copy;2021, Bright Future. All rights reserved. </p>
            </div>
            <div className='social-media'>
            <p> 
                <a href='https://www.facebook.com/' target='blank'><i class="fab fa-facebook-f"></i></a>
                <a href='https://www.instagram.com/?hl=en' target='blank'><i class="fab fa-instagram"></i></a>
                <a href='https://www.linkedin.com/' target='blank'><i class="fab fa-linkedin-in"></i></a>
                <a href='https://twitter.com/' target='blank'><i class="fab fa-twitter"></i></a>
            </p>
            </div>
        </div>
    );
};

export default Footer;