import React from "react";


export default function Searchbar() {
  return (
  <section className="pr-20 pl-20 px-20 py-20">
        <div className="main">
          <div className="search">
            <input type="text" placeholder="Shorten a link here..." />
          
		<input type="submit" id="shorten-submit" value="Shorten it!" /></div>
          
        </div>
    </section>
  );
}
