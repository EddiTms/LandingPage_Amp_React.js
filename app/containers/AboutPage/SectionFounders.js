import React from 'react';
import Founder1 from 'images/founder1.jpg';
import Founder2 from 'images/founder2.jpg';
import SectionFoundersContainer from './SectionFoundersContainer';

/* eslint-disable react/prefer-stateless-function */
class SectionFounders extends React.Component {
  render() {
    return (
      <SectionFoundersContainer>
        <div className="responsive-container">
          <div className="title">
            <h2 className="title-text">Meet the founders</h2>
          </div>
        </div>

        <div className="founders">
          <div className="responsive-container">
            <div className="founder right">
              <div className="intro">
                <div className="photo">
                  <img className="photo-img" src={Founder1} alt="founder 1" />
                </div>
                <div className="name-position">
                  <div className="name">
                    <h1 className="name-text">Fred Newman</h1>
                  </div>
                  <div className="position">
                    <h3 className="position-text">Co-Founder and CEO</h3>
                  </div>
                </div>
                <div className="content">
                  <p className="content-text">
                    <b>
                      30+ years in the high-level, high-tech electronic security
                      and emergency response systems industry, including law
                      enforcement experience in counter-terrorism.
                    </b>
                  </p>
                  <p className="content-text">
                    Creating emCall was not a whim or just a personal reaction
                    to an episode for the AMP team. Founder/CEO Fred Newman is a
                    pioneer in the early breakthrough of innovative design,
                    engineering, manufacture and deployment of international
                    award winning advanced high-tech emergency response systems.
                    emCall is the result of decades of experience and expertise
                    protecting millions of lives and billions of dollars of
                    vulnerable assets, including military bases, prisons, and
                    other critical infrastructure around the world. Fred also
                    holds U.S. and foreign patents in security and safety
                    technologies.
                  </p>
                </div>
              </div>
            </div>

            <div className="founder left">
              <div className="intro">
                <div className="photo">
                  <img className="photo-img" src={Founder2} alt="founder 2" />
                </div>
                <div className="name-position">
                  <div className="name">
                    <h1 className="name-text">Marsha Newman</h1>
                  </div>
                  <div className="position">
                    <h3 className="position-text">Co-Founder and President</h3>
                  </div>
                </div>
                <div className="content">
                  <p className="content-text">
                    <b>
                      25+ years in the high-tech electronic security and
                      emergency response systems industry.
                    </b>
                  </p>
                  <p className="content-text">
                    Marsha’s contribution to the architectural design and
                    development of award winning high-level integrated security
                    and emergency response systems includes decades of
                    protecting high vulnerability military and nuclear
                    facilities, prisons, airports, and private industry
                    facilities in transportation, automotive and critical
                    communications infrastructure. Marsha’s global experience
                    and expertise was a key contributing factor to the
                    conceptualization and development of emCall, taking
                    multi-million dollar emergency response technologies and
                    forging the most advanced iOS and Android mobile emergency
                    response system found, giving the power to live fearlessly
                    for everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionFoundersContainer>
    );
  }
}

export default SectionFounders;
