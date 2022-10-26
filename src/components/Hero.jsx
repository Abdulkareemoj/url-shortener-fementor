/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import image from "../images/illustration-working.svg";

export default function Hero() {
  return (
  

<section  className="py-10 lg:py-20">
<div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 md:place-items-center">
          <article className="text-center md:text-left">
            <h1 className="text-5xl lg:text-6xl mb-5 font-bold text-slate-800">
              More than just shorter links
            </h1>
            <p className="lg:text-xl text-slate-400 mb-10">
              Build your brand’s recognition and get detailed 
              insights on how your links are performing.
            </p>
            <button className="btn-cta rounded-full">Get Started</button>
          </article>


    <article>
    <img src={image} alt="illustration-working" />
    </article> 
</div>
</section>
  );
}

