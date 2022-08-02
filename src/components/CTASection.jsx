/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import bgdesktop from "../images/bg-boost-desktop.svg";
import bgmobile from "../images/bg-boost-mobile.svg";

export default function CTASection() {
  return (
<section className="boost relative">
        <picture>
          <source media="(min-width: 768px)" srcSet={bgdesktop} />
          <img src={bgmobile} alt="" />
        </picture>

        <div className="flex items-center justify-center flex-col boost-inner">
          <h2 className="mb-5 text-3xl md:text-4xl text-white font-bold text-center">
            Boost your links today
          </h2>
          <button className="btn-cta rounded-full">Get Started</button>
        </div>
      </section>
  );
}

