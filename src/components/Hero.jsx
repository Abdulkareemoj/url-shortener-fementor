/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import image from "../images/illustration-working.svg";

export default function Hero() {
  return (
  

<section className="pr-20 pl-20 px-20 py-20">
<div className="">

  <div className="flex">

    <div>
  <h1 className ="text-xl">More than just shorter links</h1> 
    <p  className ="herotext">
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

