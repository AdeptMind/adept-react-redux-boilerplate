import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { List, ListItem, Toolbar } from 'react-md';

import Home from '../home';
import logo from '../../logo.svg';

import './app.css';

const AppHeaderLogo = props => <img src={logo} style={{marginTop:3}} />;

const App = ( { exampleValue } ) => {
  return (
    <div className="adept-app__site-wrapper">
      <Toolbar
        colored
        className='adept-app__header'
        title={<AppHeaderLogo />}
        zDepth={2}
      />
      <main className='adept-app__content-wrapper'>
        <div className="adept-app__sidebar">
          <List className="md-paper md-paper--1">
            <ListItem primaryText="Inbox" />
            <ListItem primaryText="Starred" />
            <ListItem primaryText="Sent Mail" />
            <ListItem primaryText="Drafts" />
          </List>
        </div>
        <div className="adept-app__main-content">
          <Switch>
            <Route exact path='/' component={Home}></Route>
          </Switch>
        </div>
      </main>
    </div>
  );
};

App.propTypes = {
  exampleValue: PropTypes.string.isRequired,
};

class AppContainer extends Component {

  static propTypes = {
    exampleValue: PropTypes.string.isRequired,
  };

  render() {
    return (
      <App
        exampleValue={this.props.exampleValue}
      />
    );
  }
}

const mapStateToProps = ( state ) => ({
  // state variables to be injected into props goes here
  exampleValue: state.adept.example.value
});

const mapDispatchToProps = ( dispatch ) => bindActionCreators({
  // ... module operations go here
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
