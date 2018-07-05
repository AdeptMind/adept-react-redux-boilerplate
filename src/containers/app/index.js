import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import Header from '../../components/header';
import Sidebar from '../sidebar';
import { appRoutes, sidebarNavigation } from '../../constants';
import { userOperations } from '../../modules/users';
import { historyShape, userShape } from '../../constants/shapes';

import './app.css';

const App = ({
  settings,
}) => {
  const contentClassnames = classNames('adept-app__content-wrapper', {
    'adept-app__content-wrapper--sidebar-closed': settings.sidebar.collapsed,
  });
  return (
    <div className="adept-app__site-wrapper">
      <Header />
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
  settings: PropTypes.object.isRequired,
  onLogoClick: PropTypes.func,
};

App.defaultProps = {
  settings: {},
  onLogoClick: () => {},
};

class AppContainer extends Component {

  static propTypes = {
    getMyUser: PropTypes.func.isRequired,
    history: historyShape.isRequired,
    settings: PropTypes.object.isRequired,
    user: userShape,
  };

  static defaultProps = {
    user: null,
  };

  componentDidMount() {
    this.props.getMyUser();
    this.locationChangeListener = this.props.history.listen( () => {
      window.scrollTo(0, 0);
    });
  }

  componentWillUnmount() {
    this.locationChangeListener();
  }

  render() {
    return (
      <App
        settings={this.props.settings}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  // state variables to be injected into props goes here
  settings: state.adept.settings,
  user: state.adept.users.me,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  ...userOperations,
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppContainer));
