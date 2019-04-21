import React from 'react';
// import ButtonFill from 'components/buttons/ButtonFill';
import Image from 'images/product-1.png';
import SectionBanner1Container from './SectionBanner1Container';

/* eslint-disable react/prefer-stateless-function */
class SectionBanner1 extends React.Component {
  render() {
    return (
      <SectionBanner1Container>
        <div className="responsive-container">
          <div className="left">
            <div className="image-section">
              <img className="image-section-img" src={Image} alt="center" />
            </div>
          </div>

          <div className="right">
            <div className="title">
              <h1 className="title-text">Mobile, Monitored, Precise</h1>
            </div>
            <div className="content">
              <p className="content-text">
                With just three taps, emCall allows you to receive precise help
                in your emergency. Live fearlessly knowing you’re only 3 taps
                away from receiving the help you need.
              </p>
              <p className="content-text">
                Available for both iPhone and Android phones. Coming soon:
                emCall for the Apple Watch.
              </p>
            </div>
            {/* <div className="signup-link">
              <ButtonFill to="/signup">Sign Up</ButtonFill>
            </div> */}
          </div>
        </div>
      </SectionBanner1Container>
    );
  }
}

export default SectionBanner1;
