/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


import Facebook from '../images/icon-facebook.svg';
import Instagram from '../images/icon-instagram.svg';
import Pinterest from '../images/icon-pinterest.svg';
import Twitter from '../images/icon-twitter.svg';
import logo from '../images/logo.svg';

export default function Footer() {
  return (
    
  <footer className="footer" >
       <footer className="bg-slate-900 py-10 lg:py-20">
        <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5">
          <article>
            <img src={logo} alt="" />
          </article>

          <article>
            <h3 className="text-white text-lg font-bold tracking-wide">
              Features
            </h3>
            <ul>
              <li>
                <button className="text-slate-200 text-sm mt-1">
                  Link Shortening
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1">
                  Branded Links
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1">
                  Analytics
                </button>
              </li>
            </ul>
          </article>

          <article>
            <h3 className="text-white text-lg font-bold tracking-wide">
              Resources
            </h3>
            <ul>
              <li>
                <button className="text-slate-200 text-sm mt-1">Blog</button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1">
                  Developers
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1">Support</button>
              </li>
            </ul>
          </article>

          <article>
            <h3 className="text-white text-lg font-bold tracking-wide">
              Company
            </h3>
            <ul>
              <li>
                <button className="text-slate-200 text-sm mt-1">About</button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1">
                  Our Team
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1">Careers</button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1">Contact</button>
              </li>
            </ul>
          </article>

          <article>
            <ul className="flex items-center">
              <li>
                <img src={Facebook} alt="" />
              </li>
              <li className="ml-4">
                <img src={Twitter} alt="" />
              </li>
              <li className="mx-5">
                <img src={Pinterest} alt="" />
              </li>
              <li>
                <img src={Instagram} alt="" />
              </li>
            </ul>
          </article>
        </div>
      </footer>
  {/* <div className="container">
    <div><a className="footerlogo" href="#">
      <img src={logo} alt="logo" />
        </a></div>  



<div className="footerlinks1">
<a href="#">Features</a>
<a href="#">Link Shortening</a>
<a href="#">Branded Links</a>
<a href="#">Analytics</a>
</div>

<div className="footerlinks2">
<a href="#">Resources</a>
<a href="#">Blog</a>
<a href="#">Developers</a>
<a href="#">Support</a>
</div>

<div className="footerlinks3">
<a href="#">Company</a>
<a href="#">About</a>
<a href="#">Our Team</a>
<a href="#">Careers</a>
<a href="#">Contact</a>
</div>

<div className="footersocial">
<img src={Facebook} alt="fb"/>
<img src={Twitter} alt="tw"/>
<img src={Pinterest} alt="pt" />
<img src={Instagram} alt="ig"/>
</div>


</div> */}
<div className="footercopyright">  &copy; Easybank. All Rights Reserved 
</div>
<div className="attribution">
  Challenge by
  <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. Coded by <a href="https//:www.github.com/Abdulkareemoj">Abdulkareem Ojerinde</a>.
</div>
</footer>




  );
}
