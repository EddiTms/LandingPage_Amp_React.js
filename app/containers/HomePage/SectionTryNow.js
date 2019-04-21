import React from 'react';
// import ButtonFill from 'components/buttons/ButtonFill';
import TitleLogo from 'images/footer-logo.svg';
// import Image1 from 'images/image1-u.png';
// import Image2 from 'images/image2-u.png';
// import Image3 from 'images/image3-u.png';
// sergey dev add
import Image from 'images/home-phone.png';

import SectionTryNowContainer from './SectionTryNowContainer';

/* eslint-disable react/prefer-stateless-function */
class SectionTryNow extends React.Component {
  render() {
    return (
      <SectionTryNowContainer>
        <div className="responsive-container">
          <div className="left-section">
            <div className="title-section">
              <div className="title-text-section">
                <h3 className="title-text">
                  Live fearlessly&nbsp;
                  <img className="logo-img" src={TitleLogo} alt="logo" />
                </h3>
                <h1 className="title-text-blue">
                  Coming soon!
                </h1>
              </div>
            </div>
            <div className="button-section">
              {/* <ButtonFill className="try-now" to="/signup">
                Try Now
              </ButtonFill> */}
            </div>
          </div>
          <div className="right-section">
            {/* <div className="image1-section">
              <img className="image1-img" src={Image1} alt="center" />
            </div>
            <div className="image2-section">
              <img className="image2-img" src={Image2} alt="left" />
            </div>
            <div className="image3-section">
              <img className="image3-img" src={Image3} alt="right" />
            </div> */}
            <div className="image-section">
              <img className="image-section-img" src={Image} alt="center" />
            </div>
          </div>
        </div>
      </SectionTryNowContainer>
    );
  }
}

export default SectionTryNow;
