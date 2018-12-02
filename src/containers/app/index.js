import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Toolbar } from 'react-md';

import Sidebar from '../sidebar';
import { appRoutes, sidebarNavigation } from '../../constants';
import { exampleOperations } from '../../modules/base';

import logo from '../../logo.svg';

import './app.css';

const AppHeaderLogo = (props) => (
  <img
    alt="Adeptmind"
    src={logo}
  />
);

const App = ({
  exampleValue,
  settings,
  onLogoClick,
}) => {
  const contentClassnames = classNames('adept-app__content-wrapper', {
    'adept-app__content-wrapper--sidebar-closed': settings.sidebar.collapsed,
  });
  return (
    <div className="adept-app__site-wrapper">
      <Toolbar
        colored
        className='adept-app__header'
        title={<AppHeaderLogo onClick={onLogoClick} />}
        zDepth={2}
      />
      <main className={contentClassnames}>
        <Sidebar navigation={sidebarNavigation} />
        <div className="adept-app__main-content">
          <Switch>
            {appRoutes.map((route, i) => (
              <Route
                exact
                key={i}
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </div>
      </main>
    </div>
  );
};

App.propTypes = {
  exampleValue: PropTypes.string.isRequired,
  settings: PropTypes.object.isRequired,
  onLogoClick: PropTypes.func,
};

App.defaultProps = {
  settings: {},
  onLogoClick: () => {},
};

class AppContainer extends Component {

  static propTypes = {
    exampleValue: PropTypes.string.isRequired,
    settings: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.handleLogoClick = this.handleLogoClick.bind(this);
  }

  handleLogoClick() {
    console.log('Click');
  }

  render() {
    return (
      <App
        exampleValue={this.props.exampleValue}
        settings={this.props.settings}
        onLogoClick={this.handleLogoClick}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  // state variables to be injected into props goes here
  exampleValue: state.adept.example.value,
  settings: state.adept.settings,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  ...exampleOperations,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppContainer);
