import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withFirebase } from 'components/Firebase';
import Form from 'components/form/Form';
import FormControlGroup from 'components/form/FormControlGroup';
import Input from 'components/form/Input';
import Submit from 'components/form/Submit';
import MetaTags from 'react-meta-tags';

import AuthContainer from '../AuthContainer';

const PasswordForgetPage = () => (
  <AuthContainer>
    <MetaTags>
      <title>AMP - Password Forgot</title>
    </MetaTags>
    <div className="responsive-container">
      <div className="title">
        <h2 className="title-text">Forgot Password?</h2>
      </div>
    </div>

    <PasswordForgetForm />
  </AuthContainer>
);

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { error } = this.state;

    // const isInvalid = email === '';

    return (
      <div className="responsive-container">
        <Form onSubmit={this.onSubmit}>
          <FormControlGroup>
            <Input
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
            />
          </FormControlGroup>

          <FormControlGroup className="submit-section">
            <Submit type="submit" value="Send" />
          </FormControlGroup>

          <FormControlGroup>
            {error && <p className="error">{error.message}</p>}
          </FormControlGroup>
        </Form>
      </div>
    );
  }
}

PasswordForgetFormBase.propTypes = {
  firebase: PropTypes.any,
};

const PasswordForgetLink = () => (
  <div className="responsive-container">
    <p className="question">
      <Link to="password-forget">Forgot Password?</Link>
    </p>
  </div>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };
