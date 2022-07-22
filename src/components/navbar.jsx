import React from "react";

import logo from '../images/logo.svg';

export default function navbar() {
  return (
      <header className="container containerpall flex-sb flex-c flex-ai">
				<nav className="header">
                <div className="headerlinks">
                <img className="headerlogo"src={logo} alt="logo"/>
					
						<a href="#">Features</a>
						<a href="#">Pricing</a>
						<a href="#">Resources</a>
                       
                    <a href="#">Login</a>
                    <a href="#" className="button">Sign Up</a>
                    </div>
					
					
    	</nav>
			</header>
          
  );
}

