import React from 'react';
import ButtonBlue from 'components/buttons/ButtonBlue';
import ContactSuccessImage from 'images/contact-success.png';
import SectionContactUsContainer from './SectionContactUsContainer';

/* eslint-disable react/prefer-stateless-function */
class SectionContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      mailSuccess: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = e => {
    const { target } = e;
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, email, message } = this.state;

    const template = 'template_ohgWKQvh';
    const userID = 'user_UlklPgNFcFaRazReQX9AA';

    const templateParams = {
      from: email,
      reply_to: email,
      from_name: name,
      message,
    };

    this.sendFeedback(template, templateParams, userID);
  };

  sendFeedback(templateId, templateParams, userID) {
    window.emailjs
      .send('mailgun', templateId, templateParams, userID)
      .then(res => {
        if (res.status === 200 && res.text === 'OK') {
          this.setState({ mailSuccess: true });
        }
      })
      .catch(err => console.error('Failed to send feedback. Error: ', err));
  }

  renderContact = () => (
    <form className="contact-us-form" onSubmit={this.handleSubmit}>
      <div className="contact-us-form-control-group">
        <input
          className="contact-us-form-control"
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleInputChange}
          placeholder="Name"
          required
        />
      </div>

      <div className="contact-us-form-control-group">
        <input
          className="contact-us-form-control"
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleInputChange}
          placeholder="Email"
          required
        />
      </div>

      <div className="contact-us-form-control-group">
        <textarea
          className="contact-us-form-control contact-us-form-textarea"
          name="message"
          value={this.state.message}
          onChange={this.handleInputChange}
          placeholder="Message"
          required
        />
      </div>

      <div className="contact-us-form-control-group">
        <ButtonBlue type="submit" value="Send" />
      </div>
    </form>
  );

  renderSuccess = () => (
    <div>
      <p className="contact-success-subtitle">Drop us a line</p>
      <img
        className="contact-success-image"
        src={ContactSuccessImage}
        alt="footer logo"
      />
      <p className="contact-success-context">
        Thank you for your inquiry! We will get back to you within 48 hours.
      </p>
    </div>
  );

  render() {
    const { mailSuccess } = this.state;
    return (
      <SectionContactUsContainer>
        <div className="responsive-container">
          <div className="title">
            <h1 className="title-text">Contact us</h1>
          </div>
          <div className="contact-us">
            {mailSuccess ? this.renderSuccess() : this.renderContact()}
          </div>
        </div>
      </SectionContactUsContainer>
    );
  }
}

export default SectionContactUs;
