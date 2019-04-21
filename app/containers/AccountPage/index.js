/* eslint-disable no-unused-vars */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import { AuthUserContext, withAuthorization } from 'components/Session';
import FooterBottom from 'components/Footer/FooterBottom';
import AccountContainer from './AccountContainer';
import GeneralPage from './pages/GeneralPage/Loadable';
import SubscriptionPage from './pages/SubscriptionPage/Loadable';
import MedicalPage from './pages/MedicalPage/Loadable';

class AccountPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: 'general' };
  }

  handleClick(menuItemId) {
    this.setState({ active: menuItemId });
  }

  render() {
    const menuItems = [
      {
        id: 'general',
        name: 'General',
        to: '/account/general',
      },
      {
        id: 'subscription',
        name: 'Subscription',
        to: '/account/subscription',
      },
      {
        id: 'medical',
        name: 'Medical',
        to: '/account/medical',
      },
    ];

    return (
      <div className="responsive-container">
        <AuthUserContext.Consumer>
          {authUser => (
            <Router>
              <AccountContainer>
                <div className="title">
                  <h2 className="title-text">Account</h2>
                </div>

                <div className="menu">
                  {menuItems.map(menuItem => (
                    <Link
                      className={`menu-item ${
                        this.state.active === menuItem.id ? 'active' : ''
                      }`}
                      key={menuItem.id}
                      onClick={() => this.handleClick(menuItem.id)}
                      to={menuItem.to}
                    >
                      {menuItem.name}
                    </Link>
                  ))}
                </div>

                <Switch>
                  <Redirect exact from="/account" to="/account/general" />
                  <Route path="/account/general" component={GeneralPage} />
                  <Route
                    path="/account/subscription"
                    component={SubscriptionPage}
                  />
                  <Route path="/account/medical" component={MedicalPage} />
                </Switch>

                <FooterBottom />
              </AccountContainer>
            </Router>
          )}
        </AuthUserContext.Consumer>
      </div>
    );
  }
}

const condition = authUser => true;

export default withAuthorization(condition)(AccountPage);
