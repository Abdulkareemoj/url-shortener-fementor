/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import logo from '../images/logo.svg';

export default function navbar() {
  return (
      <header className="container containerpall flex-sb  flex-ai">
				<nav className="header">
                <div className="headerlinks">
                <img className="headerlogo"src={logo} alt="logo"/>
						<a href="#">Features</a>
						<a href="#">Pricing</a>
						<a href="#">Resources</a>
                        
                        <div className="nav-right">
                    <a href="#">Login</a>
                    <a href="#" className="button">Sign Up</a>
                    </div>
					</div>
					
    	</nav>
			</header>
          
  );
}

