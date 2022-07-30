/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import logo from '../images/logo.svg';

export default function Navbar() {
    return (
        <header >
            <nav className="pr-20 pl-20 px-20 py-20">
             <div className="flex flex-row pl-2">  <img src={logo} alt="logo" />
                    <a href="#">Features</a>
                        <a href="#">Pricing</a>
                        <a href="#">Resources</a></div>
                       
            
                <div className="float-right">
                    <a href="#">Login</a>
                    <a href="#"  className="button">Sign Up</a>
                </div>
            </nav>
        </header>
    );
}
