import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import SignUp from 'components/buttons/SignUp';
import Logo from 'images/logo.svg';
import NavBar from './NavBar';
import Avatar from './avatar.png';

const Logout = styled.button`
  padding: 8px 20px;
  text-align: left;
  text-decoration: none;
  color: #30263a;
  cursor: pointer;
  font-family: 'Nanum Gothic';
  font-size: 15px;
  outline: none;

  &:hover {
    background: #f5f7fa;
  }
`;

class Header extends React.Component {
  logout = () => {
    this.props.onLogout();
  };

  renderPopUp = () => {
    const { authUser } = this.props;

    if (authUser) {
      return (
        <div className="user-menu-list">
          <Link className="user-menu-list-item" to="/account">
            My Profile
          </Link>
          <Logout type="button" onClick={this.logout}>
            Log Out
          </Logout>
        </div>
      );
    }
    return (
      <div className="user-menu-list">
        <Link className="user-menu-list-item" to="/signin">
          Log In
        </Link>
      </div>
    );
  };

  renderMobilePopUp = () => {
    const { authUser } = this.props;
    const isAuth = true;

    if (isAuth) {
      return (
        <div className="user-menu-list">
          <Link className="user-menu-list-item" to="/">
            Home
          </Link>
          <Link className="user-menu-list-item" to="/about">
            About
          </Link>
          <Link className="user-menu-list-item" to="/product">
            Product
          </Link>
          <Link className="user-menu-list-item" to="/support">
            Support
          </Link>
          {/* <Link className="user-menu-list-item" to="/account">
            My Profile
          </Link>
          <Logout type="button" onClick={this.logout}>
            Log Out
          </Logout> */}
        </div>
      );
    }
    return (
      <div className="user-menu-list">
        <Link className="user-menu-list-item" to="/about">
          About
        </Link>
        <Link className="user-menu-list-item" to="/product">
          Product
        </Link>
        <Link className="user-menu-list-item" to="/support">
          Support
        </Link>
        {/* <Link className="user-menu-list-item" to="/signin">
          Log In
        </Link> */}
      </div>
    );
  };

  render() {
    const menuItems = [
      {
        name: 'Home',
        to: '/',
      },
      {
        name: 'About',
        to: '/about',
      },
      {
        name: 'Product',
        to: '/product',
      },
      {
        name: 'Support',
        to: '/support',
      },
    ];

    const currentRoute = this.context.router.route.location.pathname;

    return (
      <NavBar>
        <div className="responsive-container">
          <div className="logo">
            <a className="logo-link" href="/">
              <img className="logo-image" src={Logo} alt="header logo" />
            </a>
          </div>

          <div className="menu">
            {menuItems.map(menuItem => (
              <Link
                className={`menu-item ${
                  currentRoute === menuItem.to ? 'active' : ''
                }`}
                key={menuItem.name}
                to={menuItem.to}
              >
                {menuItem.name}
              </Link>
            ))}
          </div>

          <div className="header-right">
            {/* <div className="try-now">
              <SignUp to="/signup">Try Now</SignUp>
            </div> */}

            <div className="user-menu">
              {/* <div className="user-avatar">
                <img src={Avatar} alt="user avatar" />
              </div> */}

              {this.renderPopUp()}
            </div>

            <div className="mobile-menu-toggle">
              <div className="user-avatar">
                <span>
                  <i className="fas fa-bars" />
                </span>
              </div>

              {this.renderMobilePopUp()}
            </div>
          </div>
        </div>
      </NavBar>
    );
  }
}

Header.propTypes = {
  authUser: PropTypes.any,
  onLogout: PropTypes.func,
};

Header.contextTypes = {
  router: PropTypes.object,
};

export default Header;
