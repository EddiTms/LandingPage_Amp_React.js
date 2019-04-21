import React from 'react';
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

import { login } from 'redux/actions';
import reducer from 'redux/reducer';
import {
  makeSelectAuthUser,
  makeSelectLoading,
  makeSelectError,
} from 'redux/selectors';
import saga from 'redux/saga';

import AuthContainer from '../AuthContainer';
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';

const SignInPage = props => (
  <AuthContainer>
    <MetaTags>
      <title>AMP - Log In</title>
    </MetaTags>
    <div className="responsive-container">
      <div className="title">
        <h2 className="title-text">Log In</h2>
      </div>
    </div>

    <SignInForm {...props} />
    {/* <Test /> */}
    <PasswordForgetLink />
    <SignUpLink />
  </AuthContainer>
);

export default SignInPage;

class SignInFormBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentWillUpdate(prevProps) {
    if (prevProps.authUser) {
      this.props.history.push('/account/general');
    }
  }

  login = () => {
    const { email, password } = this.state;
    this.props.onSubmitForm(email, password);
  };

  onChangeEmail = e => {
    this.setState({
      email: e.target.value,
    });
  };

  onChangePassword = e => {
    this.setState({
      password: e.target.value,
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
              id="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </FormControlGroup>

          <FormControlGroup className="submit-section">
            <Submit type="button" value="Sign In" onClick={this.login} />
          </FormControlGroup>

          <FormControlGroup>
            {this.props.error && <p className="error">{this.props.error}</p>}
          </FormControlGroup>
        </Form>
      </div>
    );
  }
}

SignInFormBase.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  authUser: PropTypes.any,
  onSubmitForm: PropTypes.func,
  history: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  authUser: makeSelectAuthUser(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: (email, password) => {
      dispatch(login(email, password));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'global', reducer });
const withSaga = injectSaga({ key: 'global', saga });

const SignInForm = compose(
  withReducer,
  withSaga,
  withConnect,
)(SignInFormBase);

export { SignInForm };
