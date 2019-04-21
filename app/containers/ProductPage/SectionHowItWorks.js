import React from 'react';
// import Image1 from 'images/how1.png';
// import Image2 from 'images/how2.png';
// import Image3 from 'images/how3.png';
import Image1 from 'images/ARMED SCREENSHOT.png';
import Image2 from 'images/CANCEL ALARM SCREENSHOT.png';
import Image3 from 'images/MEDICAL ALERT SENT SCREENSHOT.png';
import Image4 from 'images/AUTO LOCK OVERRIDE SCREENSHOT.png';
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
                  Arm emCall by tapping the emCall icon on your smartphone. Then
                  tap the blue medical alert button or red panic alarm button
                  three times within four seconds. Your alarm is immediately
                  sent to our 5-Diamond professional alarm monitoring center
                  that has first responders sent to you.
                </h4>
              </div>
            </div>

            <div className="description-item">
              <div className="description-image-section">
                <img className="description-image" src={Image2} alt="how 2" />
              </div>

              <div className="description-content">
                <h4 className="description-content-text">
                  If you send a false alarm, you will have fifteen seconds to
                  enter your password and cancel.
                </h4>
              </div>
            </div>

            <div className="description-item">
              <div className="description-image-section">
                <img className="description-image" src={Image3} alt="how 3" />
              </div>

              <div className="description-content">
                <h4 className="description-content-text">
                  If you don’t cancel in time, you can tap the green button to
                  call the alarm monitoring center and give the “Safe Word” you
                  created to the operator to cancel.
                </h4>
              </div>
            </div>

            <div className="description-item">
              <div className="description-image-section">
                <img className="description-image" src={Image4} alt="how 4" />
              </div>

              <div className="description-content">
                <h4 className="description-content-text">
                  Auto-Lock Override allows your phone’s display to stay on when
                  emCall is armed.
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
