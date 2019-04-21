/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-expressions */
/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';

import HomePage from 'containers/HomePage/Loadable';
import AboutPage from 'containers/AboutPage/Loadable';
import ProductPage from 'containers/ProductPage/Loadable';
import NewsPage from 'containers/NewsPage/Loadable';
import SupportPage from 'containers/SupportPage/Loadable';
import AccountPage from 'containers/AccountPage/Loadable';
import SignUp from 'containers/Auth/SignUp/Loadable';
import SignIn from 'containers/Auth/SignIn/Loadable';
import PasswordForget from 'containers/Auth/PasswordForget/Loadable';

import Header from 'components/Header';

import reducer from 'redux/reducer';
import { makeSelectAuthUser } from 'redux/selectors';
import { setUser, logout } from 'redux/actions';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  display: flex;
  min-height: 100%;
  padding: 0;
  flex-direction: column;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    this.props.setUser();
  }

  render() {
    const { authUser, onLogout } = this.props;

    const publicRoutes = (
      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/product" component={ProductPage} />
        <Route path="/news" component={NewsPage} />
        <Route path="/support" component={SupportPage} />
        <Route path="/signin" render={props => <SignIn {...props} />} />
        <Route path="/signup" render={props => <SignUp {...props} />} />
        <Route path="/password-forget" component={PasswordForget} />
      </div>
    );

    const privateRoutes = (
      <div>
        <Route path="/account" component={AccountPage} />
      </div>
    );

    return (
      <AppWrapper>
        <Router>
          <div>
            <Header authUser={authUser} onLogout={() => onLogout()} />
            {publicRoutes}
            {authUser ? privateRoutes : <Redirect to="/" />}
          </div>
        </Router>

        <GlobalStyle />
      </AppWrapper>
    );
  }
}

App.propTypes = {
  api: PropTypes.any,
};

export function mapDispatchToProps(dispatch) {
  return {
    setUser: () => {
      dispatch(setUser());
    },
    onLogout: () => {
      dispatch(logout());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  authUser: makeSelectAuthUser(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'global', reducer });

export default compose(
  withReducer,
  withConnect,
)(App);
