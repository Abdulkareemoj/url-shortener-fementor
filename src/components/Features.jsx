import React from 'react';

import brandrec from '../images/icon-brand-recognition.svg';
import detailedrec from '../images/icon-detailed-records.svg';
import fullycus from '../images/icon-fully-customizable.svg';

export default function Features() {
  return (
    <section className="feature">
      <div className="pr-20 pl-20 px-20 py-20">
        <div className="featureintro">
          <h2>Advanced Statistics</h2>
          <div>
            <img src={brandrec} alt="brandrec" />
            <h2>Brand Recognition</h2>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div>
            <img src={detailedrec} alt="detailedrec"/>
            <h2>Detailed Records</h2>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div>
            <img src={fullycus} alt="fullycus"/>
            <h2>Fully Customizable</h2>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
