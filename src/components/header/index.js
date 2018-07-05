import React from 'react';
import { Link } from 'react-router-dom';
import { Toolbar } from 'react-md';

import logo from './images/adeptmind-logo-white.svg';
import HeaderNav from '../../containers/header-nav';

import './header.css';

const HeaderName = () => (
  <span className="adept-app__site-title">
    <Link to='/'>
      <img src={logo} alt="Adeptmind" />
    </Link>
  </span>
);

const Header = () => (
  <Toolbar
    colored
    className='adept-app__header md-paper--2'
    nav={<HeaderName />}
    actions={<HeaderNav />}
  />
);

export default Header;
