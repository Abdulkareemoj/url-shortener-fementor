import React from "react";

import bg from "../images/bg-shorten-desktop.svg";

export default function navbar() {
  return (
  <section className="container containerpall">
        <div className="main">
            <img src={bg} alt=""/>
          <div className="search">
            <input type="text" placeholder="Shorten a link here..." />
          
		<input type="submit" id="shorten-submit" value="Shorten it!" /></div>
          
        </div>
    </section>
  );
}
