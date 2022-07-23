/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import logo from '../images/logo.svg';

export default function navbar() {
    return (
        <header >
            <nav className="containerpall container ">
               <img src={logo} alt="logo" />
                    
                       <a href="#">Features</a>
                        <a href="#">Pricing</a>
                        <a href="#">Resources</a>
            
                <div className="nav-right">
                    <a href="#">Login</a>
                    <a href="#">Sign Up</a>
                </div>
            </nav>
        </header>
    );
}
