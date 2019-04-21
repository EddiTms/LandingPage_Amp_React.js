import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withApi } from 'components/Api';

import AuthUserContext from './context';

const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      this.listener = this.props.api.isAuthenticated(authUser => {
        if (!condition(authUser)) {
          this.props.history.push('/signin');
        }
      });
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser =>
            condition(authUser) ? <Component {...this.props} /> : null
          }
        </AuthUserContext.Consumer>
      );
    }
  }

  return compose(
    withRouter,
    withApi,
  )(WithAuthorization);
};

export default withAuthorization;
