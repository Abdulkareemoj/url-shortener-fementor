/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


import Facebook from '../images/icon-facebook.svg';
import Instagram from '../images/icon-instagram.svg';
import Pinterest from '../images/icon-pinterest.svg';
import Twitter from '../images/icon-twitter.svg';
import logo from '../images/logo.svg';

export default function Footer() {
  return (
    
  <footer className="footer">
  <div className="container">
      <a className="footerlogo" href="#">
      <img src={logo} alt="logo" />
        </a>

        <div className="footersocial">
{Facebook}
{Twitter}
{Pinterest}
{Instagram}
</div>


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





<div className="footercopyright">  &copy; Easybank. All Rights Reserved 
</div>
</div>
<div className="attribution">
  Challenge by
  <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. Coded by <a href="https//:www.github.com/Abdulkareemoj">Abdulkareem Ojerinde</a>.
</div>
</footer>




  );
}
