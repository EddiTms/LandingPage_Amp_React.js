import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import ButtonFill from 'components/buttons/ButtonFill';
import Image1 from 'images/image4.png';
import Image2 from 'images/image5.png';
import Image3 from 'images/image6.png';
import SectionBanner1Container from './SectionBanner1Container';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

/* eslint-disable react/prefer-stateless-function */
class SectionBanner1 extends React.Component {
  render() {
    return (
      <SectionBanner1Container>
        <div className="responsive-container">
          <div className="left">
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

          <div className="right">
            <Carousel
              className="right-carousel"
              showThumbs={false}
              showArrows={false}
              showStatus={false}
              autoPlay
              infiniteLoop
            >
              <div className="scene">
                <div className="title">
                  <h1 className="title-text">Mobile, Monitored, Precise</h1>
                </div>
                <div className="content">
                  <h3 className="content-text">
                    OnCall Defender Panic Alarm, Medical Alert or Combo are the
                    best way for you to get emergency help wherever and whenever
                    you need it.
                  </h3>
                </div>
              </div>

              <div className="scene">
                <div className="title">
                  <h1 className="title-text">Mobile, Monitored, Precise</h1>
                </div>
                <div className="content">
                  <h3 className="content-text">
                    OnCall Defender Panic Alarm, Medical Alert or Combo are the
                    best way for you to get emergency help wherever and whenever
                    you need it.
                  </h3>
                </div>
              </div>

              <div className="scene">
                <div className="title">
                  <h1 className="title-text">Mobile, Monitored, Precise</h1>
                </div>
                <div className="content">
                  <h3 className="content-text">
                    OnCall Defender Panic Alarm, Medical Alert or Combo are the
                    best way for you to get emergency help wherever and whenever
                    you need it.
                  </h3>
                </div>
              </div>
            </Carousel>

            <div className="carousel-try-now">
              <ButtonFill to="/">Try Now</ButtonFill>
            </div>
          </div>
        </div>
      </SectionBanner1Container>
    );
  }
}

export default SectionBanner1;
