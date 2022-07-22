/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import image from "../images/illustration-working.svg";

export default function navbar() {
  return (
  

<section className="hero">
<div className="container">

  <div className="containerpall flex">

    <div>
  <h1 className ="herotext">More than just shorter links</h1> 
    <p>
    Build your brand’s recognition and get detailed insights 
on how your links are performing.
    </p>
    <a href="#" className="button">Get Started</a>
   </div>

    <div>
    <img src={image} alt="illustration-working" />
    </div> 

  </div>
 
</div>
</section>
  );
}

