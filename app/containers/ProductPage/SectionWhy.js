import React from 'react';
import Image1 from 'images/bg5.jpg';
import Image2 from 'images/bg6.jpg';
import Soc from 'images/soc-icon.png';
import Hitech from 'images/hitech-aud-icon.png';
import Hipaa from 'images/hipaa-aud-icon.png';
import SectionWhyContainer from './SectionWhyContainer';

/* eslint-disable react/prefer-stateless-function */
class SectionWhy extends React.Component {
  render() {
    return (
      <SectionWhyContainer>
        <div className="responsive-container">
          <div className="article left-text">
            <div className="text-section">
              <div className="title">
                <h3 className="title-text">Get the most out of emCall</h3>
              </div>
              <div className="content">
                <p className="content-text">
                  emCall is designed to adapt to your lifestyle. We’re your
                  trustworthy tech companion that you take wherever life takes
                  you. When an emergency situation strikes, every second counts.
                  That’s when emCall is at your fingertips to get help from the
                  nearest first responders - putting you in a much better place
                  for a successful resolution.
                </p>
              </div>
            </div>

            <div className="image-section">
              <img className="article-image" src={Image1} alt="article 1" />
            </div>
          </div>

          <div className="article right-text">
            <div className="image-section next-part">
              <img className="article-image" src={Image2} alt="article 2" />
            </div>
            <div className="text-section">
              <div className="title">
                <h3 className="title-text">
                  Because nothing should stop you from living your best life
                </h3>
              </div>
              <div className="image-section-text">
                <img className="article-image" src={Image2} alt="article 2" />
              </div>
              <div className="content">
                <p className="content-text">
                  Chronic illness and emergencies can strike at any moment.
                  emCall places you in a position of power and advantage over
                  whatever emergency may occur, allowing you to go out into the
                  world with peace of mind. Even with chronic or severe illness,
                  emCall has got your back with the most advanced emergency
                  response technology just three taps away.
                </p>
                <p className="content-text">
                  Your medical information is securely stored on a HIPAA
                  compliant, SOC 2 TYPE II and SOC 3 TYPE II certified, HIPAA
                  and HITECH audited server designed to secure and protect
                  critical healthcare data.
                </p>
                <div className="description-list">
                  <div className="description-item">
                    <div className="description-image-section">
                      <img
                        className="description-image"
                        src={Soc}
                        alt="how 1"
                      />
                    </div>
                  </div>

                  <div className="description-item">
                    <div className="description-image-section">
                      <img
                        className="description-image"
                        src={Hitech}
                        alt="how 2"
                      />
                    </div>
                  </div>

                  <div className="description-item">
                    <div className="description-image-section">
                      <img
                        className="description-image"
                        src={Hipaa}
                        alt="how 3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWhyContainer>
    );
  }
}

export default SectionWhy;
