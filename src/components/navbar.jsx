import React from "react";

import logo from '../images/logo.svg';

export default function navbar() {
  return (
    <div className="container">
      <div className="content">
        {logo}
   
      </div>
      <header>
				<nav className="">
					<div>
						<a href="#">WOMEN</a>
						<a href="#">MEN</a>
						<a href="#">KIDS</a>
						<a className="o" href="#"></a>
					</div>
					<div className="box">
						<img src={logo} alt="" srcset="" />
					</div>

				</nav>
			</header>
    </div>
  );
}