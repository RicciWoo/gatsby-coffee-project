import React, { Component } from 'react';
import { Link } from 'gatsby';
import { FaCartArrowDown } from 'react-icons/fa';

import links from '../../../constants/links';
import logo from '../../../images/logo.svg';

class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: 'collapse navbar-collapse',
  };

  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({ navbarOpen: false, css: 'collapse navbar-collapse' })
      : this.setState({
          navbarOpen: true,
          css: 'collapse navbar-collapse show',
        });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" />
          {/* https://www.iconfinder.com/icons/185113/coffee_streamline_icon
          Creative Commons (Attribution 3.0 Unported);
          https://www.iconfinder.com/webalys */}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={this.state.css}>
          <ul className="navbar-nav mx-auto">
            {links.map(link => {
              return (
                <li key={link.id} className="nav-item">
                  <Link to={link.path} className="nav-link text-capitalize">
                    {link.text}
                  </Link>
                </li>
              );
            })}
            <li className="nav-item ml-sm-5">
              <FaCartArrowDown className="cartIcon" />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
