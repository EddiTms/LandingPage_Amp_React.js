import React from 'react';
import Quote from 'images/quote.png';
import SectionTestimonialsContainer from './SectionTestimonialsContainer';

/* eslint-disable react/prefer-stateless-function */
class SectionTestimonials extends React.Component {
  render() {
    return (
      <SectionTestimonialsContainer>
        <div className="responsive-container">
          <div className="title-section">
            <h3 className="title-text">Testimonials</h3>
          </div>

          <div className="content-section">
            <div className="content">
              <div className="quote">
                <img className="quote-img" src={Quote} alt="quote" />
              </div>
              <p className="content-text">
                Curabitur luctus lectus vehicula aliquam vestibulum. Fusce
                venenatis nunc vel dui lacinia, eu egestas.
              </p>
            </div>
          </div>

          <div className="user-info-section">
            <div className="user-name">
              <h3 className="user-name-text">Terry Mitchell</h3>
            </div>
            <div className="user-position">
              <h3 className="user-position-text">Apple CEO</h3>
            </div>
          </div>
        </div>
      </SectionTestimonialsContainer>
    );
  }
}

export default SectionTestimonials;
