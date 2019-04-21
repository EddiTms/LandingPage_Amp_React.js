import React from 'react';
import SectionMissionContainer from './SectionMissionContainer';

/* eslint-disable react/prefer-stateless-function */
class SectionMission extends React.Component {
  render() {
    return (
      <SectionMissionContainer>
        <div className="responsive-container">
          <div className="title">
            <h2 className="title-text">Our Mission</h2>
          </div>
          <div className="content">
            <p className="content-text">
              We want you to live fearlessly. emCall wants every personal
              emergency to have a successful resolution. We decided it was time
              to put the power of emergency response in the hands of the people.
              We took the sophistication of the multi-million dollar emergency
              response systems we created for maximum security prisons and
              military bases and brought it to the general public. Not developed
              from a whim, our team is the only one to bring decades of
              experience and expertise in emergency response technology to the
              iOS and Android smartphones. Security shouldn’t just be for
              multi-million dollar companies, it should be for everyone. We have
              accomplished this with emCall, which is why “Live fearlessly” is
              our motto.
            </p>
          </div>
        </div>
      </SectionMissionContainer>
    );
  }
}

export default SectionMission;
