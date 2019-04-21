import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import LoadingIndicator from 'components/LoadingIndicator';
import Form from 'components/form/Form';
import FormControlGroup from 'components/form/FormControlGroup';
import Label from 'components/form/Label';
import Input from 'components/form/Input';
import Submit from 'components/form/Submit';
import MetaTags from 'react-meta-tags';

import { signup } from 'redux/actions';
import reducer from 'redux/reducer';
import {
  makeSelectAuthUser,
  makeSelectLoading,
  makeSelectError,
} from 'redux/selectors';
import saga from 'redux/saga';

import AuthContainer from '../AuthContainer';

const SignUpPage = props => (
  <AuthContainer>
    <MetaTags>
      <title>AMP - Sign Up</title>
    </MetaTags>
    <div className="title">
      <h2 className="title-text">Sign Up</h2>
    </div>
    <SignUpForm {...props} />
  </AuthContainer>
);

export default SignUpPage;

class SignUpFormBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      passwordOne: '',
      passwordTwo: '',
    };
  }

  componentWillUpdate(prevProps) {
    if (prevProps.authUser) {
      this.props.history.push('/account/general');
    }
  }

  signup = () => {
    const { email, passwordOne, passwordTwo } = this.state;
    this.props.onSubmitForm(email, passwordOne, passwordTwo);
  };

  onChangeEmail = e => {
    this.setState({
      email: e.target.value,
    });
  };

  onChangePasswordOne = e => {
    this.setState({
      passwordOne: e.target.value,
    });
  };

  onChangePasswordTwo = e => {
    this.setState({
      passwordTwo: e.target.value,
    });
  };

  render() {
    return (
      <div className="responsive-container">
        <Form onSubmit={this.onSubmit}>
          {this.props.loading && (
            <div className="try-login">
              <LoadingIndicator />
            </div>
          )}
          <FormControlGroup>
            <Label>Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Email Address"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </FormControlGroup>

          <FormControlGroup>
            <Label>Password</Label>
            <Input
              id="passwordOne"
              type="password"
              placeholder="Password"
              value={this.state.passwordOne}
              onChange={this.onChangePasswordOne}
            />
          </FormControlGroup>

          <FormControlGroup>
            <Label>Password Confirmation</Label>
            <Input
              name="passwordTwo"
              type="password"
              placeholder="Confirm Password"
              value={this.state.passwordTwo}
              onChange={this.onChangePasswordTwo}
            />
          </FormControlGroup>

          <FormControlGroup className="submit-section">
            <Submit type="button" value="Sign Up" onClick={this.signup} />
          </FormControlGroup>

          <FormControlGroup>
            {this.props.error && <p className="error">{this.props.error}</p>}
          </FormControlGroup>
        </Form>
      </div>
    );
  }
}

SignUpFormBase.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  onSubmitForm: PropTypes.func,
  history: PropTypes.any,
};

const SignUpLink = () => (
  <div className="responsive-container">
    <p className="question">
      Do not have an account? <Link to="/signup">Sign Up</Link>
    </p>
  </div>
);

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  authUser: makeSelectAuthUser(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: (email, passwordOne, passwordTwo) => {
      dispatch(signup(email, passwordOne, passwordTwo));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'global', reducer });
const withSaga = injectSaga({ key: 'global', saga });

const SignUpForm = compose(
  withReducer,
  withSaga,
  withConnect,
)(SignUpFormBase);

export { SignUpForm, SignUpLink };
