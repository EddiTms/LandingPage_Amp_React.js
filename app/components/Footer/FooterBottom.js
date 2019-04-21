import React from 'react';
import { Link } from 'react-router-dom';
// import SocialLink from 'components/buttons/SocialLink';
import FooterBottomContainer from './FooterBottomContainer';

/* eslint-disable react/prefer-stateless-function */
class FooterBottom extends React.Component {
  render() {
    return (
      <FooterBottomContainer>
        {/* <div className="social-section">
          <SocialLink className="social-link" href="/">
            <i className="fab fa-facebook-f" />
          </SocialLink>
          <SocialLink className="social-link" href="/">
            <i className="fab fa-twitter" />
          </SocialLink>
          <SocialLink className="social-link" href="/">
            <i className="fab fa-instagram" />
          </SocialLink>
          <SocialLink className="social-link" href="/">
            <i className="fab fa-pinterest-p" />
          </SocialLink>
        </div> */}

        <div className="menu-section">
          <Link className="menu-item" to="/">
            Home
          </Link>
          <Link className="menu-item" to="/about">
            About
          </Link>
          <Link className="menu-item" to="/product">
            Product
          </Link>
          <Link className="menu-item" to="/support">
            Support
          </Link>
        </div>

        <div className="privacy-policy">
          <p className="privacy-policy-text">
            &copy; &nbsp;AMP {new Date().getFullYear()}
            <a className="privacy-policy-link" href="/">
              Privacy Policy
            </a>
          </p>
        </div>
      </FooterBottomContainer>
    );
  }
}

export default FooterBottom;
