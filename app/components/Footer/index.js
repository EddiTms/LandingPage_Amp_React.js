import React from 'react';
// import ButtonFill from 'components/buttons/ButtonFill';
import FooterLogo from 'images/footer-logo.svg';
import FooterContainer from './FooterContainer';
import FooterBottom from './FooterBottom';

/* eslint-disable react/prefer-stateless-function */
class Footer extends React.Component {
  render() {
    return (
      <FooterContainer>
        <div className="responsive-container">
          <div className="get-app-section">
            <div className="footer-logo">
              <img
                className="footer-logo-image"
                src={FooterLogo}
                alt="footer logo"
              />
            </div>
            {/* <div className="get-app">
              <ButtonFill to="/signup">Sign Up</ButtonFill>
            </div> */}
          </div>
        </div>

        <div className="responsive-container footer-bottom">
          <FooterBottom />
        </div>
      </FooterContainer>
    );
  }
}

export default Footer;
