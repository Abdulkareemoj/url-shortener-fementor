import React from "react";

import logo from '../images/logo.svg';

export default function navbar() {
  return (
    <div className="container">
      <div className="content">
      <header>
				<nav className="">
                <div className="">
						<img src={logo} alt="logo"/>
					</div>
					<div className="">
						<a href="#">Features</a>
						<a href="#">Pricing</a>
						<a href="#">Resources</a>
					
					</div>
					<div className="">
                    <a href="#">Login</a>
                    <a href="#">Sign Up</a>
                    </div>

				</nav>
			</header>
    </div>
    </div>
  );
}

