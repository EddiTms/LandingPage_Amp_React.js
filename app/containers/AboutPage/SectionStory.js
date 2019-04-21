import React from 'react';
import SectionStoryContainer from './SectionStoryContainer';

/* eslint-disable react/prefer-stateless-function */
class SectionStory extends React.Component {
  render() {
    return (
      <SectionStoryContainer>
        <div className="responsive-container">
          <div className="title">
            <h2 className="title-text">Our Story</h2>
          </div>
          <div className="content">
            <p className="content-text">
              Our story is simple. Over the span of twenty years, we created the
              blueprint for emergency response technology that has been utilized
              for maximum security prisons, military bases, airports and nuclear
              facilities globally. Our work has helped some of the most
              sensitive and vulnerable places - areas where there is no room for
              failure. When a crisis occurs, we only have seconds to react. The
              world has rapidly changed, but some of its technology has not kept
              pace. Traditionally, we know to dial 911 if we’re having an
              emergency. Our experience in security dictates that most 911 calls
              often end in a lack of crucial information and communication. This
              can often result in an overall failure for a successful resolution
              to your crisis. In most emergencies callers may not know where
              they are, due to the intensity of the crisis. And in some cases,
              the caller cannot speak or is at a loss for words. That’s why we
              designed emCall. With just 3 taps your crisis immediately goes to
              an alarm specialist. Our alarm professionals know your exact
              location and personal/medical information. They pass that on to
              your closest first responders, saving you critical moments in your
              emergency and increasing your chances of a successful resolution.
            </p>
          </div>
        </div>
      </SectionStoryContainer>
    );
  }
}

export default SectionStory;
