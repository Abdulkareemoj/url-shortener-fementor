import React from "react";


export default function Searchbar() {
  return (
  <section className="container containerpall">
        <div className="main">
          <div className="search">
            <input type="text" placeholder="Shorten a link here..." />
          
		<input type="submit" id="shorten-submit" value="Shorten it!" /></div>
          
        </div>
    </section>
  );
}
