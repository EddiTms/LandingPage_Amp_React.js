import React from 'react';
import { withApi } from 'components/Api';

import AuthUserContext from './context';

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null,
      };
    }

    componentDidMount() {
      this.listener = this.props.api.isAuthenticated(authUser => {
        // eslint-disable-next-line no-unused-expressions
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      });
    }

    render() {
      return (
        <AuthUserContext.Provider value={this.state.authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }

  return withApi(WithAuthentication);
};

export default withAuthentication;
