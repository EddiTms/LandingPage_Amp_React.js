import React from 'react';
import SignUp from 'components/buttons/SignUp';
import RightImage from 'images/bg1.jpg';
import SectionSavingYourLifeContainer from './SectionSavingYourLifeContainer';

/* eslint-disable react/prefer-stateless-function */
class SectionSavingYourLife extends React.Component {
  render() {
    return (
      <SectionSavingYourLifeContainer>
        <div className="responsive-container">
          <div className="left-section">
            <div className="section-title">
              <h4 className="section-title-text">Saving Your Life</h4>
            </div>
            <div className="content-title">
              <h1 className="content-title-text">
                Protect your most important asset - you
              </h1>
            </div>
            <div className="content">
              <div className="content-text">
                Now’s the time to take control of a worst case scenario. There
                are too many ways for a 911 call to go wrong. emCall has solved
                that by putting you in control of your emergency. You can now
                directly receive help for your emergency wherever you are with
                emCall.
              </div>
            </div>
            <div className="button-section">
              <SignUp className="learn-more" to="/product">
                Learn More
              </SignUp>
            </div>
          </div>

          <div className="right-section">
            <img
              className="right-section-bg"
              src={RightImage}
              alt="saving your life"
            />
          </div>
        </div>
      </SectionSavingYourLifeContainer>
    );
  }
}

export default SectionSavingYourLife;
