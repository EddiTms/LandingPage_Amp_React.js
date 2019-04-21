import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import Description1 from 'images/description1.svg';
// import Description2 from 'images/description2.svg';
// import Description3 from 'images/description3.svg';
// import Description4 from 'images/description4.svg';
import Image1 from 'images/bg2.jpg';
import Image2 from 'images/bg3.jpg';
import Image3 from 'images/bg4.jpg';
import SectionBanner2Container from './SectionBanner2Container';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

/* eslint-disable react/prefer-stateless-function */
class SectionBanner2 extends React.Component {
  render() {
    return (
      <SectionBanner2Container>
        <div className="responsive-container">
          <div className="left">
            <div className="scene">
              <div className="title">
                <h1 className="title-text">There’s an EmCall for everyone</h1>
              </div>
              <div className="content">
                <h3 className="content-text">
                  emCall empowers you to take charge in a medical or
                  personal security emergency. We’ve got your back. Busy
                  people have busy lives. No matter what you do, emCall
                  wants you to have peace of mind - knowing that if an
                  emergency happens we have the most advanced technology to
                  support you.
                </h3>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="image1-section">
              <img className="image1-img" src={Image1} alt="center" />
            </div>
            <div className="image2-section">
              <img className="image2-img" src={Image2} alt="left" />
            </div>
            <div className="image3-section">
              <img className="image3-img" src={Image3} alt="right" />
            </div>
          </div>
        </div>
      </SectionBanner2Container>
    );
  }
}

export default SectionBanner2;
