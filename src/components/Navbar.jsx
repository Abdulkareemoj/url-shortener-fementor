/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, React } from "react";

import logo from '../images/logo.svg';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header max-width py-10">
          <div className="flex items-center justify-between">
            <article className="flex items-center">
              <img src={logo} alt="" />
  
              <nav className="hidden md:block md:ml-5">
                <ul className="flex items-start justify-start">
                  <li>
                    <a className="text-slate-400 hover:text-violet-900">Features</a>
                  </li>
                  <li className="my-5 md:my-0 md:mx-5">
                    <a className="text-slate-400 hover:text-violet-900">Pricing</a>
                  </li>
                  <li>
                    <a className="text-slate-400 hover:text-violet-900">Resources</a>
                  </li>
                </ul>
              </nav>
            </article>
  
            {isOpen && (
              <div className="absolute left-5 right-5 top-20 rounded bg-slate-900 text-slate-200 text-center py-10 md:relative md:top-0 md:left-0 md:right-0 md:bg-transparent md:text-slate-700 md:text-left md:py-0 md:flex md:items-center">
                <nav className="md:hidden">
                  <ul className="flex flex-col items-center justify-center">
                    <li>
                      <button>Features</button>
                    </li>
                    <li className="my-5">
                      <button>Pricing</button>
                    </li>
                    <li>
                      <button>Resources</button>
                    </li>
                  </ul>
                </nav>
                <ul className="flex flex-col items-center justify-center">
                  <li className="my-5">
                    <button className="text-slate-400">Login</button>
                  </li>
                  <li>
                    <button className="btn-cta rounded-full hover:active:bg-violet-700">Sign Up</button>
                  </li>
                </ul>
              </div>
            )}
  
            <div className="hidden md:block">
              <ul className="flex items-center ml-5">
                <li className="my-5 md:my-0 md:mr-5">
                  <button className="text-slate-400">Login</button>
                </li>
                <li>
                  <button className="btn-cta rounded-full">Sign Up</button>
                </li>
              </ul>
            </div>
  
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="uppercase text-sm tracking-wide md:hidden"
            >
              {isOpen ? "Close" : "Menu"}
            </button>
          </div>
        </header>

    );
  }