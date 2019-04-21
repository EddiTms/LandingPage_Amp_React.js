import React from 'react';
import Image1 from 'images/how1.png';
import Image2 from 'images/how2.png';
import Image3 from 'images/how3.png';
import SectionHowItWorksContainer from './SectionHowItWorksContainer';

/* eslint-disable react/prefer-stateless-function */
class SectionHowItWorks extends React.Component {
  render() {
    return (
      <SectionHowItWorksContainer>
        <div className="responsive-container">
          <div className="title">
            <h1 className="title-text">How it works</h1>
          </div>

          <div className="description-list">
            <div className="description-item">
              <div className="description-image-section">
                <img className="description-image" src={Image1} alt="how 1" />
              </div>
              <div className="description-content">
                <h4 className="description-content-text">
                  <b>Live Fearlessly</b> tempor quam, et lacinia sapien. Mauris
                  acc.
                </h4>
              </div>
            </div>

            <div className="description-item">
              <div className="description-image-section">
                <img className="description-image" src={Image2} alt="how 2" />
              </div>
              <div className="description-content">
                <h4 className="description-content-text">
                  <b>Protect</b> urabitur lobortis id lorem id bibendum. Ut id
                  consectetur.
                </h4>
              </div>
            </div>

            <div className="description-item">
              <div className="description-image-section">
                <img className="description-image" src={Image3} alt="how 3" />
              </div>
              <div className="description-content">
                <h4 className="description-content-text">
                  <b>Mobile</b> estibulum rutrum quam vitae fringilla tincidunt.
                  Suspendi.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </SectionHowItWorksContainer>
    );
  }
}

export default SectionHowItWorks;
